import { describe, expect, test } from 'vitest';
import { characterAchievementsSummary, characterAchievementStatistics } from './index';

describe('characterAchievementsApi', () => {
  test('characterAchievementsSummary should return a resource object with the correct path and namespace', () => {
    const resource = characterAchievementsSummary('Putrofessor', 'Putricide');

    expect(resource.path).toBe('/profile/wow/character/putrofessor-putricide/achievements');
    expect(resource.namespace).toBe('profile-forever');
  });

  test('characterAchievementStatistics should return a resource object with the correct path and namespace', () => {
    const resource = characterAchievementStatistics('Putrofessor', 'Putricide');

    expect(resource.path).toBe('/profile/wow/character/putrofessor-putricide/achievements/statistics');
    expect(resource.namespace).toBe('profile-forever');
  });
});
