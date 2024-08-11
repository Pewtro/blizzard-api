import { describe, expect, it } from 'vitest';
import { characterStatisticsSummary } from './character-statistics';

describe('characterStatisticsSummary', () => {
  it('should return the correct protected resource object', () => {
    const realmSlug = 'test-realm';
    const characterName = 'test-character';

    const expectedResource = {
      namespace: 'profile',
      path: `/profile/wow/character/${realmSlug}/${characterName}/statistics`,
    };

    const result = characterStatisticsSummary(realmSlug, characterName);

    expect(result).toEqual(expectedResource);
  });
});
