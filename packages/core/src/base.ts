/**
 * The base request path for the D3 API in the Blizzard API.
 */
export const d3BasePath = 'd3/data';

/**
 * The base request path for profile APIs in the D3 API.
 */
export const d3ProfileBasePath = `d3/profile`;

/**
 * The base request path for game data APIs in the D3 API.
 */
export const d3GameDataBasePath = `data/d3`;

/**
 * The base request path for the Blizzard API for world of warcraft.
 */
export const wowBasePath = '/data/wow';

/**
 * The base request path for the character API for Classic World of Warcraft.
 */
export const wowCharacterBasePath = 'profile/wow/character';

/**
 * The base request path for media in the Blizzard API for world of warcraft.
 */
export const wowMediaBasePath = `${wowBasePath}/media` as const;

/**
 * The base request path for search in the Blizzard API for world of warcraft.
 */
export const wowSearchBasePath = `${wowBasePath}/search` as const;

/**
 * Base search parameters
 * orderby The field to order results by.
 * _page The page number to return.
 * @example
 * const params: BaseSearchParameters = {
 *  orderby: 'name',
 *  _page: 1,
 * };
 */
export interface BaseSearchParameters {
  _page?: number;
  orderby?: Array<string> | string;
}
/**
 * The standard structure to represent a World of Warcraft Character.
 */
export interface Character extends NameIdKey {
  realm: Realm;
}

/**
 * A record containing the RGBA values of a color.
 */
export interface Color {
  a: number;
  b: number;
  g: number;
  r: number;
}

/**
 * The faction associated with a character or entity in World of Warcraft.
 */
export interface Faction {
  name: 'Alliance' | 'Horde';
  type: Factions;
}

/**
 * The playable factions in World of Warcraft.
 */
export type Factions = 'ALLIANCE' | 'HORDE';

/**
 * The gender associated with a character or entity in World of Warcraft.
 */
export interface Gender {
  name: 'Female' | 'Male';
  type: 'FEMALE' | 'MALE';
}

/**
 * The playable gender names/descriptions in World of Warcraft.
 */
export interface GenderName {
  female: null | string;
  male: null | string;
}

export interface Href {
  href: string;
}

/**
 * Base record interface containing key.href property that often appear in Blizzard API responses.
 */
export interface KeyBase {
  key: Href;
}

/**
 * The media asset associated with a character or entity in World of Warcraft.
 */
export interface MediaAsset {
  file_data_id?: number;
  key: string;
  value: string;
}

/**
 * Base record interface containing name and id properties that often appear together in Blizzard API responses.
 */
export interface NameId {
  id: number;
  name: string;
}

/**
 * Base record containing both {@link KeyBase} and {@link NameId} interfaces.
 */
export interface NameIdKey extends KeyBase, NameId {}

/**
 * The standard structure to represent a World of Warcraft Realm.
 */
export interface Realm extends NameIdKey {
  slug: string;
}

/**
 * Base interface for Blizzard API responses.
 */
export interface ResponseBase {
  _links: {
    self: Href;
  };
}
