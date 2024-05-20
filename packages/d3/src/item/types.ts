export interface ItemResponse {
  id: string;
  slug: string;
  name: string;
  icon: string;
  tooltipParams: string;
  requiredLevel: number;
  stackSizeMax: number;
  accountBound: boolean;
  flavorText: string;
  flavorTextHtml: string;
  typeName: string;
  type: Type;
  damage: string;
  dps: string;
  damageHtml: string;
  color: string;
  isSeasonRequiredToDrop: boolean;
  seasonRequiredToDrop: number;
  slots: Array<string>;
  attributes: Attributes;
  randomAffixes: Array<RandomAffix>;
  setItems: Array<unknown>;
}

export interface Attributes {
  primary: Array<Primary>;
  secondary: Array<Primary>;
  other: Array<unknown>;
}

export interface Primary {
  textHtml: string;
  text: string;
}

export interface RandomAffix {
  oneOf: Array<Primary>;
}

export interface Type {
  twoHanded: boolean;
  id: string;
}
