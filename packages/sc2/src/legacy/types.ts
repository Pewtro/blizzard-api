export interface LegacyAchievementsResponse {
  achievements: Array<Achievement>;
  categories: Array<Category>;
}

export interface LegacyLaddersResponse {
  currentSeason: Array<unknown>;
  previousSeason: Array<LegacySeason>;
  showcasePlacement: Array<unknown>;
}

export interface LegacyMatchHistoryResponse {
  matches: Array<Match>;
}

export interface LegacyProfileResponse {
  achievements: Achievements;
  campaign: Campaign;
  career: Career;
  clanName: string;
  clanTag: string;
  displayName: string;
  id: string;
  portrait: Icon;
  profilePath: string;
  realm: number;
  rewards: Rewards;
  season: Season;
  swarmLevels: SwarmLevels;
}

export interface LegacyRewardsResponse {
  animations: Array<Animation>;
  portraits: Array<Animation>;
  protossDecals: Array<Animation>;
  skins: Array<Animation>;
  terranDecals: Array<Animation>;
  zergDecals: Array<Animation>;
}

export interface SingleLegacyLadderResponse {
  ladderMembers: Array<LegacyLadderMember>;
}

interface Achievement {
  achievementId: string;
  categoryId: string;
  description: string;
  icon: Icon;
  points: number;
  title: string;
}

interface Achievements {
  achievements: Array<{
    achievementId: string;
    completionDate: number;
  }>;
  points: Points;
}

interface Animation {
  achievementId: string;
  command?: '/dance';
  icon: Icon;
  id: string;
  name?: string;
  title: string;
}

interface Campaign {
  hots: string;
  lotv: string;
  wol: string;
}

interface Career {
  careerTotalGames: number;
  highest1v1Rank: string;
  highestTeamRank: string;
  primaryRace: string;
  protossWins: number;
  seasonTotalGames: number;
  terranWins: number;
  zergWins: number;
}

interface Category {
  categoryId: string;
  children?: Array<CategoryChild>;
  featuredAchievementId: string;
  title: string;
}

interface CategoryChild {
  categoryId: string;
  featuredAchievementId: string;
  title: string;
}

interface Icon {
  h: number;
  offset: number;
  url: string;
  w: number;
  x: number;
  y: number;
}

interface LegacyLadderMember {
  character: LegacyLadderMemberCharacter;
  favoriteRaceP1: 'PROTOSS' | 'RANDOM' | 'TERRAN' | 'ZERG';
  highestRank: number;
  joinTimestamp: number;
  losses: number;
  points: number;
  previousRank: number;
  wins: number;
}

interface LegacyLadderMemberCharacter {
  clanName: string;
  clanTag: string;
  displayName: string;
  id: string;
  profilePath: string;
  realm: number;
  region: number;
}

interface LegacySeason {
  characters: Array<LegacySeasonCharacter>;
  ladder: Array<LegacySeasonLadder>;
  nonRanked: Array<unknown>;
}

interface LegacySeasonCharacter {
  clanName: string;
  clanTag: string;
  displayName: string;
  id: string;
  profilePath: string;
  realm: number;
  region: number;
}

interface LegacySeasonLadder {
  division: number;
  ladderId: string;
  ladderName: string;
  league: string;
  losses: number;
  matchMakingQueue: string;
  rank: number;
  showcase: false;
  wins: number;
}

interface Match {
  date: number;
  decision: string;
  map: string;
  speed: string;
  type: string;
}

interface Points {
  categoryPoints: Record<string, number>;
  totalPoints: number;
}

interface Rewards {
  earned: Array<string>;
  selected: Array<string>;
}

interface Season {
  seasonId: number;
  seasonNumber: number;
  seasonYear: number;
  stats: Array<Stat>;
  totalGamesThisSeason: number;
}

interface Stat {
  games: number;
  type: string;
  wins: number;
}

interface SwarmLevels {
  level: number;
  protoss: SwarmLevelsByRace;
  terran: SwarmLevelsByRace;
  zerg: SwarmLevelsByRace;
}

interface SwarmLevelsByRace {
  currentLevelXP: number;
  level: number;
  totalLevelXP: number;
}
