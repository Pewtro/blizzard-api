import { stringify } from 'node:querystring';
import { getBlizzardApi } from '@blizzard-api/core';
import type { Locales, Origins, Resource } from '@blizzard-api/core';
import ky from 'ky';
import type {
  AccessToken,
  AccessTokenRequestArguments,
  ClientOptions,
  ValidateAccessTokenArguments,
  ValidateAccessTokenResponse,
} from './types';
import { clampMaxAttempts, getRetryOptions, validateClientOptions } from './utilities';

const tokenRefreshCancellationHandlers = new WeakMap<object, () => void>();

/**
 * Get the OAuth host for a Blizzard region.
 * @param origin The region of the Blizzard API.
 * @returns The OAuth host for the region.
 */
const getOAuthHost = (origin: Origins): string =>
  origin === 'cn' ? 'https://oauth.battlenet.com.cn' : 'https://oauth.battle.net';

/**
 * Register the automatic token refresh cancellation handler for a client.
 * @param client The client to associate with the cancellation handler.
 * @param handler The callback that cancels the scheduled refresh.
 */
export const setTokenRefreshCancellationHandler = (client: object, handler: () => void): void => {
  tokenRefreshCancellationHandlers.set(client, handler);
};

/**
 * A Blizzard API client.
 * @example
 * const client = new BlizzardApiClient({
 *  key: 'client',
 *  secret: 'secret',
 *  origin: 'eu',
 *  locale: 'en_GB',
 *  token: 'access'
 * });
 */
export class BlizzardApiClient {
  public defaults: {
    key: string;
    locale: Locales;
    maxAttempts: number;
    origin: Origins;
    retryOnRateLimit: boolean;
    secret: string;
    token?: string;
  };

  private readonly defaultKyOptions: ClientOptions['kyOptions'];

  private ky;

  private userToken?: string;

  constructor(options: ClientOptions) {
    validateClientOptions(options);

    const { locale, origin } = getBlizzardApi(options.origin, options.locale);
    this.defaults = {
      key: options.key,
      locale: locale,
      maxAttempts: clampMaxAttempts(options.maxAttempts),
      origin: origin,
      retryOnRateLimit: options.retryOnRateLimit ?? true,
      secret: options.secret,
      token: options.token,
    };
    this.defaultKyOptions = options.kyOptions;
    const kyOptions = {
      timeout: 15_000,
      ...options.kyOptions,
      //Merged rather than spread on top, so that a `kyOptions.retry` override
      //keeps the client's method and backoff defaults instead of replacing them.
      retry: getRetryOptions(options),
    };
    this.ky = ky.create(kyOptions);
  }

