import type { Color, Faction, Gender, KeyBase, NameId, NameIdKey, ResponseBase } from '../base';

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

interface Character extends NameIdKey {
  realm: { slug: string } & NameIdKey;
}

interface Customization {
  choice: Choice;
  option: NameId;
}

interface Choice {
  display_order: number;
  id: number;
  name?: string;
}

interface GuildCrest {
  background: { color: RGBWithId };
  border: BorderEmblem;
  emblem: BorderEmblem;
}

interface RGBWithId {
  id: number;
  rgba: Color;
}

interface BorderEmblem {
  color: RGBWithId;
  id: number;
  media: { id: number } & KeyBase;
}

interface Item {
  enchant: number;
  id: number;
  internal_slot_id: number;
  item_appearance_modifier_id: number;
  slot: { name: string; type: string };
  subclass: number;
}
