import { beforeEach, describe, test, vi } from 'vitest';

interface ScheduledTimer {
  callback: () => void;
  delay: number;
  unref: ReturnType<typeof vi.fn>;
}

const { refreshAccessToken, scheduled, setAccessToken, validateAccessToken } = vi.hoisted(() => ({
  refreshAccessToken: vi.fn(),
  scheduled: [] as Array<{ callback: () => void; delay: number; unref: ReturnType<typeof vi.fn> }>,
  setAccessToken: vi.fn(),
  validateAccessToken: vi.fn(),
}));

//`create-client` imports `setTimeout` from `node:timers` (for Electron), so the global
//fake timers do not reach it. Mocking the module lets the tests observe and fire the
//scheduled refreshes directly, without waiting on real or faked time.
vi.mock('node:timers', () => ({
  setTimeout: (callback: () => void, delay: number) => {
    const timer: ScheduledTimer = { callback, delay, unref: vi.fn() };
    scheduled.push(timer);
    return timer;
  },
}));

vi.mock('./client', () => ({
  BlizzardApiClient: class {
    public refreshAccessToken = refreshAccessToken;
    public setAccessToken = setAccessToken;
    public validateAccessToken = validateAccessToken;
  },
}));

const { createBlizzardApiClient } = await import('./create-client');

const options = { key: 'test-key', origin: 'eu' as const, secret: 'test-secret' };

const REFRESH_BUFFER_MS = 60_000;
const RETRY_DELAY_MS = 60_000;

/**
 * Flush pending microtasks so an async refresh can settle.
 * @returns A promise resolving once pending microtasks have run.
 */
const settle = (): Promise<void> => {
  return new Promise<void>((resolve) => setImmediate(resolve));
};

/**
 * Fire a scheduled timer and let the async work it kicks off settle.
 * @param index The index of the scheduled timer to fire.
 * @returns A promise that resolves once the callback has been invoked and settled.
 */
const fire = async (index: number) => {
  scheduled[index]?.callback();
  await settle();
};

/**
 * Build a token expiry a number of seconds from now, as returned by `validateAccessToken`.
 * @param seconds How many seconds in the future the token should expire.
 * @returns The expiry as a Unix timestamp in seconds.
 */
const expiryInSeconds = (seconds: number) => Math.round(Date.now() / 1000) + seconds;