  /** Cancel the automatic token refresh scheduled by `createBlizzardApiClient`. */
  public cancelTokenRefresh(): void {
    tokenRefreshCancellationHandlers.get(this)?.();
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
  public getAccessToken = async (options?: AccessTokenRequestArguments): Promise<AccessToken> => {
    const { key, origin, secret } = { ...this.defaults, ...options };
    const basicAuth = Buffer.from(`${key}:${secret}`).toString('base64');

    return this.ky
      .post<AccessToken>(`${getOAuthHost(origin)}/token`, {
        headers: {
          Authorization: `Basic ${basicAuth}`,
          'Content-Type': 'application/json',
        },
        searchParams: {
          grant_type: 'client_credentials',
        },
      })
      .json();
  };

  /**
   * Get the request configuration.
   * @param resource The resource to fetch. See {@link Resource}.
   * @param options Client options. See {@link ClientOptions}.
   * @returns The request configuration.
   */
  public getRequestConfig<T, Protected extends boolean = false>(
    resource: Resource<T, object, Protected>,
    options?: Partial<ClientOptions>,
  ): {
    headers: Record<string, string> & {
      Authorization: `Bearer ${string}`;
      'Battlenet-Namespace'?: string;
      'Content-Type': 'application/json';
    };
    searchParams: Record<string, unknown> & { locale: ReturnType<typeof getBlizzardApi>['locale'] };
  } {
    const config = { ...this.defaults, ...options };
    const resourceToken = 'token' in resource && typeof resource.token === 'string' ? resource.token : undefined;
    const token = resourceToken ?? options?.token ?? this.userToken ?? config.token;
    if (!token) {
      throw new Error('No token has been set for this client.');
    }

    const endpoint = getBlizzardApi(config.origin, config.locale);

    const namespace = resource.namespace
      ? { 'Battlenet-Namespace': `${resource.namespace}-${endpoint.origin}` }
      : undefined;

    // Build a new object with the defined parameters so we never mutate the
    // caller's resource, which may be reused across requests.
    const parameters: Record<string, unknown> = {};
    if (resource.parameters) {
      for (const [key, value] of Object.entries(resource.parameters as Record<string, unknown>)) {
        if (value !== undefined) {
          parameters[key] = value;
        }
      }
    }

    return {
      headers: {
        ...namespace,
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      searchParams: {
        ...parameters,
        locale: endpoint.locale,
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
  public refreshAccessToken = async (options?: AccessTokenRequestArguments): Promise<AccessToken> => {
    const response = await this.getAccessToken(options);
    this.setAccessToken(response.access_token);
    return response;
  };

  /**
   * Send a request to the Blizzard API.
   * @param resource The resource to fetch. See {@link Resource}.
   * @param options Client options. See {@link ClientOptions}.
   * @returns The response from the Blizzard API.
   */
  public async sendRequest<T, Protected extends boolean = false>(
    resource: Resource<T, object, Protected>,
    options?: Partial<ClientOptions>,
  ): Promise<T | undefined> {
    const url = new URL(this.getRequestUrl(resource, options));
    const config = this.getRequestConfig(resource, options);

    for (const [key, value] of Object.entries(config.searchParams)) {
      url.searchParams.set(key, String(value));
    }

    const response = await this.ky.get<T>(url, {
      ...options?.kyOptions,
      headers: {
        ...config.headers,
        ...options?.kyOptions?.headers,
      },
      //Set after the spread so that per request options can lower the retry limit or opt out of retrying, rather than silently falling back to the defaults.
      retry: getRetryOptions({
        ...this.defaults,
        ...options,
        kyOptions: { ...this.defaultKyOptions, ...options?.kyOptions },
      }),
    });

    // Some endpoints return a 204 status code with no content,
    // while others return a 200 status code with an empty body.
    // We must check for empty responses before trying to parse JSON, otherwise
    // a valid empty payload can be treated as invalid JSON and crash the client.
    if (response.status === 204 || response.headers.get('Content-Length') === '0') {
      return;
    }

    const text = await response.text();
    if (!text.trim()) {
      return;
    }

    return JSON.parse(text) as T;
  }

  /**
   * Set the access token.
   * @param token The access token.
   */
  public setAccessToken = (token: string): void => {
    this.defaults.token = token;
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
  public validateAccessToken = async (options?: ValidateAccessTokenArguments): Promise<ValidateAccessTokenResponse> => {
    const { origin, token } = { ...this.defaults, ...options };

    if (!token) {
      throw new Error('No token has been set previously or been passed to the validateAccessToken method.');
    }

    return this.ky
      .post<ValidateAccessTokenResponse>(`${getOAuthHost(origin)}/check_token`, {
        body: stringify({ token }),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
      .json();
  };

  /**
   * Create a client that uses a user access token for requests without changing this client's token.
   * @param token The user access token, typically acquired through Blizzard's authorization code flow.
   * @returns A client scoped to the supplied user token.
   */
  public withUserToken(token: string): BlizzardApiClient {
    if (!token) {
      throw new Error('A user access token is required.');
    }

    const client = new BlizzardApiClient({
      ...this.defaults,
      kyOptions: this.defaultKyOptions,
    });
    client.userToken = token;

    return client;
  }
}
