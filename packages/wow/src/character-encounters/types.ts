import type { Character, Href, NameIdKey, ResponseBase } from '../base';

export interface CharacterDungeonsResponse extends ResponseBase {
  expansions: Array<Expansion<DungeonMode>>;
}

export interface CharacterEncountersSummaryResponse extends ResponseBase {
  character: Character;
  dungeons: Href;
  raids: Href;
}

export interface CharacterRaidsResponse extends ResponseBase {
  character: Character;
  expansions: Array<Expansion<RaidMode>>;
}

interface DungeonDifficulties {
  name: 'Heroic' | 'Mythic' | 'Mythic+ Dungeons' | 'Normal';
  type: 'HEROIC' | 'MYTHIC' | 'MYTHIC_KEYSTONE' | 'NORMAL';
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

interface Expansion<T> {
  expansion: NameIdKey;
  instances: Array<Instance<T>>;
}

interface Instance<T> {
  instance: NameIdKey;
  modes: Array<T>;
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

interface RaidMode {
  difficulty: RaidDifficulties;
  progress: Progress;
  status: Status;
}

interface Status {
  name: 'Complete' | 'In Progress';
  type: 'COMPLETE' | 'IN_PROGRESS';
}
