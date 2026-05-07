import type {
  BaseSearchParameters,
  KeyBase,
  Locales,
  NameId,
  NameIdKey,
  ResponseBase,
  SearchResponseWithoutResults,
} from '@blizzard-api/core';

export interface DecorIndexResponse extends ResponseBase {
  decor_items: Array<NameIdKey>;
}

export interface DecorResponse extends ResponseBase {
  default_collection_count?: number;
  dye_slots?: Array<DyeSlot>;
  id: number;
  items: NameIdKey;
  name: string;
  source?: Array<DecorSource>;
}

export interface DecorSearchResponse extends SearchResponseWithoutResults {
  results: Array<DecorSearchResponseItem>;
}

export interface FixtureHookIndexResponse extends ResponseBase {
  fixture_hooks: Array<NameIdKey>;
}

export interface FixtureHookResponse extends ResponseBase {
  id: number;
  parent_fixture: NameIdKey;
  type_name: string;
}

export interface FixtureHookSearchResponse extends SearchResponseWithoutResults {
  results: Array<FixtureHookSearchResponseItem>;
}

export interface FixtureIndexResponse extends ResponseBase {
  fixtures: Array<NameIdKey>;
}

export interface FixtureResponse extends NameId, ResponseBase {
  hooks?: Array<NameIdKey>;
}

export interface FixtureSearchResponse extends SearchResponseWithoutResults {
  results: Array<FixtureSearchResponseItem>;
}

/**
 * The search parameters for a decor.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/guides/search}
 */
export interface GenericDecorSearchParameters extends BaseSearchParameters {
  locale: Locales;
  name: string;
}

export interface RoomIndexReponse extends ResponseBase {
  rooms: Array<NameIdKey>;
}

export interface RoomResponse extends NameId, ResponseBase {}

export interface RoomSearchResponse extends SearchResponseWithoutResults {
  results: Array<RoomSearchResponseItem>;
}

interface DecorSearchResponseItem extends KeyBase {
  data: {
    id: number;
    item: { id: number; name: Record<Locales, string> };
    name: Record<Locales, string | undefined>;
  };
}

interface DecorSource {
  achievements?: Array<NameIdKey>;
  quests?: Array<NameIdKey>;
  recipes?: Array<NameIdKey>;
}

interface DyeSlot {
  dye_color_category: string;
  slot_index: number;
}

interface FixtureHookSearchResponseItem extends KeyBase {
  id: number;
}

interface FixtureSearchResponseItem extends KeyBase {
  data: {
    id: number;
    name: Record<Locales, string | undefined>;
  };
}

interface RoomSearchResponseItem extends KeyBase {
  data: {
    id: number;
    name: Record<Locales, string | undefined>;
  };
}
