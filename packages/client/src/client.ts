import { stringify } from 'node:querystring';
import { getEndpoint } from '@blizzard-api/core';
import type { Origins, Locales } from '@blizzard-api/core';
import type { AxiosResponse } from 'axios';
import axios from 'axios';

export interface ClientOptions {
  key: string;
  secret: string;
  origin: Origins;
  locale?: Locales;
  token?: string;
}

interface AccessToken {
  access_token: string;
  token_type: 'bearer';
  expires_in: number;
  sub?: string;
}

interface AccessTokenRequestArguments {
  origin?: Origins;
  key?: string;
  secret?: string;
}

interface ValidateAccessTokenArguments {
  origin?: Origins;
  token?: string;
}

interface ValidateAccessTokenResponse {
  scope: Array<string>;
  account_authorities: Array<unknown>;
  exp: number;
  client_authorities: Array<unknown>;
  authorities: Array<string>;
  client_id: string;
}

interface IBlizzardApiClient {
  getAccessToken: (options: AccessTokenRequestArguments) => Promise<AxiosResponse<AccessToken>>;
  setAccessToken: (token: string) => void;
  refreshAccessToken: (options: AccessTokenRequestArguments) => Promise<AxiosResponse<AccessToken>>;
  validateAccessToken: (options: ValidateAccessTokenArguments) => Promise<AxiosResponse<ValidateAccessTokenResponse>>;
}

export class BlizzardApiClient implements IBlizzardApiClient {
  public defaults: {
    key: string;
    secret: string;
    origin: Origins;
    locale: Locales;
    token?: string;
  };

  constructor(options: ClientOptions) {
    const { origin, locale } = getEndpoint(options.origin, options.locale);
    this.defaults = {
      key: options.key,
      secret: options.secret,
      token: options.token,
      origin: origin,
      locale: locale,
    };
  }

  public axios = axios.create();

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
