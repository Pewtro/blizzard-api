import { wowBasePath, wowSearchBasePath } from '@blizzard-api/core';
import type { Resource } from '@blizzard-api/core';
import type {
  DecorIndexResponse,
  DecorResponse,
  DecorSearchResponse,
  FixtureHookIndexResponse,
  FixtureHookResponse,
  FixtureHookSearchResponse,
  FixtureIndexResponse,
  FixtureResponse,
  FixtureSearchResponse,
  GenericDecorSearchParameters,
  RoomIndexReponse,
  RoomResponse,
  RoomSearchResponse,
} from './types';

/**
 *
 * Returns an index of decor.
 * @returns An index of decor. See {@link DecorIndexResponse}.
 */
export function decorIndex(): Resource<DecorIndexResponse> {
  return {
    namespace: 'static',
    path: '/data/wow/decor/index',
  };
}

/**
 * Returns a decor by ID.
 * @param decorId The decor ID.
 * @returns A decor. See {@link DecorResponse}.
 */
export function decor(decorId: number): Resource<DecorResponse> {
  return {
    namespace: 'static',
    path: `${wowBasePath}/decor/${decorId}`,
  };
}

/**
 * Searches for decor.
 * @param options The search parameters. See {@link GenericDecorSearchParameters}.
 * @returns A decor. See {@link DecorSearchResponse}.
 */
export function decorSearch(
  options: GenericDecorSearchParameters,
): Resource<DecorSearchResponse, Omit<GenericDecorSearchParameters, 'locale' | 'name'>> {
  return {
    namespace: 'static',
    parameters: {
      _page: options._page,
      [`name.${options.locale}`]: options.name,
      orderby: Array.isArray(options.orderby) ? options.orderby.join(',') : options.orderby,
    },
    path: `${wowSearchBasePath}/decor`,
  };
}

/**
 * Returns an index of fixtures.
 * @returns An index of fixtures. See {@link FixtureIndexResponse}.
 */
export function fixtureIndex(): Resource<FixtureIndexResponse> {
  return {
    namespace: 'static',
    path: `${wowBasePath}/fixture/index`,
  };
}

/**
 * Returns a fixture by ID.
 * @param fixtureId The fixture ID.
 * @returns A fixture. See {@link FixtureResponse}.
 */
export function fixture(fixtureId: number): Resource<FixtureResponse> {
  return {
    namespace: 'static',
    path: `${wowBasePath}/fixture/${fixtureId}`,
  };
}

/**
 * Searches for fixtures.
 * @param options The search parameters. See {@link GenericDecorSearchParameters}.
 * @returns A fixture. See {@link FixtureSearchResponse}.
 */
export function fixtureSearch(
  options: GenericDecorSearchParameters,
): Resource<FixtureSearchResponse, Omit<GenericDecorSearchParameters, 'locale' | 'name'>> {
  return {
    namespace: 'static',
    parameters: {
      _page: options._page,
      [`name.${options.locale}`]: options.name,
      orderby: Array.isArray(options.orderby) ? options.orderby.join(',') : options.orderby,
    },
    path: `${wowSearchBasePath}/fixture`,
  };
}

/**
 * Returns an index of fixture hooks.
 * @returns An index of fixture hooks. See {@link FixtureHookIndexResponse}.
 */
export function fixtureHookIndex(): Resource<FixtureHookIndexResponse> {
  return {
    namespace: 'static',
    path: `${wowBasePath}/fixture-hook/index`,
  };
}

/**
 * Returns a fixture hook by ID.
 * @param fixtureHookId The fixture hook ID.
 * @returns A fixture hook. See {@link FixtureHookResponse}.
 */
export function fixtureHook(fixtureHookId: number): Resource<FixtureHookResponse> {
  return {
    namespace: 'static',
    path: `${wowBasePath}/fixture-hook/${fixtureHookId}`,
  };
}

/**
 * Searches for fixture hooks.
 * @param options The search parameters. See {@link GenericDecorSearchParameters}.
 * @returns A fixture hook. See {@link FixtureSearchResponse}.
 */
export function fixtureHookSearch(
  options: GenericDecorSearchParameters,
): Resource<FixtureHookSearchResponse, Omit<GenericDecorSearchParameters, 'locale' | 'name'>> {
  return {
    namespace: 'static',
    parameters: {
      _page: options._page,
      [`name.${options.locale}`]: options.name,
      orderby: Array.isArray(options.orderby) ? options.orderby.join(',') : options.orderby,
    },
    path: `${wowSearchBasePath}/fixture-hook`,
  };
}

/**
 * Returns an index of rooms.
 * @returns An index of rooms. See {@link RoomIndexReponse}.
 */
export function roomIndex(): Resource<RoomIndexReponse> {
  return {
    namespace: 'static',
    path: `${wowBasePath}/room/index`,
  };
}

/**
 * Returns a room by ID.
 * @param roomId The room ID.
 * @returns A room. See {@link RoomResponse}.
 */
export function room(roomId: number): Resource<RoomResponse> {
  return {
    namespace: 'static',
    path: `${wowBasePath}/room/${roomId}`,
  };
}

/**
 * Searches for rooms.
 * @param options The search parameters. See {@link GenericDecorSearchParameters}.
 * @returns A room. See {@link RoomSearchResponse}.
 */
export function roomSearch(
  options: GenericDecorSearchParameters,
): Resource<RoomSearchResponse, Omit<GenericDecorSearchParameters, 'locale' | 'name'>> {
  return {
    namespace: 'static',
    parameters: {
      _page: options._page,
      [`name.${options.locale}`]: options.name,
      orderby: Array.isArray(options.orderby) ? options.orderby.join(',') : options.orderby,
    },
    path: `${wowSearchBasePath}/room`,
  };
}
