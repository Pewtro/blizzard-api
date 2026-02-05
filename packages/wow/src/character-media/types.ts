import type { Character, ResponseBase } from '@blizzard-api/core';

export interface CharacterMediaSummaryResponse extends ResponseBase {
  assets: Array<Asset>;
  character: Character;
}

interface Asset {
  key: string;
  value: string;
}
