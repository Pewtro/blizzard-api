import { player } from './account/account';
import { grandmasterLeaderboard, season } from './ladder/ladder';
import { getLeagueData } from './league/league';
import {
  legacyAchievements,
  legacyLadder,
  legacyLadders,
  legacyMatchHistory,
  legacyProfile,
  legacyRewards,
} from './legacy/legacy';
import { ladder, ladderSummary, metadata, profile, staticProfile } from './profile/profile';

const sc2 = {
  //Account
  player,
  //Ladder
  grandmasterLeaderboard,
  season,
  //League
  getLeagueData,
  //Legacy
  legacyAchievements,
  legacyLadder,
  legacyLadders,
  legacyMatchHistory,
  legacyProfile,
  legacyRewards,
  //Profile
  ladder,
  ladderSummary,
  metadata,
  profile,
  staticProfile,
};
export { sc2 as default, sc2 };

//Account
export * from './account/account';
//Ladder
export * from './ladder/ladder';
export type * from './ladder/types';
//League
export * from './league/league';
export type * from './league/types';
//Legacy
export * from './legacy/legacy';
export type * from './legacy/types';
//Profile
export * from './profile/profile';
export type * from './profile/types';
