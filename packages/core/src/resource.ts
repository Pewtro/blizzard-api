import type { BlizzardNamespaces } from './namespace';

/**
 * Represents a resource that can be requested from the Blizzard API
 * @param _Response The response type of the resource
 * @param ProtectedResource Whether the resource requires a token to be requested
 */
export type Resource<_Response, ProtectedResource extends boolean = false> = {
  path: string;
  namespace?: BlizzardNamespaces;
  parameters?: Record<string, string | number>;
} & (ProtectedResource extends true ? { token: string } : unknown);

/**
 * Represents the response of a resource
 * @param T The response type of the resource
 * @example
 * type response = ResourceResponse<{ id: number }>;
 * const response: response = Promise.resolve({ id: 1 });
 * response.then((data) => console.log(data.id));
 */
export type ResourceResponse<T = unknown> = Promise<T>;

/**
 * Extracts the response type from a resource
 * @param Type The resource type
 * @returns The response type
 * @example
 * type extracted = ExtractResourceType<Resource<{ id: number }>>;
 */
export type ExtractResourceType<Type> = Type extends Resource<infer R> ? R : never;
