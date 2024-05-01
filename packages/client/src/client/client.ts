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

  public getRequestUrl<T, Protected extends boolean = false>(
    resource: Resource<T, object, Protected>,
    options?: Partial<ClientOptions>,
  ) {
    const config = { ...this.defaults, ...options };
    const endpoint = getBlizzardApi(config.origin, config.locale);

    const backslashSeparator = resource.path.startsWith('/') ? '' : '/';

    return `${endpoint.hostname}${backslashSeparator}${resource.path}`;
  }

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
      if (!isAxiosError(error)) {
        throw error;
      }
      throw new AxiosError(error.message, error.code);
    }
  }

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

  public setAccessToken = (token: string): void => {
    this.defaults.token = token;
  };

  public refreshAccessToken = async (options?: AccessTokenRequestArguments): Promise<AxiosResponse<AccessToken>> => {
    const response = await this.getAccessToken(options);
    this.setAccessToken(response.data.access_token);
    return response;
  };

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
