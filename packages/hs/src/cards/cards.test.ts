/* eslint-disable sonarjs/no-duplicate-string */
import type { Locales } from '@blizzard-api/core';
import { describe, expect, it } from 'vitest';
import type { GameMode } from '../base';
import { cardSearch, fetchOneCard } from './cards';
import type { CardSearchParameters } from './types';

describe('cardSearch', () => {
  it('should return correct parameters for single values', () => {
    const options: CardSearchParameters = {
      attack: 5,
      defaultMercenary: 1,
      health: 10,
      mercenaryId: 123,
    };
    const result = cardSearch(options);
    expect(result.parameters).toEqual({
      ...options,
      attack: '5',
      defaultMercenary: '1',
      health: '10',
      mercenaryId: '123',
    });
    expect(result.path).toBe('hearthstone/cards');
  });

  it('should return correct parameters for array values', () => {
    const options: CardSearchParameters = {
      attack: [1, 2, 3],
      defaultMercenary: [1, 2],
      health: [5, 10],
      mercenaryId: [123, 456],
    };
    const result = cardSearch(options);
    expect(result.parameters).toEqual({
      ...options,
      attack: '1,2,3',
      defaultMercenary: '1,2',
      health: '5,10',
      mercenaryId: '123,456',
    });
    expect(result.path).toBe('hearthstone/cards');
  });

  it('should handle undefined values correctly', () => {
    const options: CardSearchParameters = {};
    const result = cardSearch(options);
    expect(result.parameters).toEqual({
      ...options,
      attack: undefined,
      defaultMercenary: undefined,
      health: undefined,
      mercenaryId: undefined,
    });
    expect(result.path).toBe('hearthstone/cards');
  });
});

describe('fetchOneCard', () => {
  it('should return correct parameters with default gameMode', () => {
    const id = 'card123';
    const options = { locale: 'en_US' as Locales };
    const result = fetchOneCard(id, options);
    expect(result.parameters).toEqual({
      gameMode: 'constructed',
      locale: 'en_US',
    });
    expect(result.path).toBe(`hearthstone/cards/${id}`);
  });

  it('should return correct parameters with specified gameMode', () => {
    const id = 'card123';
    const options = { gameMode: 'battlegrounds' as GameMode, locale: 'en_US' as Locales };
    const result = fetchOneCard(id, options);
    expect(result.parameters).toEqual({
      gameMode: 'battlegrounds',
      locale: 'en_US',
    });
    expect(result.path).toBe(`hearthstone/cards/${id}`);
  });

  it('should handle undefined locale correctly', () => {
    const id = 'card123';
    const options = { gameMode: 'battlegrounds' as GameMode };
    const result = fetchOneCard(id, options);
    expect(result.parameters).toEqual({
      gameMode: 'battlegrounds',
      locale: undefined,
    });
    expect(result.path).toBe(`hearthstone/cards/${id}`);
  });
});
