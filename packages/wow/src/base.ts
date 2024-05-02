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
 * Base interface for Blizzard API responses.
 */
export interface ResponseBase {
  _links: {
    self: {
      href: string;
    };
  };
}

/**
 * Base record interface containing key.href property that often appear in Blizzard API responses.
 */
export interface KeyBase {
  key: {
    href: string;
  };
}

/**
 * Base record interface containing name and id properties that often appear together in Blizzard API responses.
 */
export interface NameId {
  name: string;
  id: number;
}

/**
 * Base record containing both {@link KeyBase} and {@link NameId} interfaces.
 */
export interface NameIdKey extends KeyBase, NameId {}

/**
 * A record containing the RGBA values of a color.
 */
export interface Color {
  r: number;
  g: number;
  b: number;
  a: number;
}

/**
 * The media asset associated with a character or entity in World of Warcraft.
 */
export interface MediaAsset {
  key: string;
  value: string;
  file_data_id: number;
}

/**
 * The playable genders in World of Warcraft.
 */
export interface Gender {
  male: string;
  female: string;
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
  type: keyof typeof Factions;
  name: Capitalize<Lowercase<keyof typeof Factions>>;
}
