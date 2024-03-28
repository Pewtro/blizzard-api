import type { Origins } from '@blizzard-api/core';
import type { AxiosResponse } from 'axios';

export interface AccessToken {
  access_token: string;
  token_type: 'bearer';
  expires_in: number;
  sub?: string;
}

export interface AccessTokenRequestArguments {
  origin?: Origins;
  key?: string;
  secret?: string;
}

export interface ValidateAccessTokenArguments {
  origin?: Origins;
  token?: string;
}

export interface ValidateAccessTokenResponse {
  scope: Array<string>;
  account_authorities: Array<unknown>;
  exp: number;
  client_authorities: Array<unknown>;
  authorities: Array<string>;
  client_id: string;
}

export interface IBlizzardApiClient {
  getAccessToken: (options: AccessTokenRequestArguments) => Promise<AxiosResponse<AccessToken>>;
  setAccessToken: (token: string) => void;
  refreshAccessToken: (options: AccessTokenRequestArguments) => Promise<AxiosResponse<AccessToken>>;
  validateAccessToken: (options: ValidateAccessTokenArguments) => Promise<AxiosResponse<ValidateAccessTokenResponse>>;
}
