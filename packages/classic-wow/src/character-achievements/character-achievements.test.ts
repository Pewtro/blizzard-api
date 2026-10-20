import { wowCharacterBasePath } from '@blizzard-api/core';
import type { BlizzardNamespaces } from '@blizzard-api/core';
import { describe, expect, test } from 'vitest';
import { characterAchievementsSummary, characterAchievementStatistics } from './index';

describe('characterAchievementsSummary', () => {
  test('should return the correct resource path for character achievements summary', () => {
    const namespace: Extract<BlizzardNamespaces, 'profile-classic'> = 'profile-classic';
    const realmSlug = 'some-realm';
    const characterName = 'some-character';
    const result = characterAchievementsSummary(namespace, realmSlug, characterName);

    expect(result).toEqual({
      namespace,
      path: `${wowCharacterBasePath}/${realmSlug}/${characterName.toLowerCase()}/achievements`,
    });
  });

  test('should not accept the anniversary namespace, as the API does not support it', () => {
    const namespace = 'profile-classicann';

    // @ts-expect-error the character achievements endpoints are not available in the anniversary namespace
    const result = characterAchievementsSummary(namespace, 'some-realm', 'some-character');

    expect(result).toBeDefined();
  });
});

describe('characterAchievementStatistics', () => {
  test('should return the correct resource path for character achievement statistics', () => {
    const namespace: Extract<BlizzardNamespaces, 'profile-classic'> = 'profile-classic';
    const realmSlug = 'some-realm';
    const characterName = 'some-character';
    const result = characterAchievementStatistics(namespace, realmSlug, characterName);

    expect(result).toEqual({
      namespace,
      path: `${wowCharacterBasePath}/${realmSlug}/${characterName.toLowerCase()}/achievements/statistics`,
    });
  });

  test('should not accept the anniversary namespace, as the API does not support it', () => {
    const namespace = 'profile-classicann';

    // @ts-expect-error the character achievements endpoints are not available in the anniversary namespace
    const result = characterAchievementStatistics(namespace, 'some-realm', 'some-character');

    expect(result).toBeDefined();
  });
});
