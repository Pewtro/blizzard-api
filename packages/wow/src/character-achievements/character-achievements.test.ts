import { describe, expect, it } from 'vitest';
import { characterAchievementsSummary, characterAchievementStatistics } from './character-achievements';

describe('characterAchievementsSummary', () => {
  it('should return the correct ProtectedResource object', () => {
    const realmSlug = 'realm';
    const characterName = 'character';

    const result = characterAchievementsSummary(realmSlug, characterName);

    expect(result.namespace).toBe('profile');
    expect(result.path).toBe('/profile/wow/character/realm/character/achievements');
  });
});

describe('characterAchievementStatistics', () => {
  it('should return the correct ProtectedResource object', () => {
    const realmSlug = 'realm';
    const characterName = 'character';

    const result = characterAchievementStatistics(realmSlug, characterName);

    expect(result.namespace).toBe('profile');
    expect(result.path).toBe('/profile/wow/character/realm/character/achievements/statistics');
  });
});
