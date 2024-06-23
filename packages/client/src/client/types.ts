import type { Locales, Origins } from '@blizzard-api/core';
import type { AxiosResponse } from 'axios';

/**
 * An access token response from the Blizzard API.
 * @see https://develop.battle.net/documentation/guides/using-oauth
 * @see https://develop.battle.net/documentation/guides/using-oauth/client-credentials-flow¨
 * @interface AccessToken
 * @property access_token The access token.
 * @property token_type The type of token.
 * @property expires_in The time in seconds until  the token expires.
 * @property sub The subject (unique user identifier) of the token.
 * @example
 * const response: AccessToken = {
 *  access_token: 'access-token',
 *  token_type: 'bearer',
 *  expires_in: 86399,
 *  sub: 'client-id',
 * };
 */
export interface AccessToken {
  access_token: string;
  expires_in: number;
  sub?: string;
  token_type: 'bearer';
}

/**
 * An access token request.
 * @see https://develop.battle.net/documentation/guides/using-oauth/client-credentials-flow
 * @interface AccessTokenRequestArguments
 * @property origin The region to request the access token from.
 * @property key The client ID.
 * @property secret The client secret.
 * @example
 * const request: AccessTokenRequestArguments = {
 *  origin: 'eu',
 *  key: 'client',
 *  secret: 'secret'
 * };
 */
export interface AccessTokenRequestArguments {
  key?: string;
  origin?: Origins;
  secret?: string;
}

/**
 * Validate an access token.
 * @see https://develop.battle.net/documentation/guides/using-oauth/client-credentials-flow
 * @interface ValidateAccessTokenArguments
 * @property origin The region to validate the access token from.
 * @property token The access token to validate.
 * @example
 * const request: ValidateAccessTokenArguments = {
 *  origin: 'eu',
 *  token: 'access'
 * };
 */
export interface ValidateAccessTokenArguments {
  origin?: Origins;
  token?: string;
}

/**
 * A response from validating an access token.
 * @see https://develop.battle.net/documentation/guides/using-oauth/client-credentials-flow
 * @interface ValidateAccessTokenResponse
 * @property scope The scope of the token.
 * @property account_authorities The account authorities.
 * @property exp The expiration time of the token.
 * @property client_authorities The client authorities.
 * @property authorities The authorities.
 * @property client_id The client ID.
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
  account_authorities: Array<unknown>;
  authorities: Array<string>;
  client_authorities: Array<unknown>;
  client_id: string;
  exp: number;
  scope: Array<string>;
}

/**
 * A client configuration object.
 * @interface ClientOptions
 * @property key The client ID.
 * @property secret The client secret.
 * @property origin The region of the Blizzard API.
 * @property locale The locale of the Blizzard API.
 * @property token The access token.
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
  key: string;
  locale?: Locales;
  origin: Origins;
  secret: string;
  token?: string;
}

/**
 * A Blizzard API client.
 * @interface IBlizzardApiClient
 * @property getAccessToken Get an access token.
 * @property setAccessToken Set an access token.
 * @property refreshAccessToken Refresh an access token.
 * @property validateAccessToken Validate an access token.
 */
export interface IBlizzardApiClient {
  getAccessToken: (options: AccessTokenRequestArguments) => Promise<AxiosResponse<AccessToken>>;
  refreshAccessToken: (options: AccessTokenRequestArguments) => Promise<AxiosResponse<AccessToken>>;
  setAccessToken: (token: string) => void;
  validateAccessToken: (options: ValidateAccessTokenArguments) => Promise<AxiosResponse<ValidateAccessTokenResponse>>;
}
