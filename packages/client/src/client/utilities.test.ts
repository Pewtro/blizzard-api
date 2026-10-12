import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import { validateClientOptions, withRateLimitRetry } from './utilities';

/**
 * Build an error shaped like the one `ky` throws on a non-2xx response, since
 * `withRateLimitRetry` inspects `error.response.status` and `error.response.headers`.
 * @param headers The response headers to attach, e.g. `Retry-After`.
 * @param status The HTTP status code to attach to the response.
 * @returns An error carrying a `response` shaped like `ky`'s.
 */
const httpError = (headers: Record<string, string>, status: number) => {
  const error = new Error(`HTTP ${status}`) as Error & {
    response?: { headers: Headers; status: number };
  };
  error.response = {
    headers: new Headers(headers),
    status,
  };
  return error;
};

describe('withRateLimitRetry', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  test('should return the result without retrying when the request succeeds', async () => {
    const request = vi.fn().mockResolvedValue('ok');

    await expect(withRateLimitRetry(request)).resolves.toBe('ok');
    expect(request).toHaveBeenCalledTimes(1);
  });

  test('should retry after a 429 and return the eventual success', async () => {
    const request = vi.fn().mockRejectedValueOnce(httpError({}, 429)).mockResolvedValueOnce('recovered');

    const pending = withRateLimitRetry(request);
    await vi.runAllTimersAsync();

    await expect(pending).resolves.toBe('recovered');
    expect(request).toHaveBeenCalledTimes(2);
  });

  test('should keep retrying a 429 until it succeeds', async () => {
    const request = vi
      .fn()
      .mockRejectedValueOnce(httpError({}, 429))
      .mockRejectedValueOnce(httpError({}, 429))
      .mockRejectedValueOnce(httpError({}, 429))
      .mockResolvedValueOnce('recovered');

    const pending = withRateLimitRetry(request, { maxAttempts: 5 });
    await vi.runAllTimersAsync();

    await expect(pending).resolves.toBe('recovered');
    expect(request).toHaveBeenCalledTimes(4);
  });

  test('should throw the last error once maxAttempts is exhausted', async () => {
    const error = httpError({}, 429);
    const request = vi.fn().mockRejectedValue(error);

    const pending = withRateLimitRetry(request, { maxAttempts: 3 });
    const assertion = expect(pending).rejects.toBe(error);

    await vi.runAllTimersAsync();

    await assertion;
    //The initial attempt plus two retries.
    expect(request).toHaveBeenCalledTimes(3);
  });

  test('should never retry when retryOnRateLimit is false', async () => {
    const error = httpError({}, 429);
    const request = vi.fn().mockRejectedValue(error);

    await expect(withRateLimitRetry(request, { retryOnRateLimit: false })).rejects.toBe(error);
    expect(request).toHaveBeenCalledTimes(1);
  });

  test.each([401, 403, 404, 500])('should not retry a non-429 %i response', async (status) => {
    const error = httpError({}, status);
    const request = vi.fn().mockRejectedValue(error);

    await expect(withRateLimitRetry(request)).rejects.toBe(error);
    expect(request).toHaveBeenCalledTimes(1);
  });

  test('should honour the Retry-After header when it is numeric', async () => {
    const request = vi
      .fn()
      .mockRejectedValueOnce(httpError({ 'Retry-After': '2' }, 429))
      .mockResolvedValueOnce('ok');

    const pending = withRateLimitRetry(request);
    await vi.advanceTimersByTimeAsync(1999);
    expect(request).toHaveBeenCalledTimes(1);

    await vi.advanceTimersByTimeAsync(1);
    await expect(pending).resolves.toBe('ok');
    expect(request).toHaveBeenCalledTimes(2);
  });

  test('should fall back to exponential backoff when Retry-After is not numeric', async () => {
    const request = vi
      .fn()
      .mockRejectedValueOnce(httpError({ 'Retry-After': 'soon' }, 429))
      .mockResolvedValueOnce('ok');

    const pending = withRateLimitRetry(request);

    //The first backoff is well under a second, so advancing a generous amount is enough.
    await vi.advanceTimersByTimeAsync(1000);
    await expect(pending).resolves.toBe('ok');
    expect(request).toHaveBeenCalledTimes(2);
  });

  test('should cap the exponential backoff so a retry cannot hang indefinitely', async () => {
    const request = vi.fn().mockRejectedValue(httpError({}, 429));

    const pending = withRateLimitRetry(request, { maxAttempts: 10 });
    const assertion = expect(pending).rejects.toThrow();

    //If the backoff were uncapped, 30 seconds would not be enough for ten attempts.
    await vi.advanceTimersByTimeAsync(30_000);

    await assertion;
    expect(request).toHaveBeenCalledTimes(10);
  });

  test.each([
    { expected: 3, maxAttempts: 0 },
    { expected: 3, maxAttempts: NaN },
    { expected: 1, maxAttempts: 1 },
    { expected: 2, maxAttempts: 2.9 },
  ])('should clamp maxAttempts=$maxAttempts to $expected attempt(s)', async ({ expected, maxAttempts }) => {
    const request = vi.fn().mockRejectedValue(httpError({}, 429));

    const pending = withRateLimitRetry(request, { maxAttempts });
    const assertion = expect(pending).rejects.toThrow();
    await vi.runAllTimersAsync();

    await assertion;
    expect(request).toHaveBeenCalledTimes(expected);
  });
});

describe('validateClientOptions', () => {
  const valid = { key: 'key', origin: 'eu' as const, secret: 'secret' };

  test('should accept a complete configuration', () => {
    expect(() => {
      validateClientOptions(valid);
    }).not.toThrow();
  });

  test.each([
    { expected: 'key', options: { ...valid, key: '' } },
    { expected: 'secret', options: { ...valid, secret: '' } },
    { expected: 'origin', options: { ...valid, origin: '' as unknown as 'eu' } },
  ])('should reject a missing $expected', ({ options }) => {
    expect(() => {
      validateClientOptions(options);
    }).toThrow();
  });
});
