import { describe, expect, it } from 'vitest';
import { characterPvpSummary } from './character-pvp';

describe('characterPvpSummary', () => {
  it('should return the correct ProtectedResource object', () => {
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
