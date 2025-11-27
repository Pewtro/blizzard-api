/**
 * @file base.ts
 * @module base
 * @description Contains base constants and interfaces for the Blizzard API.
 */

/**
 * The base request path for the Blizzard API for world of warcraft.
 */
export const base = '/data/wow';

/**
 * The base request path for media in the Blizzard API for world of warcraft.
 */
export const mediaBase = `${base}/media` as const;

/**
 * The base request path for search in the Blizzard API for world of warcraft.
 */
export const searchBase = `${base}/search` as const;

/**
 *
 */

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
 * The playable gender names/descriptions in World of Warcraft.
 */
export interface GenderName {
  female: string;
  male: string;
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
  file_data_id: number;
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
 * Base interface for Blizzard API responses.
 */
export interface ResponseBase {
  _links: {
    self: Href;
  };
}

/**
 * The playable genders in World of Warcraft.
 */
export const Genders = {
  FEMALE: 'FEMALE',
  MALE: 'MALE',
} as const;

/**
 * The standard structure to represent a World of Warcraft Character.
 */
export interface Character extends NameIdKey {
  realm: Realm;
}

/**
 * The faction associated with a character or entity in World of Warcraft.
 */
export interface Faction {
  name: Capitalize<Lowercase<Factions>>;
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
  name: Capitalize<Lowercase<keyof typeof Genders>>;
  type: keyof typeof Genders;
}

/**
 * The standard structure to represent a World of Warcraft Realm.
 */
export interface Realm extends NameIdKey {
  slug: string;
}
