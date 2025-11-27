import { wowCharacterBasePath } from '@blizzard-api/core';
import type { BlizzardNamespaces } from '@blizzard-api/core';
import { describe, expect, it } from 'vitest';
import { characterAchievementsSummary, characterAchievementStatistics } from './character-achievements';

describe('characterAchievementsSummary', () => {
  it('should return the correct resource path for character achievements summary', () => {
    const namespace: Extract<BlizzardNamespaces, 'profile-classic'> = 'profile-classic';
    const realmSlug = 'some-realm';
    const characterName = 'some-character';
    const result = characterAchievementsSummary(namespace, realmSlug, characterName);

    expect(result).toEqual({
      namespace,
      path: `${wowCharacterBasePath}/${realmSlug}/${characterName.toLowerCase()}/achievements`,
    });
  });
});

describe('characterAchievementStatistics', () => {
  it('should return the correct resource path for character achievement statistics', () => {
    const namespace: Extract<BlizzardNamespaces, 'profile-classic'> = 'profile-classic';
    const realmSlug = 'some-realm';
    const characterName = 'some-character';
    const result = characterAchievementStatistics(namespace, realmSlug, characterName);

    expect(result).toEqual({
      namespace,
      path: `${wowCharacterBasePath}/${realmSlug}/${characterName.toLowerCase()}/achievements/statistics`,
    });
  });
});
