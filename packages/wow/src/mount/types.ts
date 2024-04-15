import type { KeyBase, NameIdKey, ResponseBase } from '../base';

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
