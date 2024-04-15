import type { NameId, NameIdKey, ResponseBase } from '../base';

export interface PowerTypeIndexResponse extends ResponseBase {
  power_types: Array<NameIdKey>;
}

export interface PowerTypeResponse extends ResponseBase, NameId {}
