import { describe, it, vitest } from 'vitest';
import { environment } from '../../../../environment';
import { createBlizzardApiClient } from '../client/create-client';

describe.concurrent('client', async () => {
  const client = await createBlizzardApiClient({
    key: environment.blizzardClientId,
    secret: environment.blizzardClientSecret,
    origin: 'eu',
  });

  it("should be able to fetch the client's default values", ({ expect }) => {
    const { key, secret, origin, locale, token } = client.defaults;

    expect(key).toBe(environment.blizzardClientId);
    expect(secret).toBe(environment.blizzardClientSecret);
    expect(origin).toBe('eu');
    expect(locale).toBeDefined();
    expect(token).toBeDefined();
  });

  it('should be able to authorize with the Blizzard API', async ({ expect }) => {
    const response = await client.getAccessToken();

    const { access_token, token_type, expires_in, sub } = response.data;
    expect(access_token).length.greaterThan(0);
    expect(token_type).toBe('bearer');
    expect(expires_in).toBeGreaterThan(0);
    expect(sub).length.greaterThan(0);
  });

  it('should be able to validate the access token', async ({ expect }) => {
    const response = await client.getAccessToken();

    const { access_token } = response.data;
    const validateResponse = await client.validateAccessToken({ token: access_token });
    expect(validateResponse.data.scope).toBeInstanceOf(Array);
    expect(validateResponse.data.account_authorities).toBeInstanceOf(Array);
    expect(validateResponse.data.exp).toBeGreaterThan(0);
    expect(validateResponse.data.client_authorities).toBeInstanceOf(Array);
    expect(validateResponse.data.authorities).toBeInstanceOf(Array);
    expect(validateResponse.data.client_id).toBe(client.defaults.key);
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
        secret: environment.blizzardClientSecret,
        origin: 'eu',
      },
      testFunction,
    );

    expect(testFunction).toHaveBeenCalledTimes(1);
  });
});
