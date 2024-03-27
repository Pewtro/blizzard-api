import type { Locales, Origins } from './endpoint';

export interface ClientOptions {
  key: string;
  secret: string;
  origin: Origins;
  locale?: Locales;
  token?: string;
}
