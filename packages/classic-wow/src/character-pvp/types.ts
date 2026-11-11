import type { Character, Faction, KeyBase, ResponseBase } from '@blizzard-api/core';

/**
 * The response for a character's PvP bracket statistics.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/profile-apis}
 */
export interface CharacterPvpBracketStatisticsResponse extends ResponseBase {
  bracket: Bracket;
  character: Character;
  faction: Faction;
  rating: number;
  season: KeyBase & { id: number };
  season_match_statistics: MatchStatistics;
  tier: KeyBase & { id: number };
  weekly_match_statistics: MatchStatistics;
}

interface Bracket {
  id: number;
  type: string;
}

interface MatchStatistics {
  lost: number;
  played: number;
  won: number;
}
