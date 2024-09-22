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

interface Reward {
  achievementId?: string;
  command?: '/dance';
  flags: number;
  id: string;
  imageUrl: string;
  isSkin: boolean;
  name: string;
  uiOrderHint: number;
  unlockableType: string;
}

export interface MetadataResponse {
  avatarUrl: string;
  name: string;
  profileId: string;
  profileUrl: string;
  realmId: number;
  regionId: number;
}

export interface LadderSummaryResponse {
  allLadderMemberships: Array<unknown>;
  placementMatches: Array<unknown>;
  showCaseEntries: Array<unknown>;
}

export interface LadderResponse {
  allLadderMemberships: Array<unknown>;
  ladderTeams: Array<unknown>;
  ranksAndPools: Array<unknown>;
}
