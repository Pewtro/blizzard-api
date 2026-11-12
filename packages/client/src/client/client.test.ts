import type { Resource } from '@blizzard-api/core';
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

/**
 * Create a fetch mock that records request URLs and returns a successful JSON response.
 * @param body The response body to return.
 * @returns The mocked fetch function and recorded request URLs.
 */
const createUrlRecordingFetch = (body: unknown) => {
  const urls: Array<string> = [];
  const fetchMock = vitest.fn((input: Request | string | URL) => {
    urls.push(input instanceof Request ? input.url : input.toString());
    return Promise.resolve(Response.json(body));
  });

  return { fetchMock, urls };
};

describe('client request behavior', () => {
  test.each([1, 2, 3, 5])('should make exactly %i attempts when rate limited', async (maxAttempts) => {
    const { attempts, fetchMock } = createFetch(429);
    const client = createClient(fetchMock, { maxAttempts });

    await expect(client.sendRequest({ path: 'test' })).rejects.toMatchObject({ response: { status: 429 } });
    expect(attempts()).toBe(maxAttempts);
  });

  test('should not retry a rate limit when retryOnRateLimit is false', async () => {
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

  test('should continue retrying server errors when retryOnRateLimit is false', async () => {
    const { attempts, fetchMock } = createFetch(500);
    const client = createClient(fetchMock, { maxAttempts: 3, retryOnRateLimit: false });

    await expect(client.sendRequest({ path: 'test' })).rejects.toMatchObject({ response: { status: 500 } });
    expect(attempts()).toBe(3);
  });

  test('should use a protected resource token instead of the client token', () => {
    const client = createClient(vitest.fn());

    const resource: Resource<{ id: number }, object, true> = { path: 'test', token: 'user-token' };
    const config = client.getRequestConfig(resource);

    expect(config.headers.Authorization).toBe('Bearer user-token');
  });

  test('should allow a protected resource token when the client has no token', () => {
    const client = new BlizzardApiClient({ key: 'key', origin: 'eu', secret: 'secret' });

    const resource: Resource<{ id: number }, object, true> = { path: 'test', token: 'user-token' };
    const config = client.getRequestConfig(resource);

    expect(config.headers.Authorization).toBe('Bearer user-token');
  });

  test('should create an isolated client scoped to a user token', () => {
    const client = createClient(vitest.fn());
    const userClient = client.withUserToken('user-token');
    const protectedResource: Resource<{ id: number }, object, true> = { path: 'profile' };

    expect(userClient.getRequestConfig(protectedResource).headers.Authorization).toBe('Bearer user-token');
    expect(client.getRequestConfig({ path: 'public' }).headers.Authorization).toBe('Bearer access');
  });

  test('should allow a per-request token override on a user-scoped client', () => {
    const client = createClient(vitest.fn()).withUserToken('user-token');

    const config = client.getRequestConfig({ path: 'test' }, { token: 'request-token' });

    expect(config.headers.Authorization).toBe('Bearer request-token');
  });

  test('should reject an empty user token', () => {
    const client = createClient(vitest.fn());

    expect(() => client.withUserToken('')).toThrow('A user access token is required.');
  });

  test('should not retry a non rate limit error', async () => {
    const { attempts, fetchMock } = createFetch(404);
    const client = createClient(fetchMock, { maxAttempts: 3 });

    await expect(client.sendRequest({ path: 'test' })).rejects.toMatchObject({ response: { status: 404 } });
    expect(attempts()).toBe(1);
  });

  test('should not retry when kyOptions.retry is false on the client', async () => {
    const { attempts, fetchMock } = createFetch(500);
    const client = createClient(fetchMock, { kyOptions: { retry: false }, maxAttempts: 5 });

    await expect(client.sendRequest({ path: 'test' })).rejects.toMatchObject({ response: { status: 500 } });
    expect(attempts()).toBe(1);
  });

  test('should not retry when kyOptions.retry is false for a request', async () => {
    const { attempts, fetchMock } = createFetch(500);
    const client = createClient(fetchMock, { maxAttempts: 5 });

    await expect(client.sendRequest({ path: 'test' }, { kyOptions: { retry: false } })).rejects.toMatchObject({
      response: { status: 500 },
    });
    expect(attempts()).toBe(1);
  });
});

describe('OAuth endpoint selection', () => {
  test.each([
    { expectedHost: 'oauth.battle.net', origin: 'eu' as const },
    { expectedHost: 'oauth.battlenet.com.cn', origin: 'cn' as const },
  ])('getAccessToken uses the $origin OAuth host', async ({ expectedHost, origin }) => {
    const { fetchMock, urls } = createUrlRecordingFetch({
      access_token: 'access',
      expires_in: 3600,
      token_type: 'bearer',
    });
    const client = createClient(fetchMock, { origin });

    await client.getAccessToken();

    expect(new URL(urls[0]!).origin).toBe(`https://${expectedHost}`);
    expect(new URL(urls[0]!).pathname).toBe('/token');
  });

  test('getAccessToken honors a per-call origin override', async () => {
    const { fetchMock, urls } = createUrlRecordingFetch({
      access_token: 'access',
      expires_in: 3600,
      token_type: 'bearer',
    });
    const client = createClient(fetchMock, { origin: 'eu' });

    await client.getAccessToken({ origin: 'cn' });

    expect(new URL(urls[0]!).origin).toBe('https://oauth.battlenet.com.cn');
  });

  test.each([
    { expectedHost: 'oauth.battle.net', origin: 'eu' as const },
    { expectedHost: 'oauth.battlenet.com.cn', origin: 'cn' as const },
  ])('validateAccessToken uses the $origin OAuth host', async ({ expectedHost, origin }) => {
    const { fetchMock, urls } = createUrlRecordingFetch({ client_id: 'key' });
    const client = createClient(fetchMock, { origin });

    await client.validateAccessToken({ token: 'access' });

    expect(new URL(urls[0]!).origin).toBe(`https://${expectedHost}`);
    expect(new URL(urls[0]!).pathname).toBe('/check_token');
  });
});
