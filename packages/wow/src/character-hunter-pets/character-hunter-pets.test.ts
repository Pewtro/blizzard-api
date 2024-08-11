import { describe, expect, it } from 'vitest';
import { characterHunterPetsSummary } from './character-hunter-pets';

describe('characterHunterPetsSummary', () => {
  it('should return the correct ProtectedResource object', () => {
    const realmSlug = 'testRealm';
    const characterName = 'testCharacter';

    const expectedResource = {
      namespace: 'profile',
      path: `/profile/wow/character/${realmSlug}/${characterName}/hunter-pets`,
    };

    const result = characterHunterPetsSummary(realmSlug, characterName);

    expect(result).toEqual(expectedResource);
  });
});
