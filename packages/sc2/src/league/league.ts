import type { Resource } from '@blizzard-api/core';
import type { LeagueDataResponse, StarcraftLeagueId, StarcraftLeagueQueue, StarcraftLeagueTeamType } from './types';

const starcraftLeagueQueue: Record<StarcraftLeagueQueue, number> = {
  'hots-1v1': 101,
  'hots-2v2': 102,
  'hots-3v3': 103,
  'hots-4v4': 104,
  'lotv-1v1': 201,
  'lotv-2v2': 202,
  'lotv-3v3': 203,
  'lotv-4v4': 204,
  'lotv-archon': 206,
  'wol-1v1': 1,
  'wol-2v2': 2,
  'wol-3v3': 3,
  'wol-4v4': 4,
};

const starcraftLeagueTeam: Record<StarcraftLeagueTeamType, number> = {
  arranged: 0,
  random: 1,
};

const starcraftLeagueId: Record<StarcraftLeagueId, number> = {
  bronze: 0,
  diamond: 4,
  gold: 2,
  grandmaster: 6,
  master: 5,
  platinum: 3,
  silver: 1,
};

/**
 * Returns the league data for the specified season, queue, team type, and league.
 * @param seasonId The season ID
 * @param queueId The queue ID
 * @param teamType The team type
 * @param leagueId The league ID
 * @returns The league data resource. See {@link LeagueDataResponse}.
 */
export function getLeagueData(
  seasonId: string,
  queueId: StarcraftLeagueQueue,
  teamType: StarcraftLeagueTeamType,
  leagueId: StarcraftLeagueId,
): Resource<LeagueDataResponse> {
  return {
    path: `/data/sc2/league/${seasonId}/${starcraftLeagueQueue[queueId]}/${starcraftLeagueTeam[teamType]}/${starcraftLeagueId[leagueId]}`,
  };
}
