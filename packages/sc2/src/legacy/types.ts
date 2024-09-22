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

interface Achievements {
  achievements: Array<{
    achievementId: string;
    completionDate: number;
  }>;
  points: Points;
}

interface Points {
  categoryPoints: Record<string, number>;
  totalPoints: number;
}

interface Campaign {
  hots: string;
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

interface Icon {
  h: number;
  offset: number;
  url: string;
  w: number;
  x: number;
  y: number;
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

export interface LegacyLaddersResponse {
  currentSeason: Array<unknown>;
  previousSeason: Array<unknown>;
  showcasePlacement: Array<unknown>;
}

export interface LegacyMatchHistoryResponse {
  matches: Array<Match>;
}

interface Match {
  date: number;
  decision: 'Left' | 'Loss' | 'Win';
  map: string;
  speed: 'Fast' | 'Faster';
  type: '2v2' | '3v3' | 'Co-Op' | 'Custom';
}

export interface LegacyAchievementsResponse {
  achievements: Array<Achievement>;
  categories: Array<Category>;
}

interface Achievement {
  achievementId: string;
  categoryId: string;
  description: string;
  icon: Icon;
  points: number;
  title: string;
}

interface Category {
  categoryId: string;
  children?: Array<Category>;
  featuredAchievementId: string;
  title: string;
}

export interface LegacyRewardsResponse {
  animations: Array<Animation>;
  portraits: Array<Animation>;
  protossDecals: Array<Animation>;
  skins: Array<Animation>;
  terranDecals: Array<Animation>;
  zergDecals: Array<Animation>;
}

interface Animation {
  achievementId: string;
  command?: '/dance';
  icon: Icon;
  id: string;
  name?: string;
  title: string;
}
