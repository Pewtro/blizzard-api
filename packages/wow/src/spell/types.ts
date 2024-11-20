import type { BaseSearchParameters, Locales } from '@blizzard-api/core';
import type { KeyBase, MediaAsset, NameId, ResponseBase } from '../base';

/**
 * The response for a spell media.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface SpellMediaResponse extends ResponseBase {
  assets: Array<MediaAsset>;
  id: number;
}

/**
 * The response for a spell.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface SpellResponse extends NameId, ResponseBase {
  description: null | string;
  media: Media;
}

/**
 * The search parameters for spells.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/guides/search}
 */
export interface SpellSearchParameters extends BaseSearchParameters {
  locale: Locales;
  name: string;
}

/**
 * The response for a spell search.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/guides/search}
 */
export interface SpellSearchResponseItem extends KeyBase {
  data: {
    id: number;
    media: { id: number };
    name: Record<Locales, string | undefined>;
  };
}

interface Media extends KeyBase {
  id: number;
}
