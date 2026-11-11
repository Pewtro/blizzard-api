import type { Href, NameIdKey, ResponseBase } from '@blizzard-api/core';
import type { CharacterReference } from '../shared/types';

/**
 * The response for a character encounters summary.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface CharacterEncountersSummaryResponse extends ResponseBase {
  character: CharacterReference;
  dungeons: Href;
  raids: Href;
}

/**
 * The response for a character's completed dungeons.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface CharacterDungeonsResponse extends ResponseBase {
  expansions?: Array<ExpansionWithDungeonInstances>;
}

/**
 * The response for a character's completed raids.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface CharacterRaidsResponse extends ResponseBase {
  character: CharacterReference;
  expansions?: Array<ExpansionWithRaidInstances>;
}

interface DungeonDifficulties {
  name?: string;
  type?: 'HEROIC' | 'MYTHIC' | 'MYTHIC_KEYSTONE' | 'NORMAL';
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
  name: string;
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
  name: string;
  type: 'COMPLETE' | 'IN_PROGRESS';
}
