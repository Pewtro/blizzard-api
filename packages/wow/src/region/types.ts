import type { NameId, ResponseBase } from '../base';

export interface RegionIndexResponse extends ResponseBase {
  regions: Array<{ href: string }>;
}

export interface RegionResponse extends ResponseBase, NameId {
  tag: string;
  patch_string: string;
}
