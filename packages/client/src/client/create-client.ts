import { BlizzardApiClient } from './client';
import type { AccessToken, ClientOptions } from './types';

const getTokenExpiration = (expiresIn: number) => expiresIn * 1000 - 60_000;

/**
 * Create a new Blizzard API client.
 * @param options Client options, see {@link ClientOptions} & https://develop.battle.net/documentation/guides/getting-started
 * @param onTokenRefresh Callback function to handle token refresh. If set to `true`, the client will automatically refresh the token. If set to `false`, the client will not refresh the token. If set to a function, the function will be called with the new token.
 * @returns A new Blizzard API client.
 */
export const createBlizzardApiClient = async (
  options: ClientOptions,
  onTokenRefresh: boolean | ((token: AccessToken) => void) = true,
): Promise<BlizzardApiClient> => {
  const { key, secret, token } = options;
  if (!key) {
    throw new Error(`Client missing 'key' parameter`);
  }
  if (!secret) {
    throw new Error(`Client missing 'secret' parameter`);
  }

  const client = new BlizzardApiClient(options);

  const refreshToken = async () => {
    const response = await client.getAccessToken();

    client.setAccessToken(response.data.access_token);

    if (typeof onTokenRefresh === 'function') {
      onTokenRefresh?.(response.data);
    }

    //Schedule a refresh of the token
    const timeout = setTimeout(() => void refreshToken(), getTokenExpiration(response.data.expires_in));
    timeout.unref();
  };

  //If tokenRefresh is false, return the client without refreshing the token
  if (!onTokenRefresh) {
    return client;
  }

  if (token) {
    try {
      //If token is set, validate the token
      const validatedToken = await client.validateAccessToken({ token });
      const expiry = getTokenExpiration(validatedToken.data.exp);
      //If token is expiring in less than 60 seconds, refresh the token
      if (expiry - Date.now() < 60_000) {
        await refreshToken();
      } else {
        //If token is not expiring, schedule a refresh
        const timeout = setTimeout(() => void refreshToken(), expiry - Date.now());
        //Unref the timeout so the process can exit
        timeout.unref();
      }
    } catch {
      //If token is invalid, refresh the token
      await refreshToken();
    }
  } else {
    //If token is not set, refresh the token
    await refreshToken();
  }

  return client;
};
