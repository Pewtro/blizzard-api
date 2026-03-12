import { describe, expect, test } from 'vitest';
import { characterPvpBracketStatistics, characterPvpSummary } from './character-pvp';

describe('character pvp', () => {
  test('bracket statistics', () => {
    const realmSlug = 'example-realm';
    const characterName = 'example-character';
    const bracketId = '2v2';

    const expectedResource = {
      namespace: 'profile',
      path: `/profile/wow/character/${realmSlug}/${characterName.toLowerCase()}/pvp-bracket/${bracketId}`,
    };

    const result = characterPvpBracketStatistics(realmSlug, characterName, bracketId);
    expect(result).toEqual(expectedResource);
  });
  test('summary', () => {
    const realmSlug = 'example-realm';
    const characterName = 'example-character';

    const expectedResource = {
      namespace: 'profile',
      path: '/profile/wow/character/example-realm/example-character/pvp-summary',
    };

    const result = characterPvpSummary(realmSlug, characterName);

    expect(result).toEqual(expectedResource);
  });
});
