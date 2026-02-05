import type { Character, Color, Faction, Gender, KeyBase, NameId, NameIdKey, ResponseBase } from '@blizzard-api/core';

export interface CharacterAppearanceResponse extends ResponseBase {
  active_spec: NameIdKey;
  character: Character;
  customizations: Array<Customization>;
  faction: Faction;
  gender: Gender;
  guild_crest: GuildCrest;
  items: Array<Item>;
  playable_class: NameIdKey;
  playable_race: NameIdKey;
}

interface BorderEmblem {
  color: RGBWithId;
  id: number;
  media: KeyBase & { id: number };
}

interface Choice {
  display_order: number;
  id: number;
  name?: string;
}

interface Customization {
  choice: Choice;
  option: NameId;
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
  slot: { name: string; type: string };
  subclass?: number;
}

interface RGBWithId {
  id: number;
  rgba: Color;
}
