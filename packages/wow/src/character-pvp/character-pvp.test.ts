import { describe, expect, it } from 'vitest';
import { characterPvpBracketStatistics, characterPvpSummary } from './character-pvp';

describe('character pvp', () => {
  it('bracket statistics', () => {
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
  it('summary', () => {
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
