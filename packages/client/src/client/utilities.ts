import type { ClientOptions } from './types';

const sleep = (ms: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, ms));

export interface WithRateLimitRetryOptions {
  maxAttempts?: number;
  retryOnRateLimit?: boolean;
}

const getRateLimitDelay = (attempt: number, response?: Pick<Response, 'headers'>): number => {
  const retryAfterHeader = response?.headers.get('Retry-After');
  if (retryAfterHeader) {
    const retryAfterSeconds = Math.trunc(Number(retryAfterHeader));
    if (!Number.isNaN(retryAfterSeconds)) {
      return retryAfterSeconds * 1000;
    }
  }

  // eslint-disable-next-line sonarjs/pseudo-random
  return Math.min(250 * 2 ** attempt, 5000) + Math.random() * 250;
};

export const withRateLimitRetry = async <T>(
  request: () => Promise<T>,
  { maxAttempts = 3, retryOnRateLimit = true }: WithRateLimitRetryOptions = {},
): Promise<T> => {
  const retryAttempts = Math.max(1, Math.trunc(maxAttempts || 3));
  let attempt = 0;

  while (true) {
    try {
      return await request();
    } catch (error: unknown) {
      const response = (error as { response?: Response })?.response;
      if (!retryOnRateLimit || response?.status !== 429 || attempt >= retryAttempts - 1) {
        throw error;
      }

      const delayMs = getRateLimitDelay(attempt, response);
      attempt += 1;
      await sleep(delayMs);
    }
  }
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
