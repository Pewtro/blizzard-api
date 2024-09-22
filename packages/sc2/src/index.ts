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

export const sc2 = {
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

//Account
//Ladder
export type * from './ladder/types';
//League
export type * from './league/types';
//Legacy
export type * from './legacy/types';
//Profile
export type * from './profile/types';
