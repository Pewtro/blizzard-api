import { describe, expect, it } from 'vitest';
import { characterHunterPetsSummary } from './character-hunter-pets';

describe('characterHunterPetsSummary', () => {
  it('should return the correct ProtectedResource object', () => {
    const realmSlug = 'testRealm';
    const characterName = 'testCharacter';
    const token = 'testToken';

    const expectedResource = {
      namespace: 'profile',
      path: `/profile/wow/character/${realmSlug}/${characterName}/hunter-pets`,
      token,
    };

    const result = characterHunterPetsSummary(realmSlug, characterName, token);

    expect(result).toEqual(expectedResource);
  });
});
