/**
 * Base interface for Blizzard API responses.
 */
export interface ResponseBase {
  _links: {
    self: {
      href: string;
    };
  };
}

//The region (1=US, 2=EU, 3=KO and TW, 5=CN).
export type StarcraftRegion = 'cn' | 'eu' | 'kr' | 'tw' | 'us';

export const starcraftRegion: Record<StarcraftRegion, number> = {
  cn: 5,
  eu: 2,
  kr: 3,
  tw: 3,
  us: 1,
};
