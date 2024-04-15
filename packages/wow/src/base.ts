export const base = '/data/wow';

export const mediaBase = `${base}/media` as const;

export interface ResponseBase {
  _links: {
    self: {
      href: string;
    };
  };
}

export interface KeyBase {
  key: {
    href: string;
  };
}

export interface NameId {
  name: string;
  id: number;
}

export interface NameIdKey extends KeyBase, NameId {}
export interface Color {
  r: number;
  g: number;
  b: number;
  a: number;
}

export interface MediaAsset {
  key: string;
  value: string;
  file_data_id: number;
}

export interface Gender {
  male: string;
  female: string;
}

export const Factions = {
  ALLIANCE: 'ALLIANCE',
  HORDE: 'HORDE',
} as const;

export interface Faction {
  type: keyof typeof Factions;
  name: Capitalize<Lowercase<keyof typeof Factions>>;
}
