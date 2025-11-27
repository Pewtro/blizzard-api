import type { BaseSearchParameters, Locales } from '@blizzard-api/core';
import type { Factions, KeyBase, NameIdKey, ResponseBase } from '../base';

/**
 * The response for a mount index.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface MountIndexResponse extends ResponseBase {
  mounts: Array<NameIdKey>;
}

/**
 * The response for a mount.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface MountResponse extends ResponseBase {
  creature_displays: Array<CreatureDisplay>;
  description: string;
  id: number;
  name: string;
  should_exclude_if_uncollected: boolean;
  source: Source;
}

/**
 * The search parameters for mounts.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/guides/search}
 */
export interface MountSearchParameters extends BaseSearchParameters {
  locale: Locales;
  name: string;
}

/**
 * The response for a mount search.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/guides/search}
 */
export interface MountSearchResponseItem extends KeyBase {
  data: {
    creature_displays: Array<{ id: number }>;
    faction?: { name: Record<Locales, string>; type: Factions };
    id: number;
    name: Record<Locales, string>;
    source: { name: Record<Locales, string>; type: string };
  };
}

interface CreatureDisplay extends KeyBase {
  id: number;
}

interface Source {
  name: string;
  type: string;
}
