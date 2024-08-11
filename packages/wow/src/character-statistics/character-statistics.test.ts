import { describe, expect, it } from 'vitest';
import { characterStatisticsSummary } from './character-statistics';

describe('characterStatisticsSummary', () => {
  it('should return the correct protected resource object', () => {
    const realmSlug = 'test-realm';
    const characterName = 'test-character';
    const token = 'test-token';

    const expectedResource = {
      namespace: 'profile',
      path: `/profile/wow/character/${realmSlug}/${characterName}/statistics`,
      token,
    };

    const result = characterStatisticsSummary(realmSlug, characterName, token);

    expect(result).toEqual(expectedResource);
  });
});
