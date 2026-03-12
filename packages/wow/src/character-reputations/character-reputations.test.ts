import { describe, expect, test } from 'vitest';
import { characterReputationsSummary } from './character-reputations';

describe('characterReputationsSummary', () => {
  test('should return the correct ProtectedResource object', () => {
    const realmSlug = 'test-realm';
    const characterName = 'test-character';

    const expectedResource = {
      namespace: 'profile',
      path: `/profile/wow/character/${realmSlug}/${characterName}/reputations`,
    };

    const result = characterReputationsSummary(realmSlug, characterName);

    expect(result).toEqual(expectedResource);
  });
});
