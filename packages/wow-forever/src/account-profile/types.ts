import type { Faction, Gender, Href, KeyBase, NameIdKey } from '@blizzard-api/core';

/**
 * The response for an account profile summary.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface AccountProfileSummaryResponse {
  _links: Links;
  collections: Href;
  id: number;
  wow_accounts?: Array<WowAccount>;
}

/**
 * The response for an account transmog collection.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface AccountTransmogsCollectionSummaryResponse {
  _links: Links;
  appearance_sets?: Array<NameIdKey>;
  slots: Array<Slot>;
}

interface AccountCharacter {
  character: Href;
  faction: Faction;
  gender: Gender;
  id: number;
  level: number;
  name: string;
  playable_class: NameIdKey;
  playable_race: NameIdKey;
  protected_character: Href;
  surname: string;
}

interface Links {
  profile: Href;
  self: Href;
  user: Href;
}

interface NameType {
  name: string;
  type: string;
}

interface Slot {
  appearances: Array<KeyBase & { id: number }>;
  slot: NameType;
}

interface WowAccount {
  characters: Array<AccountCharacter>;
  id: number;
}
