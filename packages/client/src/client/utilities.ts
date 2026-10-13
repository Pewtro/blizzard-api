import type { RetryOptions } from 'ky';
import type { ClientOptions } from './types';

/**
 * Normalise a configured maximum attempt count.
 *
 * The count includes the initial attempt, so a value of `1` disables retrying entirely.
 * @param maxAttempts The configured value, if any.
 * @returns The attempt count as a positive integer.
 */
export const clampMaxAttempts = (maxAttempts?: number): number => {
  //A value that is not a finite number cannot describe an attempt count, so it falls back to the default rather than propagating into ky's retry limit.
  const attempts = maxAttempts !== undefined && Number.isFinite(maxAttempts) ? maxAttempts : 3;

  return Math.max(1, Math.trunc(attempts));
};

/**
 * Build the ky `retry` options from the client options.
 *
 * ky already retries `429` responses and honours the `Retry-After` and rate limit
 * headers, so the client only translates its own options into ky's shape.
 * @param options The client options. See {@link ClientOptions}.
 * @returns The options to hand to ky as `retry`.
 */
export const getRetryOptions = (options: ClientOptions): RetryOptions => {
  const { kyOptions, retryOnRateLimit = true } = options;
  //Ky also accepts a number as a shorthand for `{limit}`, which has to be expanded before it can be merged key by key.
  const overrides = typeof kyOptions?.retry === 'number' ? { limit: kyOptions.retry } : (kyOptions?.retry ?? {});

  return {
    //Ky defaults `jitter` to undefined, which lets many clients retry in lockstep and overwhelm the API again.
    jitter: true,
    methods: ['get', 'post'],
    ...overrides,
    //An explicit `retryOnRateLimit: false` is an opt out of retrying, so it wins over anything configured through `kyOptions.retry`.
    limit: retryOnRateLimit ? (overrides.limit ?? clampMaxAttempts(options.maxAttempts) - 1) : 0,
  };
};

export const validateClientOptions = (options: ClientOptions): void => {
  if (!options.key) {
    throw new Error(`Client missing 'key' parameter`);
  }
  if (!options.secret) {
    throw new Error(`Client missing 'secret' parameter`);
  }
  if (!options.origin) {
    throw new Error(`Client missing 'origin' parameter`);
  }
};
