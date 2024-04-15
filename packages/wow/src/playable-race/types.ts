import type { Faction, Gender, NameId, NameIdKey, ResponseBase } from '../base';

export interface PlayableRaceIndexResponse extends ResponseBase {
  races: Array<NameIdKey>;
}

export interface PlayableRaceResponse extends ResponseBase, NameId {
  gender_name: Gender;
  faction: Faction;
  is_selectable: boolean;
  is_allied_race: boolean;
  playable_classes: Array<NameIdKey>;
}
