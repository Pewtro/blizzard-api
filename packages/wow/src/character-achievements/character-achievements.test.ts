import { describe, expect, test } from 'vitest';
import { characterAchievementsSummary, characterAchievementStatistics } from './index';

describe('characterAchievementsSummary', () => {
  test('should return the correct ProtectedResource object', () => {
    const realmSlug = 'realm';
    const characterName = 'character';

    const result = characterAchievementsSummary(realmSlug, characterName);

    expect(result).toEqual({
      namespace: 'profile',
      path: '/profile/wow/character/realm/character/achievements',
    });
  });
});

describe('characterAchievementStatistics', () => {
  test('should return the correct ProtectedResource object', () => {
    const realmSlug = 'realm';
    const characterName = 'character';

    const result = characterAchievementStatistics(realmSlug, characterName);

    expect(result).toEqual({
      namespace: 'profile',
      path: '/profile/wow/character/realm/character/achievements/statistics',
    });
  });
});
