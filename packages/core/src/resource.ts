import type { BlizzardNamespaces } from './namespace';
import type { ClientOptions } from './request';

export interface Resource<T = never> {
  path: string;
  namespace?: BlizzardNamespaces;
  params?: T;
}
export type ResourceResponse<T = unknown> = Promise<T>;

export type ResourceOptions<T> = Partial<ClientOptions> & T;
export type ResourceInterface<T = unknown, P = unknown> = (options: ResourceOptions<T>) => Resource<P>;

export type ProtectedResourceOptions<T> = Partial<ClientOptions> & { token: string } & T;
export type ProtectedResourceInterface<T = unknown, P = unknown> = (
  options: ProtectedResourceOptions<T>,
) => Resource<P>;
