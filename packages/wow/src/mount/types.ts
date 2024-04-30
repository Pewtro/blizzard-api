import type { BaseSearchParameters, Locales } from '@blizzard-api/core';
import type { Factions, KeyBase, NameIdKey, ResponseBase } from '../base';

export interface MountIndexResponse extends ResponseBase {
  mounts: Array<NameIdKey>;
}

export interface MountResponse extends ResponseBase {
  id: number;
  name: string;
  creature_displays: Array<CreatureDisplay>;
  description: string;
  source: Source;
  should_exclude_if_uncollected: boolean;
}

interface CreatureDisplay extends KeyBase {
  id: number;
}

interface Source {
  type: string;
  name: string;
}

export interface MountSearchParameters extends BaseSearchParameters {
  name: string;
  locale: Locales;
}

export interface MountSearchResponseItem extends KeyBase {
  data: {
    creature_displays: Array<{ id: number }>;
    name: Record<Locales, string>;
    id: number;
    source: { name: Record<Locales, string>; type: string };
    faction?: { name: Record<Locales, string>; type: keyof typeof Factions };
  };
}
