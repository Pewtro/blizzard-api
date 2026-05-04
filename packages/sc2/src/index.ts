import { player } from './account/index';
import { grandmasterLeaderboard, season } from './ladder/index';
import { getLeagueData } from './league/index';
import {
  legacyAchievements,
  legacyLadder,
  legacyLadders,
  legacyMatchHistory,
  legacyProfile,
  legacyRewards,
} from './legacy/index';
import { ladder, ladderSummary, metadata, profile, staticProfile } from './profile/index';

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
export default sc2;
export { sc2 };

//Account
export * from './account/index';
//Ladder
export * from './ladder/index';
export type * from './ladder/types';
//League
export * from './league/index';
export type * from './league/types';
//Legacy
export * from './legacy/index';
export type * from './legacy/types';
//Profile
export * from './profile/index';
export type * from './profile/types';
