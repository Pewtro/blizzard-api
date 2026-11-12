import { describe, expect, test } from 'vitest';
import { characterStatisticsSummary } from './index';

describe('characterStatisticsSummary', () => {
  test('should return the correct resource object', () => {
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
