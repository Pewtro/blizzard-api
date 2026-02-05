import type { Locales, Origins } from '@blizzard-api/core';
import type { Options as KyOptions } from 'ky';

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

/**
 * A client configuration object.
 * @example
 * const options: ClientOptions = {
 *  key: 'client',
 *  kyOptions: { ... },
 *  secret: 'secret',
 *  origin: 'eu',
 *  locale: 'en_GB',
 *  token: 'access'
 * };
 */
export interface ClientOptions {
  key: string; // The client ID.
  kyOptions?: KyOptions; // The options to pass to the ky client.
  locale?: Locales; // The locale of the Blizzard API.
  origin: Origins; // The region of the Blizzard API.
  secret: string; // The client secret.
  token?: string; // The access token.
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
