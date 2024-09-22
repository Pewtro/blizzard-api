export interface GrandmasterLeaderboardResponse {
  ladderTeams: Array<LadderTeam>;
}

interface LadderTeam {
  joinTimestamp: number;
  losses: number;
  mmr: number;
  points: number;
  previousRank: number;
  teamMembers: Array<TeamMember>;
  wins: number;
}

interface TeamMember {
  clanTag?: string;
  displayName: string;
  favoriteRace: 'protoss' | 'random' | 'terran' | 'zerg';
  id: string;
  realm: number;
  region: number;
}

export interface SeasonResponse {
  endDate: string;
  number: number;
  seasonId: number;
  startDate: string;
  year: number;
}
