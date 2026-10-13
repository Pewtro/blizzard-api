import { describe, expect, test, vitest } from 'vitest';
import { BlizzardApiClient } from './client';
import type { ClientOptions } from './types';

/**
 * A client whose requests never leave the process, and whose retries are
 * immediate so the tests do not have to wait out a real backoff.
 * @param fetchMock The `fetch` stand-in to route every attempt through.
 * @param options Additional client options to merge in.
 * @returns A configured client.
 */
const createClient = (fetchMock: NonNullable<ClientOptions['kyOptions']>['fetch'], options?: Partial<ClientOptions>) =>
  new BlizzardApiClient({
    key: 'key',
    origin: 'eu',
    secret: 'secret',
    token: 'access',
    ...options,
    kyOptions: {
      fetch: fetchMock,
      //Immediate retries keep the tests fast. The attempt count is still owned by
      //the client, which maps `maxAttempts` onto ky's retry limit.
      retry: { delay: () => 0 },
      ...options?.kyOptions,
    },
  });

/**
 * Build a `fetch` stand-in that records every attempt and always answers with the
 * same status code. Handing it to ky through `kyOptions.fetch` exercises the
 * real ky retry pipeline, including the client's own retry configuration, without
 * any network access.
 * @param status The status code to answer every attempt with.
 * @returns The mock `fetch` and a function reporting the attempt count.
 */
const createFetch = (status: number) => {
  let attempts = 0;

  const fetchMock = vitest.fn(() => {
    attempts += 1;
    return Promise.resolve(Response.json({ status }, { status }));
  });

  return { attempts: () => attempts, fetchMock };
};

describe('client retries', () => {
  test.each([1, 2, 3, 5])('should make exactly %i attempts when rate limited', async (maxAttempts) => {
    const { attempts, fetchMock } = createFetch(429);
    const client = createClient(fetchMock, { maxAttempts });

    await expect(client.sendRequest({ path: 'test' })).rejects.toMatchObject({ response: { status: 429 } });
    expect(attempts()).toBe(maxAttempts);
  });

  test('should not retry at all when retryOnRateLimit is false', async () => {
    const { attempts, fetchMock } = createFetch(429);
    const client = createClient(fetchMock, { maxAttempts: 5, retryOnRateLimit: false });

    await expect(client.sendRequest({ path: 'test' })).rejects.toMatchObject({ response: { status: 429 } });
    expect(attempts()).toBe(1);
  });

  test('should retry the token endpoint on a rate limit', async () => {
    const { attempts, fetchMock } = createFetch(429);
    const client = createClient(fetchMock, { maxAttempts: 3 });

    await expect(client.getAccessToken()).rejects.toMatchObject({ response: { status: 429 } });
    expect(attempts()).toBe(3);
  });

  test('should not retry the token endpoint when retryOnRateLimit is false', async () => {
    const { attempts, fetchMock } = createFetch(429);
    const client = createClient(fetchMock, { maxAttempts: 3, retryOnRateLimit: false });

    await expect(client.getAccessToken()).rejects.toMatchObject({ response: { status: 429 } });
    expect(attempts()).toBe(1);
  });

  test('should recover once the rate limit clears', async () => {
    let attempts = 0;

    //Rate limit the first two attempts, then succeed.
    const fetchMock = vitest.fn(() => {
      attempts += 1;

      return Promise.resolve(
        attempts < 3 ? Response.json({ status: 429 }, { status: 429 }) : Response.json({ name: 'recovered' }),
      );
    });

    const client = createClient(fetchMock, { maxAttempts: 3 });

    await expect(client.sendRequest<{ name: string }>({ path: 'test' })).resolves.toStrictEqual({
      name: 'recovered',
    });
    expect(attempts).toBe(3);
  });

  test('should honour a per request maxAttempts override', async () => {
    const { attempts, fetchMock } = createFetch(429);
    const client = createClient(fetchMock, { maxAttempts: 5 });

    await expect(client.sendRequest({ path: 'test' }, { maxAttempts: 2 })).rejects.toMatchObject({
      response: { status: 429 },
    });
    expect(attempts()).toBe(2);
  });

  test('should honour a per request retryOnRateLimit override', async () => {
    const { attempts, fetchMock } = createFetch(429);
    const client = createClient(fetchMock, { maxAttempts: 5 });

    await expect(client.sendRequest({ path: 'test' }, { retryOnRateLimit: false })).rejects.toMatchObject({
      response: { status: 429 },
    });
    expect(attempts()).toBe(1);
  });

  test('should not retry a non rate limit error', async () => {
    const { attempts, fetchMock } = createFetch(404);
    const client = createClient(fetchMock, { maxAttempts: 3 });

    await expect(client.sendRequest({ path: 'test' })).rejects.toMatchObject({ response: { status: 404 } });
    expect(attempts()).toBe(1);
  });
});
