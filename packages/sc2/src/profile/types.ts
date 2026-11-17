export interface LadderResponse {
  allLadderMemberships: Array<LadderMembership>;
  currentLadderMembership?: CurrentLadderMembership;
  ladderTeams: Array<ProfileLadderTeam>;
  league?: string;
  localizedDivision?: string;
  ranksAndPools: Array<RankAndPool>;
}

export interface LadderSummaryResponse {
  allLadderMemberships: Array<LadderMembership>;
  placementMatches: Array<unknown>;
  showCaseEntries: Array<ShowcaseEntry>;
}

export interface MetadataResponse {
  avatarUrl: string;
  name: string;
  profileId: string;
  profileUrl: string;
  realmId: number;
  regionId: number;
}

export interface ProfileResponse {
  achievementShowcase: Array<unknown>;
  campaign: ProfileCampaigns;
  career: ProfileCareer;
  categoryPointProgress: Array<ProfileCategoryPointProgress>;
  earnedAchievements: Array<ProfileEarnedAchiements>;
  earnedRewards: Array<ProfileEarnedRewards>;
  snapshot: ProfileSnapshot;
  summary: ProfileSummary;
  swarmLevels: ProfileSwarmLevels;
}

export interface StaticProfileResponse {
  achievements: Array<Achievement>;
  categories: Array<Category>;
  criteria: Array<Criterion>;
  rewards: Array<Reward>;
}

interface Achievement {
  categoryId: string;
  chainAchievementIds: Array<string>;
  chainRewardSize: number;
  criteriaIds?: Array<string>;
  description: string;
  flags: number;
  id: string;
  imageUrl: string;
  isChained: boolean;
  points: number;
  title: string;
  uiOrderHint: number;
}

interface Category {
  childrenCategoryIds: Array<string>;
  featuredAchievementId: string;
  id: string;
  medalTiers?: Array<number>;
  name: string;
  parentCategoryId: null | string;
  points: number;
  uiOrderHint: number;
}

interface Criterion {
  achievementId: string;
  description: string;
  evaluationClass: 'Achv' | 'Clnt' | 'S2Gm' | 'Sunk' | 'Trny';
  flags: number;
  id: string;
  necessaryQuantity: number;
  uiOrderHint: number;
}

interface CurrentLadderMembership {
  ladderId: string;
  localizedGameMode: string;
}

type FavoriteRace = 'protoss' | 'random' | 'terran' | 'zerg';

interface LadderMembership {
  ladderId: string;
  localizedGameMode: string;
  rank: number;
}

interface ProfileCampaigns {
  difficultyCompleted: {
    'heart-of-the-swarm': string;
    'legacy-of-the-void': string;
    'wings-of-liberty': string;
  };
}

interface ProfileCareer {
  best1v1Finish: ProfileCareerFinish;
  bestTeamFinish: ProfileCareerFinish;
  current1v1LeagueName?: null | string;
  currentBestTeamLeagueName?: null | string;
  protossWins: number;
  terranWins: number;
  totalCareerGames: number;
  totalGamesThisSeason: number;
  zergWins: number;
}

interface ProfileCareerFinish {
  leagueName: string;
  timesAchieved: number;
}

interface ProfileCategoryPointProgress {
  categoryId: string;

  pointsEarned: number;
}

interface ProfileEarnedAchiements {
  achievementId: string;
  completionDate: number;
  criteria: Array<ProfileEarnedAchievementsCriteria>;
  inProgress: boolean;
  isComplete: boolean;
  nextProgressEarnedQuantity?: number;
  nextProgressRequiredQuantity?: number;
  numCompletedAchievementsInSeries: number;
  totalAchievementsInSeries: number;
}

interface ProfileEarnedAchievementsCriteria {
  criterionId: string;
  earned?: { quantity: number; startTime: number };
}

interface ProfileEarnedRewards {
  achievementId?: string;
  category?: string;
  rewardId: string;
  selected: boolean;
}

interface ProfileLadderTeam {
  joinTimestamp: number;
  losses: number;
  mmr?: number;
  points: number;
  previousRank: number;
  teamMembers: Array<{
    clanTag?: string;
    displayName: string;
    favoriteRace?: FavoriteRace;
    id: string;
    realm: number;
    region: number;
  }>;
  wins: number;
}

interface ProfileSeasonSnapshot {
  '1v1': SeasonSnapshot;
  '2v2': SeasonSnapshot;
  '3v3': SeasonSnapshot;
  '4v4': SeasonSnapshot;
  Archon: SeasonSnapshot;
}

interface ProfileSnapshot {
  seasonSnapshot: ProfileSeasonSnapshot;
  totalRankedSeasonGamesPlayed: number;
}

interface ProfileSummary {
  decalProtoss: string;
  decalTerran: string;
  decalZerg: string;
  displayName: string;
  id: string;
  portrait: string;
  realm: number;
  totalAchievementPoints: number;
  totalSwarmLevel: number;
}

interface ProfileSwarmLevelByRace {
  currentLevelPoints: number;
  level: number;
  maxLevelPoints: number;
}

interface ProfileSwarmLevels {
  level: number;
  protoss: ProfileSwarmLevelByRace;
  terran: ProfileSwarmLevelByRace;
  zerg: ProfileSwarmLevelByRace;
}

interface RankAndPool {
  bonusPool: number;
  mmr: number;
  rank: number;
}

interface Reward {
  achievementId?: string;
  command?: '/dance' | (string & {});
  flags: number;
  id: string;
  imageUrl: string;
  isSkin: boolean;
  name: string;
  uiOrderHint: number;
  unlockableType: string;
}

interface SeasonSnapshot {
  leagueName: null | string;
  rank: number;
  totalGames: number;
  totalWins: number;
}

interface ShowcaseEntry {
  ladderId: string;
  leagueName: string;
  localizedDivisionName: string;
  losses: number;
  rank: number;
  team: {
    localizedGameMode: string;
    members: Array<{
      favoriteRace: FavoriteRace;
      name: string;
      playerId: string;
      region: number;
    }>;
  };
  wins: number;
}
