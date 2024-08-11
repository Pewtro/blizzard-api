import type { Character, ResponseBase } from '../base';

export interface CharacterMediaSummaryResponse extends ResponseBase {
  assets: Array<Asset>;
  character: Character;
}

interface Asset {
  key: string;
  value: string;
}
