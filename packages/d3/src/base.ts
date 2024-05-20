export const base = 'd3/data';

export const profileBase = `d3/profile`;

//Why is the game data APIs base root the reverse of the regular base?
export const gameDataBase = `data/d3`;

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
