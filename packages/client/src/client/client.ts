import { stringify } from 'node:querystring';
import { getBlizzardApi } from '@blizzard-api/core';
import type { Origins, Locales, ResourceResponse, Resource } from '@blizzard-api/core';
import type { AxiosResponse } from 'axios';
import axios, { AxiosError, isAxiosError } from 'axios';
import type {
  AccessToken,
  AccessTokenRequestArguments,
  ClientOptions,
  IBlizzardApiClient,
  ValidateAccessTokenArguments,
  ValidateAccessTokenResponse,
} from './types';

/**
 * A Blizzard API client.
 * @implements IBlizzardApiClient
 * @class
 * @classdesc A client to interact with the Blizzard API.
 * @example
 * const client = new BlizzardApiClient({
 *  key: 'client',
 *  secret: 'secret',
 *  origin: 'eu',
 *  locale: 'en_GB',
 *  token: 'access'
 * });
 */
export class BlizzardApiClient implements IBlizzardApiClient {
  public defaults: {
    key: string;
    secret: string;
    origin: Origins;
    locale: Locales;
    token?: string;
  };

  constructor(options: ClientOptions) {
    const { origin, locale } = getBlizzardApi(options.origin, options.locale);
    this.defaults = {
      key: options.key,
      secret: options.secret,
      token: options.token,
      origin: origin,
      locale: locale,
    };
  }

  private axios = axios.create();

  /**
   * Get the request URL.
   * @param resource The resource to fetch. See {@link Resource}.
   * @param options Client options. See {@link ClientOptions}.
   * @returns The request URL.
   */
  public getRequestUrl<T, Protected extends boolean = false>(
    resource: Resource<T, object, Protected>,
    options?: Partial<ClientOptions>,
  ) {
    const config = { ...this.defaults, ...options };
    const endpoint = getBlizzardApi(config.origin, config.locale);

    const backslashSeparator = resource.path.startsWith('/') ? '' : '/';

    return `${endpoint.hostname}${backslashSeparator}${resource.path}`;
  }

  /**
   * Get the request configuration.
   * @param resource The resource to fetch. See {@link Resource}.
   * @param options Client options. See {@link ClientOptions}.
   * @param headers Additional headers to include in the request.
   * @returns The request configuration.
   */
  public getRequestConfig<T, Protected extends boolean = false>(
    resource: Resource<T, object, Protected>,
    options?: Partial<ClientOptions>,
    headers?: Record<string, string>,
  ) {
    const config = { ...this.defaults, ...options };
    const endpoint = getBlizzardApi(config.origin, config.locale);

    const namespace = resource.namespace
      ? { 'Battlenet-Namespace': `${resource.namespace}-${endpoint.origin}` }
      : undefined;

    return {
      headers: {
        ...headers,
        ...namespace,
        'Content-Type': 'application/json',
        Authorization: `Bearer ${config.token}`,
      },
      params: {
        locale: endpoint.locale,
        ...resource.parameters,
      },
    };
  }

  /**
   * Send a request to the Blizzard API.
   * @param resource The resource to fetch. See {@link Resource}.
   * @param options Client options. See {@link ClientOptions}.
   * @param headers Additional headers to include in the request.
   * @returns The response from the Blizzard API. See {@link ResourceResponse}.
   */
  public async sendRequest<T, Protected extends boolean = false>(
    resource: Resource<T, object, Protected>,
    options?: Partial<ClientOptions>,
    headers?: Record<string, string>,
  ): ResourceResponse<AxiosResponse<T>> {
    const url = this.getRequestUrl(resource, options);
    const config = this.getRequestConfig(resource, options, headers);

    try {
      return await this.axios.get<T>(url, config);
    } catch (error) {
      if (isAxiosError(error)) {
        throw new AxiosError(error.message, error.code);
      }
      throw error;
    }
  }

  /**
   * Get an access token.
   * @param options The access token request arguments. See {@link AccessTokenRequestArguments}.
   * @returns The access token. See {@link AccessToken}.
   * @example
   * const response = await client.getAccessToken();
   * const { access_token, token_type, expires_in, sub } = response.data;
   * console.log(access_token, token_type, expires_in, sub);
   * // => 'access'
   * // => 'bearer'
   * // => 86399
   * // => 'client-id'
   */
  public getAccessToken = async (options?: AccessTokenRequestArguments): Promise<AxiosResponse<AccessToken>> => {
    const { key, secret, origin } = { ...this.defaults, ...options };
    return this.axios.post<AccessToken>(`https://${origin}.battle.net/oauth/token`, undefined, {
      params: {
        grant_type: 'client_credentials',
      },
      auth: {
        username: key,
        password: secret,
      },
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  /**
   * Set the access token.
   * @param token The access token.
   */
  public setAccessToken = (token: string): void => {
    this.defaults.token = token;
  };

  /**
   * Refresh the access token.
   * @param options The access token request arguments. See {@link AccessTokenRequestArguments}.
   * @returns The access token. See {@link AccessToken}.
   * @example
   * const response = await client.refreshAccessToken();
   * const { access_token, token_type, expires_in, sub } = response.data;
   * console.log(access_token, token_type, expires_in, sub);
   * // => 'access'
   * // => 'bearer'
   * // => 86399
   * // => 'client-id'
   */
  public refreshAccessToken = async (options?: AccessTokenRequestArguments): Promise<AxiosResponse<AccessToken>> => {
    const response = await this.getAccessToken(options);
    this.setAccessToken(response.data.access_token);
    return response;
  };

  /**
   * Validate an access token.
   * @param options The validate access token arguments. See {@link ValidateAccessTokenArguments}.
   * @returns The response from the Blizzard API. See {@link ValidateAccessTokenResponse}.
   * @example
   * const response = await client.validateAccessToken({ token: 'access' });
   * console.log(response.data.client_id);
   * // => 'client-id'
   */
  public validateAccessToken = async (
    options?: ValidateAccessTokenArguments,
  ): Promise<AxiosResponse<ValidateAccessTokenResponse>> => {
    const { origin, token } = { ...this.defaults, ...options };

    if (!token) {
      throw new Error('No token has been set previously or been passed to the validateAccessToken method.');
    }

    return await this.axios.post<ValidateAccessTokenResponse>(
      `https://${origin}.battle.net/oauth/check_token`,
      stringify({ token }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    );
  };
}
