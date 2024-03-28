import type { BlizzardNamespaces } from './namespace';
import type { ClientOptions } from './request';

export interface Resource<_Response = void> {
  path: string;
  namespace?: BlizzardNamespaces;
}
export type ResourceResponse<T = unknown> = Promise<T>;

export type ResourceOptions<T = unknown> = Partial<ClientOptions> & T;

export type ProtectedResourceOptions<T = unknown> = Partial<ClientOptions> & { token: string } & T;
