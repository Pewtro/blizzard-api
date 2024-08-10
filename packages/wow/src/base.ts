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

export interface Href {
  href: string;
}
/**
 * Base interface for Blizzard API responses.
 */
export interface ResponseBase {
  _links: {
    self: Href;
  };
}

/**
 * Base record interface containing key.href property that often appear in Blizzard API responses.
 */
export interface KeyBase {
  key: Href;
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
 * A record containing the RGBA values of a color.
 */
export interface Color {
  a: number;
  b: number;
  g: number;
  r: number;
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
 * The playable gender names/descriptions in World of Warcraft.
 */
export interface GenderName {
  female: string;
  male: string;
}

/**
 * The playable genders in World of Warcraft.
 */
export const Genders = {
  FEMALE: 'FEMALE',
  MALE: 'MALE',
} as const;

/**
 * The gender associated with a character or entity in World of Warcraft.
 */
export interface Gender {
  name: Capitalize<Lowercase<keyof typeof Genders>>;
  type: keyof typeof Genders;
}

/**
 * The playable factions in World of Warcraft.
 */
export const Factions = {
  ALLIANCE: 'ALLIANCE',
  HORDE: 'HORDE',
} as const;

/**
 * The faction associated with a character or entity in World of Warcraft.
 */
export interface Faction {
  name: Capitalize<Lowercase<keyof typeof Factions>>;
  type: keyof typeof Factions;
}
