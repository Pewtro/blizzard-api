import { describe, expect, test } from 'vitest';
import { characterHunterPetsSummary } from './index';

describe('characterHunterPetsSummary', () => {
  test('should return the correct resource object', () => {
    const realmSlug = 'testRealm';
    const characterName = 'testCharacter';

    const expectedResource = {
      namespace: 'profile',
      path: `/profile/wow/character/${encodeURIComponent(realmSlug)}/${encodeURIComponent(characterName)}/hunter-pets`,
    };

    const result = characterHunterPetsSummary(realmSlug, characterName);

    expect(result).toEqual(expectedResource);
  });
});
