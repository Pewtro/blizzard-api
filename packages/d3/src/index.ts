import { act, actIndex } from './act/index';
import { artisan, recipe } from './artisan-and-recipe/index';
import { characterClass, skill } from './character-class-and-skill/index';
import { follower } from './follower/index';
import { era, eraIndex, eraLeaderboard, season, seasonIndex, seasonLeaderboard } from './game-data/index';
import { itemType, itemTypeIndex } from './item-type/index';
import { item } from './item/index';
import { account, accountHero, accountHeroFollowerItems, accountHeroItems } from './profile/index';

const d3 = {
  //Act
  act,
  actIndex,
  //Artisan and Recipe
  artisan,
  recipe,
  //Follower
  follower,
  //Character Class and Skill
  characterClass,
  skill,
  //Item Type
  itemType,
  itemTypeIndex,
  //Item
  item,
  //Profile
  account,
  accountHero,
  accountHeroFollowerItems,
  accountHeroItems,
  //Game Data
  era,
  eraIndex,
  eraLeaderboard,
  season,
  seasonIndex,
  seasonLeaderboard,
};
export default d3;
export { d3 };

//Act
export * from './act/index';
export type * from './act/types';
//Artisan and Recipe
export * from './artisan-and-recipe/index';
export type * from './artisan-and-recipe/types';
//Character Class and Skill
export * from './character-class-and-skill/index';
export type * from './character-class-and-skill/types';
//Follower
export * from './follower/index';
export type * from './follower/types';
//Game Data
export * from './game-data/index';
export type * from './game-data/types';
//Item
export * from './item/index';
export type * from './item/types';
//Item Type
export * from './item-type/index';
export type * from './item-type/types';
//Profile
export * from './profile/index';
export type * from './profile/types';
