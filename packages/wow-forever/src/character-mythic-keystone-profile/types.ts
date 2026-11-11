import type { Href, KeyBase, ResponseBase } from '@blizzard-api/core';

/**
 * The response for a character Mythic Keystone profile index.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface CharacterMythicKeystoneProfileIndexResponse extends ResponseBase {
  character: CharacterReference;
  current_period: CurrentPeriod;
  seasons?: Array<KeyBase & { id: number }>;
}

interface CharacterReference {
  id: number;
  key: Href;
  name: string;
  slug: string;
  surname: string;
}

interface CurrentPeriod {
  period: KeyBase & { id: number };
}
