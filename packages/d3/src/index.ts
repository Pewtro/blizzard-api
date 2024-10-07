import { act, actIndex } from './act/act';
import { artisan, recipe } from './artisan-and-recipe/artisan-and-recipe';
import { characterClass, skill } from './character-class-and-skill/character-class-and-skill';
import { follower } from './follower/follower';
import { era, eraIndex, eraLeaderboard, season, seasonIndex, seasonLeaderboard } from './game-data/game-data';
import { item } from './item/item';
import { itemType, itemTypeIndex } from './item-type/item-type';
import { account, accountHero, accountHeroFollowerItems, accountHeroItems } from './profile/profile';

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
export { d3 as default, d3 };

//Act
export * from './act/act';
export type * from './act/types';
//Artisan and Recipe
export * from './artisan-and-recipe/artisan-and-recipe';
export type * from './artisan-and-recipe/types';
//Character Class and Skill
export * from './character-class-and-skill/character-class-and-skill';
export type * from './character-class-and-skill/types';
//Follower
export * from './follower/follower';
export type * from './follower/types';
//Game Data
export * from './game-data/game-data';
export type * from './game-data/types';
//Item
export * from './item/item';
export type * from './item/types';
//Item Type
export * from './item-type/item-type';
export type * from './item-type/types';
//Profile
export * from './profile/profile';
export type * from './profile/types';
