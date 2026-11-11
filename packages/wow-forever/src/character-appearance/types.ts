import type { Faction, Gender, Href, NullishNameId, NullishNameIdKey, ResponseBase } from '@blizzard-api/core';

/**
 * The response for a character appearance summary.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface CharacterAppearanceResponse extends ResponseBase {
  character: CharacterReference;
  customizations: Array<Customization>;
  faction: Faction;
  gender: Gender;
  items: Array<Item>;
  playable_class: NullishNameIdKey;
  playable_race: NullishNameIdKey;
}

interface CharacterReference {
  id: number;
  key: Href;
  name: string;
  slug: string;
  surname: string;
}

interface Choice {
  display_order: number;
  id: number;
  name?: null | string;
}

interface Customization {
  choice: Choice;
  option: NullishNameId;
}

interface Item {
  enchant: number;
  id: number;
  internal_slot_id: number;
  item_appearance_modifier_id?: number;
  secondary_id?: number;
  secondary_item_appearance_modifier_id?: number;
  secondary_subclass?: number;
  slot: NameType;
  subclass?: number;
}

interface NameType {
  name: string;
  type: string;
}
