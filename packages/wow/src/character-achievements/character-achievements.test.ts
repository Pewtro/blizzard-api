import { describe, expect, it } from 'vitest';
import { characterAchievementsSummary, characterAchievementStatistics } from './character-achievements';

describe('characterAchievementsSummary', () => {
  it('should return the correct ProtectedResource object', () => {
    const realmSlug = 'realm';
    const characterName = 'character';
    const token = 'token';

    const result = characterAchievementsSummary(realmSlug, characterName, token);

    expect(result.namespace).toBe('profile');
    expect(result.path).toBe('/profile/wow/character/realm/character/achievements');
    expect(result.token).toBe(token);
  });
});

describe('characterAchievementStatistics', () => {
  it('should return the correct ProtectedResource object', () => {
    const realmSlug = 'realm';
    const characterName = 'character';
    const token = 'token';

    const result = characterAchievementStatistics(realmSlug, characterName, token);

    expect(result.namespace).toBe('profile');
    expect(result.path).toBe('/profile/wow/character/realm/character/achievements/statistics');
    expect(result.token).toBe(token);
  });
});