describe('createBlizzardApiClient', () => {
  beforeEach(() => {
    scheduled.length = 0;
    refreshAccessToken.mockReset();
    setAccessToken.mockReset();
    validateAccessToken.mockReset();
    refreshAccessToken.mockResolvedValue({ access_token: 'fresh', expires_in: 86_399 });
  });

  test('should request a token when none is supplied', async ({ expect }) => {
    await createBlizzardApiClient(options);

    expect(refreshAccessToken).toHaveBeenCalledTimes(1);
    expect(validateAccessToken).not.toHaveBeenCalled();
  });

  test('should invoke an onTokenRefresh callback with the new token', async ({ expect }) => {
    const onTokenRefresh = vi.fn();

    await createBlizzardApiClient(options, onTokenRefresh);

    expect(onTokenRefresh).toHaveBeenCalledTimes(1);
    expect(onTokenRefresh).toHaveBeenCalledWith(expect.objectContaining({ access_token: 'fresh' }));
  });

  test('should schedule the next refresh one buffer before the token expires', async ({ expect }) => {
    await createBlizzardApiClient(options);

    expect(scheduled).toHaveLength(1);
    expect(scheduled[0]?.delay).toBe(86_399_000 - REFRESH_BUFFER_MS);
  });

  test('should unref the scheduled timeout so it does not keep the process alive', async ({ expect }) => {
    await createBlizzardApiClient(options);

    expect(scheduled[0]?.unref).toHaveBeenCalledTimes(1);
  });

  test('should refresh immediately when a supplied token is already inside the buffer', async ({ expect }) => {
    //`exp` falls within the 60s refresh buffer, so a refresh is due now.
    validateAccessToken.mockResolvedValue({ exp: expiryInSeconds(10) });

    await createBlizzardApiClient({ ...options, token: 'stale' });

    expect(validateAccessToken).toHaveBeenCalledTimes(1);
    expect(refreshAccessToken).toHaveBeenCalledTimes(1);
    expect(scheduled).toHaveLength(1);
  });

  test('should wait until the token nears expiry when the supplied token is still fresh', async ({ expect }) => {
    validateAccessToken.mockResolvedValue({ exp: expiryInSeconds(3600) });

    await createBlizzardApiClient({ ...options, token: 'valid' });

    expect(validateAccessToken).toHaveBeenCalledTimes(1);
    expect(refreshAccessToken).not.toHaveBeenCalled();
    expect(scheduled).toHaveLength(1);
    //`exp` is rounded to whole seconds, so allow a second of drift either way.
    expect(scheduled[0]?.delay).toBeGreaterThan(3_600_000 - REFRESH_BUFFER_MS - 1000);
    expect(scheduled[0]?.delay).toBeLessThan(3_600_000 - REFRESH_BUFFER_MS + 1000);
  });

  test('should refresh when a supplied token fails validation', async ({ expect }) => {
    validateAccessToken.mockRejectedValue(new Error('invalid token'));

    await createBlizzardApiClient({ ...options, token: 'bad' });

    expect(validateAccessToken).toHaveBeenCalledTimes(1);
    expect(refreshAccessToken).toHaveBeenCalledTimes(1);
  });

  test('should neither validate nor schedule when automatic refresh is disabled', async ({ expect }) => {
    await createBlizzardApiClient({ ...options, token: 'valid' }, false);

    expect(validateAccessToken).not.toHaveBeenCalled();
    expect(refreshAccessToken).not.toHaveBeenCalled();
    expect(scheduled).toHaveLength(0);
  });

  test('should not request a token when automatic refresh is disabled and none is supplied', async ({ expect }) => {
    await createBlizzardApiClient(options, false);

    expect(validateAccessToken).not.toHaveBeenCalled();
    expect(refreshAccessToken).not.toHaveBeenCalled();
    expect(scheduled).toHaveLength(0);
  });

  test('should propagate an initial failure when no token is supplied', async ({ expect }) => {
    refreshAccessToken.mockRejectedValue(new Error('network down'));

    await expect(createBlizzardApiClient(options)).rejects.toThrow('network down');
  });

  test('should surface a throwing onTokenRefresh callback to the caller', async ({ expect }) => {
    await expect(
      createBlizzardApiClient(options, () => {
        throw new Error('callback exploded');
      }),
    ).rejects.toThrow('callback exploded');
  });

  test('should keep refreshing after a background refresh fails', async ({ expect }) => {
    refreshAccessToken
      .mockResolvedValueOnce({ access_token: 'first', expires_in: 86_399 })
      .mockRejectedValueOnce(new Error('transient network failure'))
      .mockResolvedValueOnce({ access_token: 'third', expires_in: 86_399 });

    await createBlizzardApiClient(options);
    expect(refreshAccessToken).toHaveBeenCalledTimes(1);

    //Fire the scheduled refresh; it fails.
    await fire(0);
    expect(refreshAccessToken).toHaveBeenCalledTimes(2);

    //The failure must still leave a timer armed rather than abandoning future refreshes.
    expect(scheduled).toHaveLength(2);
    expect(scheduled[1]?.delay).toBe(RETRY_DELAY_MS);

    //The retry fires and succeeds, rearms the normal schedule.
    await fire(1);
    expect(refreshAccessToken).toHaveBeenCalledTimes(3);
    expect(scheduled).toHaveLength(3);
    expect(scheduled[2]?.delay).toBe(86_399_000 - REFRESH_BUFFER_MS);
  });

  test('should keep retrying when repeated background refreshes fail', async ({ expect }) => {
    //The first refresh is awaited by the factory itself, so it must succeed for the
    //client to be created; only the detached background ones fail.
    refreshAccessToken
      .mockResolvedValueOnce({ access_token: 'first', expires_in: 86_399 })
      .mockRejectedValue(new Error('still down'));

    await createBlizzardApiClient(options);
    await fire(0);
    await fire(1);
    await fire(2);

    //Initial attempt plus three failed retries, with a timer armed after each failure.
    expect(refreshAccessToken).toHaveBeenCalledTimes(4);
    expect(scheduled).toHaveLength(4);
  });
});
