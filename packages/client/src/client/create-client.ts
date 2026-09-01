//We have to explicitly import setTimeout because of https://github.com/electron/electron/issues/21162#issuecomment-554792447
import { setTimeout } from 'node:timers';
import { BlizzardApiClient } from './client';
import type { AccessToken, ClientOptions } from './types';

/**
 * How long before a token's actual expiry it should be refreshed, in milliseconds.
 * This buffer avoids using a token that could expire mid-request.
 */
const REFRESH_BUFFER_MS = 60_000;

/**
 * Calculate the delay (in milliseconds) to wait before refreshing a token, based on the
 * token's remaining lifetime.
 * @param lifetimeInSeconds The token's lifetime in seconds, as returned in the `expires_in`
 * field when requesting a new access token.
 * @returns The delay in milliseconds before the token should be refreshed.
 */
const getRefreshDelayFromLifetime = (lifetimeInSeconds: number): number => lifetimeInSeconds * 1000 - REFRESH_BUFFER_MS;

/**
 * Calculate the delay (in milliseconds) to wait before refreshing a token, based on the
 * token's absolute expiry time.
 * @param expiryInSeconds The token's expiry as a Unix timestamp in seconds, as returned in the
 * `exp` field when validating an existing access token.
 * @returns The delay in milliseconds before the token should be refreshed. May be negative if the
 * token is already within its refresh buffer or expired.
 */
const getRefreshDelayFromExpiry = (expiryInSeconds: number): number =>
  expiryInSeconds * 1000 - REFRESH_BUFFER_MS - Date.now();

/**
 * Create a new Blizzard API client.
 * @param options Client options, see {@link ClientOptions} & https://develop.battle.net/documentation/guides/getting-started
 * @param onTokenRefresh Callback function to handle token refresh. If set to `true`, the client will automatically refresh the token. If set to `false`, the client will not refresh the token. If set to a function, the function will be called with the new token.
 * @returns A new Blizzard API client.
 */
export const createBlizzardApiClient = async (
  options: ClientOptions,
  onTokenRefresh: ((token: AccessToken) => void) | boolean = true,
): Promise<BlizzardApiClient> => {
  const { key, secret, token } = options;
  if (!key) {
    throw new Error(`Client missing 'key' parameter`);
  }
  if (!secret) {
    throw new Error(`Client missing 'secret' parameter`);
  }

  const client = new BlizzardApiClient(options);

  //Schedule a token refresh after the given delay, without keeping the process alive.
  const scheduleRefresh = (delayInMilliseconds: number) => {
    const timeout = setTimeout(() => void refreshToken(), delayInMilliseconds);
    //Unref the timeout so the process can exit while a refresh is pending.
    timeout.unref();
  };

  const refreshToken = async () => {
    const response = await client.refreshAccessToken();

    if (typeof onTokenRefresh === 'function') {
      onTokenRefresh(response);
    }

    scheduleRefresh(getRefreshDelayFromLifetime(response.expires_in));
  };

  //If tokenRefresh is false, return the client without refreshing the token
  if (!onTokenRefresh) {
    return client;
  }

  if (token) {
    try {
      //If token is set, validate the token
      const validatedToken = await client.validateAccessToken({ token });
      const refreshDelay = getRefreshDelayFromExpiry(validatedToken.exp);
      //If the token is already within its refresh buffer, refresh it now.
      if (refreshDelay <= 0) {
        await refreshToken();
      } else {
        //Otherwise schedule a refresh for when the token nears expiry.
        scheduleRefresh(refreshDelay);
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
