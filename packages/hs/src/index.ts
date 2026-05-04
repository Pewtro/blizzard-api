import { cardBackSearch, fetchOneCardBack } from './card-backs/index';
import { cardSearch, fetchOneCard } from './cards/index';
import { getDeck } from './decks/index';
import { allMetadata, specificMetadata } from './metadata/index';

const hs = {
  //Card Backs
  cardBackSearch,
  fetchOneCardBack,
  //Cards
  cardSearch,
  fetchOneCard,
  //Decks
  getDeck,
  //Metadata
  allMetadata,
  specificMetadata,
};
export default hs;
export { hs };

//Card Backs
export * from './card-backs/index';
export type * from './card-backs/types';
//Cards
export * from './cards/index';
export type * from './cards/types';
//Decks
export * from './decks/index';
export type * from './decks/types';
//Metadata
export * from './metadata/index';
export type * from './metadata/types';
