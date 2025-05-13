import type { BlizzardNamespaces } from './namespace';

/**
 * Extracts the response type from a resource
 * @param Type The resource type
 * @returns The response type
 * @example
 * type extracted = ExtractResourceType<Resource<{ id: number }>>;
 */
export type ExtractResourceType<Type> =
  Type extends Resource<infer R, infer _SearchOptions, infer _Protected> ? R : never;

/**
 * Represents a resource that requires a token to be requested
 * @param Response The response type of the resource
 * @param SearchOptions The search options that can be passed to the resource
 */
export type ProtectedResource<Response, SearchOptions extends object = Record<string, never>> = Resource<
  Response,
  SearchOptions,
  true
>;

/**
 * Represents a resource that can be requested from the Blizzard API
 * @param _Response The response type of the resource
 * @param SearchOptions The search options that can be passed to the resource
 * @param ProtectedResource Whether the resource requires a token to be requested
 */
export type Resource<
  Response,
  SearchOptions extends object = Record<string, unknown>,
  IsProtectedResource extends boolean = false,
> = (IsProtectedResource extends true ? { token: string } : unknown) & {
  /**
   * The response type of the resource
   * @internal
   */
  _responseType?: Response;
  namespace?: BlizzardNamespaces;
  parameters?: SearchOptions;
  path: string;
};

/**
 * Represents the response of a resource
 * @param T The response type of the resource
 * @example
 * type response = ResourceResponse<{ id: number }>;
 * const response: response = Promise.resolve({ id: 1 });
 * response.then((data) => console.log(data.id));
 */
export type ResourceResponse<T = unknown> = Promise<T>;
