import { describe, expect, it } from 'vitest';
import { environment } from '../../../environment';
import { BlizzardApiClient } from '../src';

describe('client', () => {
  const client = new BlizzardApiClient({
    key: environment.blizzardClientId,
    secret: environment.blizzardClientSecret,
    origin: 'eu',
  });

  it('should be able to authorize with the Blizzard API', async () => {
    const response = await client.getAccessToken();

    const { access_token, token_type, expires_in, sub } = response.data;
    expect(access_token).length.greaterThan(0);
    expect(token_type).toBe('bearer');
    expect(expires_in).toBeGreaterThan(0);
    expect(sub).length.greaterThan(0);
  });
  it('should be able to validate the access token', async () => {
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
});
