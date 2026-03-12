import type { BlizzardNamespaces } from '@blizzard-api/core';
import { wowCharacterBasePath } from '@blizzard-api/core';
import { describe, expect, test } from 'vitest';
import { characterStatisticsSummary } from './character-statistics';

describe('characterStatisticsSummary', () => {
  test('should return the correct resource for given parameters', () => {
    const namespace: Extract<BlizzardNamespaces, 'profile-classic1x' | 'profile-classic'> = 'profile-classic';
    const realmSlug = 'some-realm';
    const characterName = 'some-character';

    const result = characterStatisticsSummary(namespace, realmSlug, characterName);

    expect(result).toEqual({
      namespace,
      path: `${wowCharacterBasePath}/${realmSlug}/${characterName}/statistics`,
    });
  });

  test('should handle different namespaces correctly', () => {
    const namespace: Extract<BlizzardNamespaces, 'profile-classic1x' | 'profile-classic'> = 'profile-classic1x';
    const realmSlug = 'another-realm';
    const characterName = 'another-character';

    const result = characterStatisticsSummary(namespace, realmSlug, characterName);

    expect(result).toEqual({
      namespace,
      path: `${wowCharacterBasePath}/${realmSlug}/${characterName}/statistics`,
    });
  });
});
