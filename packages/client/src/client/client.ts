import { stringify } from 'node:querystring';
import { getBlizzardApi } from '@blizzard-api/core';
import type { Locales, Origins, Resource, ResourceResponse } from '@blizzard-api/core';
import ky from 'ky';
import type {
  AccessToken,
  AccessTokenRequestArguments,
  AxiosCompatability,
  ClientOptions,
  IBlizzardApiClient,
  ValidateAccessTokenArguments,
  ValidateAccessTokenResponse,
} from './types';

/**
 * A Blizzard API client.
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
    locale: Locales;
    origin: Origins;
    secret: string;
    token?: string;
  };

  private ky = ky.create();

  constructor(options: ClientOptions) {
    const { locale, origin } = getBlizzardApi(options.origin, options.locale);
    this.defaults = {
      key: options.key,
      locale: locale,
      origin: origin,
      secret: options.secret,
      token: options.token,
    };
  }

  /**
   * Get an access token.
   * @param options The access token request arguments. See {@link AccessTokenRequestArguments}.
   * @returns The access token. See {@link AccessToken}.
   * @example
   * const response = await client.getAccessToken();
   * const { access_token, token_type, expires_in, sub } = response;
   * console.log(access_token, token_type, expires_in, sub);
   * // => 'access'
   * // => 'bearer'
   * // => 86399
   * // => 'client-id'
   */
  public getAccessToken = async (options?: AccessTokenRequestArguments): Promise<AxiosCompatability<AccessToken>> => {
    const { key, origin, secret } = { ...this.defaults, ...options };
    const basicAuth = Buffer.from(`${key}:${secret}`).toString('base64');
    const response = await this.ky
      .post<AccessToken>(`https://${origin}.battle.net/oauth/token`, {
        headers: {
          Authorization: `Basic ${basicAuth}`,
          'Content-Type': 'application/json',
        },
        searchParams: {
          grant_type: 'client_credentials',
        },
      })
      .json();

    return {
      data: response,
      ...response,
    };
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
   * const { access_token, token_type, expires_in, sub } = response;
   * console.log(access_token, token_type, expires_in, sub);
   * // => 'access'
   * // => 'bearer'
   * // => 86399
   * // => 'client-id'
   */
  public refreshAccessToken = async (
    options?: AccessTokenRequestArguments,
  ): Promise<AxiosCompatability<AccessToken>> => {
    const response = await this.getAccessToken(options);
    this.setAccessToken(response.access_token);
    return response;
  };

  /**
   * Validate an access token.
   * @param options The validate access token arguments. See {@link ValidateAccessTokenArguments}.
   * @returns The response from the Blizzard API. See {@link ValidateAccessTokenResponse}.
   * @example
   * const response = await client.validateAccessToken({ token: 'access' });
   * console.log(response.client_id);
   * // => 'client-id'
   */
  public validateAccessToken = async (
    options?: ValidateAccessTokenArguments,
  ): Promise<AxiosCompatability<ValidateAccessTokenResponse>> => {
    const { origin, token } = { ...this.defaults, ...options };

    if (!token) {
      throw new Error('No token has been set previously or been passed to the validateAccessToken method.');
    }

    const response = await this.ky
      .post<ValidateAccessTokenResponse>(`https://${origin}.battle.net/oauth/check_token`, {
        body: stringify({ token }),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
      .json();

    return {
      data: response,
      ...response,
    };
  };

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

    const parameters = resource.parameters as Record<string, unknown>;
    if (parameters) {
      for (const key of Object.keys(parameters)) {
        if (parameters[key] === undefined) {
          delete parameters[key];
        }
      }
    }

    return {
      headers: {
        ...headers,
        ...namespace,
        Authorization: `Bearer ${config.token}`,
        'Content-Type': 'application/json',
      },
      searchParams: {
        locale: endpoint.locale,
        ...resource.parameters,
      },
    };
  }

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
  ): ResourceResponse<AxiosCompatability<T>> {
    const url = this.getRequestUrl(resource, options);
    const config = this.getRequestConfig(resource, options, headers);

    const response = await this.ky.get<T>(url, config);
    const data = await response.json();

    return {
      data,
      ...data,
    };
  }
}
