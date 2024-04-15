import type { KeyBase, NameIdKey, ResponseBase } from '../base';

export interface ToyIndexResponse extends ResponseBase {
  toys: Array<NameIdKey>;
}

export interface ToyResponse extends ResponseBase {
  id: number;
  item: NameIdKey;
  source: Source;
  source_description: string;
  media: Media;
}

interface Media extends KeyBase {
  id: number;
}

interface Source {
  type: string;
  name: string;
}
