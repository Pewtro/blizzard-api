import type { Resource } from '@blizzard-api/core';
import { wow } from '@blizzard-api/wow';
import { describe, it, vitest } from 'vitest';
import { environment } from '../../../../environment';
import { createBlizzardApiClient } from '../client/create-client';

describe.concurrent('client', async () => {
  const client = await createBlizzardApiClient({
    key: environment.blizzardClientId,
    origin: 'eu',
    secret: environment.blizzardClientSecret,
  });

  it("should be able to fetch the client's default values", ({ expect }) => {
    const { key, locale, origin, secret, token } = client.defaults;

    expect(key).toBe(environment.blizzardClientId);
    expect(secret).toBe(environment.blizzardClientSecret);
    expect(origin).toBe('eu');
    expect(locale).toBeDefined();
    expect(token).toBeDefined();
  });

  it('should be able to authorize with the Blizzard API', async ({ expect }) => {
    const response = await client.getAccessToken();

    const { access_token, expires_in, sub, token_type } = response;
    expect(access_token).length.greaterThan(0);
    expect(token_type).toBe('bearer');
    expect(expires_in).toBeGreaterThan(0);
    expect(sub).length.greaterThan(0);
  });

  it('should be able to validate the access token', async ({ expect }) => {
    const response = await client.getAccessToken();

    const { access_token } = response;
    const validateResponse = await client.validateAccessToken({ token: access_token });
    expect(validateResponse.scope).toBeInstanceOf(Array);
    expect(validateResponse.account_authorities).toBeInstanceOf(Array);
    expect(validateResponse.exp).toBeGreaterThan(0);
    expect(validateResponse.client_authorities).toBeInstanceOf(Array);
    expect(validateResponse.authorities).toBeInstanceOf(Array);
    expect(validateResponse.client_id).toBe(client.defaults.key);
  });

  it("should be able to provide a client's access token", ({ expect }) => {
    client.setAccessToken('test_token');

    expect(client.defaults.token).toBe('test_token');
  });

  it('should be able to provide a onTokenRefresh function as the second argument to createBlizzardApiClient', async ({
    expect,
  }) => {
    const testFunction = vitest.fn();
    await createBlizzardApiClient(
      {
        key: environment.blizzardClientId,
        origin: 'eu',
        secret: environment.blizzardClientSecret,
      },
      testFunction,
    );

    expect(testFunction).toHaveBeenCalledTimes(1);
  });

  it('should be able to get an accurate url without prefixing the path with a backslash', ({ expect }) => {
    const resource: Resource<{ name: 'test' }> = {
      path: 'test',
    };

    const url = client.getRequestUrl(resource);

    expect(url).toBe('https://eu.api.blizzard.com/test');
  });

  it('should be able to get an appropriate request config without passing a namespace', ({ expect }) => {
    const resource: Resource<{ name: 'test' }> = {
      path: 'test',
    };

    const config = client.getRequestConfig(resource);

    expect(config.headers.Authorization).toBeDefined();
    expect(config.headers['Battlenet-Namespace']).not.toBeDefined();
    expect(config.headers['Content-Type']).toBeDefined();

    expect(config.searchParams.locale).toBeDefined();
  });

  it("validateAccessToken should throw an error if the access token isn't valid", async ({ expect }) => {
    await expect(() => client.validateAccessToken({ token: undefined })).rejects.toThrow();
  });

  it('should be able to manually refresh the token', async ({ expect }) => {
    const response = await client.refreshAccessToken();

    const { access_token, expires_in, sub, token_type } = response;
    expect(access_token).length.greaterThan(0);
    expect(token_type).toBe('bearer');
    expect(expires_in).toBeGreaterThan(0);
    expect(sub).length.greaterThan(0);
  });

  it("the client will throw an error when requesting resources that don't exist", async ({ expect }) => {
    await expect(() => client.sendRequest(wow.connectedRealm(9_999_999_999))).rejects.toThrow();
  });

  it('the client cannot be created without a client id and secret', async ({ expect }) => {
    await expect(() =>
      //@ts-expect-error expect error when key is missing
      createBlizzardApiClient({ origin: 'eu', secret: environment.blizzardClientSecret }),
    ).rejects.toThrow();

    //@ts-expect-error expect error when secret is missing
    await expect(() => createBlizzardApiClient({ key: environment.blizzardClientId, origin: 'eu' })).rejects.toThrow();
  });

  it("the client can be created without automatic token refresh by setting onTokenRefresh to 'false'", async ({
    expect,
  }) => {
    const noRefreshClient = await createBlizzardApiClient(
      {
        key: environment.blizzardClientId,
        origin: 'eu',
        secret: environment.blizzardClientSecret,
      },
      false,
    );

    const response = await noRefreshClient.getAccessToken();

    const { access_token, expires_in, sub, token_type } = response;
    expect(access_token).length.greaterThan(0);
    expect(token_type).toBe('bearer');
    expect(expires_in).toBeGreaterThan(0);
    expect(sub).length.greaterThan(0);
  });

  it('the client can be created with a pre-existing token', async ({ expect }) => {
    const response = await client.getAccessToken();
    const { access_token } = response;

    const tokenClient = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'eu',
      secret: environment.blizzardClientSecret,
      token: access_token,
    });

    const tokenResponse = await tokenClient.getAccessToken();
    expect(tokenResponse.access_token).toBe(access_token);
  });

  it('the client can be created with a pre-existing expired token', async ({ expect }) => {
    const tokenClient = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'eu',
      secret: environment.blizzardClientSecret,
      token: 'some random token',
    });

    const tokenResponse = await tokenClient.getAccessToken();
    expect(tokenResponse.access_token).toBeDefined();
  });

  it('getRequestConfig should include correct headers and searchParams', ({ expect }) => {
    const resource: Resource<{ foo: string }> = {
      parameters: { bar: 'baz', unused: undefined },
      path: '/foo',
    };
    const config = client.getRequestConfig(resource, undefined, { 'X-Test': 'yes' });

    expect(config.headers.Authorization).toBeDefined();
    expect(config.headers['Content-Type']).toBe('application/json');
    expect(config.headers['X-Test']).toBe('yes');
    expect(config.searchParams.locale).toBeDefined();
    expect(config.searchParams.bar).toBe('baz');
    expect(config.searchParams.unused).toBeUndefined();
  });
});
