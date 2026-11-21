import type {
  Color,
  Faction,
  Gender,
  IdKey,
  NameType,
  NullishNameId,
  NullishNameIdKey,
  ResponseBase,
} from '@blizzard-api/core';
import type { CharacterReference } from '../shared/types';

/**
 * The response for a character appearance summary.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface CharacterAppearanceResponse extends ResponseBase {
  character: CharacterReference;
  customizations: Array<Customization>;
  faction: Faction;
  gender: Gender;
  guild_crest?: GuildCrest;
  items: Array<Item>;
  playable_class: NullishNameIdKey;
  playable_race: NullishNameIdKey;
}

interface BorderEmblem {
  color: RGBWithId;
  id: number;
  media: IdKey;
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

interface GuildCrest {
  background: { color: RGBWithId };
  border: BorderEmblem;
  emblem: BorderEmblem;
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

interface RGBWithId {
  id: number;
  rgba: Color;
}
