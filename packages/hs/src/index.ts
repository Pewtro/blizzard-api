import { cardBackSearch, fetchOneCardBack } from './card-backs/card-backs';
import { cardSearch, fetchOneCard } from './cards/cards';
import { getDeck } from './decks/decks';
import { allMetadata, specificMetadata } from './metadata/metadata';

export const hs = {
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

//Card Backs
export * from './card-backs/card-backs';
export type * from './card-backs/types';
//Cards
export * from './cards/cards';
export type * from './cards/types';
//Decks
export * from './decks/decks';
export type * from './decks/types';
//Metadata
export * from './metadata/metadata';
export type * from './metadata/types';
