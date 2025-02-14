import type { Locales, Origins } from '@blizzard-api/core';

/**
 * An access token response from the Blizzard API.
 * @see https://develop.battle.net/documentation/guides/using-oauth
 * @see https://develop.battle.net/documentation/guides/using-oauth/client-credentials-flow¨
 * @example
 * const response: AccessToken = {
 *  access_token: 'access-token',
 *  token_type: 'bearer',
 *  expires_in: 86399,
 *  sub: 'client-id',
 * };
 */
export interface AccessToken {
  access_token: string; // The access token.
  expires_in: number; // The time in seconds until the token expires.
  sub?: string; // The subject (unique user identifier) of the token.
  token_type: 'bearer'; // The type of token.
}

/**
 * An access token request.
 * @see https://develop.battle.net/documentation/guides/using-oauth/client-credentials-flow
 * @example
 * const request: AccessTokenRequestArguments = {
 *  origin: 'eu',
 *  key: 'client',
 *  secret: 'secret'
 * };
 */
export interface AccessTokenRequestArguments {
  key?: string; // The client ID.
  origin?: Origins; // The region to request the access token from.
  secret?: string; // The client secret.
}

export type AxiosCompatability<T> = T & {
  /**
   * @deprecated
   * This property is only here for backward compatibility, it will be removed in the next major version.
   * All data should be accessed directly from the response object instead of through this property.
   */
  data: T;
};

/**
 * A client configuration object.
 * @example
 * const options: ClientOptions = {
 *  key: 'client',
 *  secret: 'secret',
 *  origin: 'eu',
 *  locale: 'en_GB',
 *  token: 'access'
 * };
 */
export interface ClientOptions {
  key: string; // The client ID.
  locale?: Locales; // The locale of the Blizzard API.
  origin: Origins; // The region of the Blizzard API.
  secret: string; // The client secret.
  token?: string; // The access token.
}

/**
 * A Blizzard API client.
 */
export interface IBlizzardApiClient {
  getAccessToken: (options: AccessTokenRequestArguments) => Promise<AxiosCompatability<AccessToken>>; // Get an access token.
  refreshAccessToken: (options: AccessTokenRequestArguments) => Promise<AxiosCompatability<AccessToken>>; // Refresh an access token.
  setAccessToken: (token: string) => void; // Set an access token.
  validateAccessToken: (
    options: ValidateAccessTokenArguments,
  ) => Promise<AxiosCompatability<ValidateAccessTokenResponse>>; // Validate an access token.
}

/**
 * Validate an access token.
 * @see https://develop.battle.net/documentation/guides/using-oauth/client-credentials-flow
 * @example
 * const request: ValidateAccessTokenArguments = {
 *  origin: 'eu',
 *  token: 'access'
 * };
 */
export interface ValidateAccessTokenArguments {
  origin?: Origins; // The region to validate the access token from.
  token?: string; // The access token to validate.
}

/**
 * A response from validating an access token.
 * @see https://develop.battle.net/documentation/guides/using-oauth/client-credentials-flow
 * @example
 * const response: ValidateAccessTokenResponse = {
 *  scope: ['wow.profile'],
 *  account_authorities: [],
 *  exp: 1617000000,
 *  client_authorities: [],
 *  authorities: ['wow.profile'],
 *  client_id: 'client'
 * };
 */
export interface ValidateAccessTokenResponse {
  account_authorities: Array<unknown>; // The account authorities.
  authorities: Array<string>; // The authorities.
  client_authorities: Array<unknown>; // The client authorities.
  client_id: string; // The client ID.
  exp: number; // The expiration time of the token.
  scope: Array<string>; // The scope of the token.
}
