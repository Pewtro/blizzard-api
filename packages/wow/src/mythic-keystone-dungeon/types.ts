import type { KeyBase, NameId, NameIdKey, ResponseBase } from '../base';

export interface MythicKeystoneDungeonIndexResponse extends ResponseBase {
  dungeons: Array<NameIdKey>;
}

export interface MythicKeystoneDungeonResponse extends ResponseBase, NameId {
  map: NameId;
  zone: Zone;
  dungeon: NameIdKey;
  keystone_upgrades: Array<KeystoneUpgrade>;
  is_tracked: boolean;
}

interface KeystoneUpgrade {
  upgrade_level: number;
  qualifying_duration: number;
}

interface Zone {
  slug: string;
}

export interface MythicKeystoneIndexResponse extends ResponseBase {
  seasons: { href: string };
  dungeons: { href: string };
}

export interface MythicKeystonePeriodIndexResponse extends ResponseBase {
  periods: Array<Period>;
  current_period: Period;
}

interface Period extends KeyBase {
  id: number;
}

export interface MythicKeystonePeriodResponse extends ResponseBase {
  id: number;
  start_timestamp: number;
  end_timestamp: number;
}

export interface MythicKeystoneSeasonIndexResponse extends ResponseBase {
  seasons: Array<Period>;
  current_season: Period;
}

export interface MythicKeystoneSeasonResponse extends ResponseBase {
  id: number;
  start_timestamp: number;
  end_timestamp: number;
  periods: Array<Period>;
  season_name: string | null;
}
