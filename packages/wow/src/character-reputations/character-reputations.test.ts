import { describe, expect, it } from 'vitest';
import { characterReputationsSummary } from './character-reputations';

describe('characterReputationsSummary', () => {
  it('should return the correct ProtectedResource object', () => {
    const realmSlug = 'test-realm';
    const characterName = 'test-character';
    const token = 'test-token';

    const expectedResource = {
      namespace: 'profile',
      path: `/profile/wow/character/${realmSlug}/${characterName}/reputations`,
      token,
    };

    const result = characterReputationsSummary(realmSlug, characterName, token);

    expect(result).toEqual(expectedResource);
  });
});
