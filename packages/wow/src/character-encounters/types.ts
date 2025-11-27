import type { Character, Href, NameIdKey, ResponseBase } from '@blizzard-api/core';

export interface CharacterDungeonsResponse extends ResponseBase {
  expansions: Array<ExpansionWithDungeonInstances>;
}

export interface CharacterEncountersSummaryResponse extends ResponseBase {
  character: Character;
  dungeons: Href;
  raids: Href;
}

export interface CharacterRaidsResponse extends ResponseBase {
  character: Character;
  expansions: Array<ExpansionWithRaidInstances>;
}

interface DungeonDifficulties {
  name: 'Heroic' | 'Mythic' | 'Mythic+ Dungeons' | 'Normal';
  type: 'HEROIC' | 'MYTHIC' | 'MYTHIC_KEYSTONE' | 'NORMAL';
}

interface DungeonInstance {
  instance: NameIdKey;
  modes: Array<DungeonMode>;
}

interface DungeonMode {
  difficulty: DungeonDifficulties;
  progress: Progress;
  status: Status;
}

interface Encounter {
  completed_count: number;
  encounter: NameIdKey;
  last_kill_timestamp: number;
}

interface ExpansionWithDungeonInstances {
  expansion: NameIdKey;
  instances: Array<DungeonInstance>;
}

interface ExpansionWithRaidInstances {
  expansion: NameIdKey;
  instances: Array<RaidInstance>;
}

interface Progress {
  completed_count: number;
  encounters: Array<Encounter>;
  total_count: number;
}

interface RaidDifficulties {
  name:
    | '10 Player'
    | '10 Player (Heroic)'
    | '25 Player'
    | '25 Player (Heroic)'
    | 'Heroic'
    | 'Mythic'
    | 'Normal'
    | 'Raid Finder';
  type:
    | 'HEROIC'
    | 'LEGACY_10_MAN'
    | 'LEGACY_10_MAN_HEROIC'
    | 'LEGACY_25_MAN'
    | 'LEGACY_25_MAN_HEROIC'
    | 'LFR'
    | 'MYTHIC'
    | 'NORMAL';
}

interface RaidInstance {
  instance: NameIdKey;
  modes: Array<RaidMode>;
}

interface RaidMode {
  difficulty: RaidDifficulties;
  progress: Progress;
  status: Status;
}

interface Status {
  name: 'Complete' | 'In Progress';
  type: 'COMPLETE' | 'IN_PROGRESS';
}
