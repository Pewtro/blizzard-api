import type { ClientOptions } from './types';

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
