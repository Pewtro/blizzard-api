export interface Attributes {
  other: Array<Primary>;
  primary: Array<Primary>;
  secondary: Array<Primary>;
}

export interface ItemResponse {
  accountBound: boolean;
  armor?: string;
  armorHtml?: string;
  attributes: Attributes;
  color: string;
  damage?: string;
  damageHtml?: string;
  dps?: string;
  flavorText: string;
  flavorTextHtml: string;
  icon: string;
  id: string;
  isSeasonRequiredToDrop: boolean;
  name: string;
  randomAffixes: Array<RandomAffix>;
  requiredLevel: number;
  seasonRequiredToDrop: number;
  setDescription?: string;
  setDescriptionHtml?: string;
  setItems: Array<string>;
  setName?: string;
  setNameHtml?: string;
  slots: Array<string>;
  slug: string;
  stackSizeMax: number;
  tooltipParams: string;
  type: Type;
  typeName: string;
}

export interface Primary {
  text: string;
  textHtml: string;
}

export interface RandomAffix {
  oneOf: Array<Primary>;
}

export interface Type {
  id: string;
  twoHanded: boolean;
}
