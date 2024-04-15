import type { Gender, NameId, NameIdKey, ResponseBase } from '../base';

export interface TitleIndexResponse extends ResponseBase {
  titles: Array<NameIdKey>;
}

export interface TitleResponse extends ResponseBase, NameId {
  gender_name: Gender;
}
