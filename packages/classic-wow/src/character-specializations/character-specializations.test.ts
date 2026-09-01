import type { BlizzardNamespaces, Resource } from '@blizzard-api/core';
import { wowCharacterBasePath } from '@blizzard-api/core';
import { describe, expect, test } from 'vitest';
import type { CharacterSpecializationsSummaryResponse } from './types';
import { characterSpecializationsSummary } from './index';

describe('characterSpecializationsSummary', () => {
  test('should return the correct resource object for profile-classic namespace', () => {
    const namespace: Extract<BlizzardNamespaces, 'profile-classic1x' | 'profile-classic'> = 'profile-classic';
    const realmSlug = 'some-realm';
    const characterName = 'some-character';

    const result: Resource<CharacterSpecializationsSummaryResponse> = characterSpecializationsSummary(
      namespace,
      realmSlug,
      characterName,
    );

    expect(result).toEqual({
      namespace,
      path: `${wowCharacterBasePath}/${realmSlug}/${characterName}/specializations`,
    });
  });

  test('should return the correct resource object for profile-classic1x namespace', () => {
    const namespace: Extract<BlizzardNamespaces, 'profile-classic1x' | 'profile-classic'> = 'profile-classic1x';
    const realmSlug = 'another-realm';
    const characterName = 'another-character';

    const result: Resource<CharacterSpecializationsSummaryResponse> = characterSpecializationsSummary(
      namespace,
      realmSlug,
      characterName,
    );

    expect(result).toEqual({
      namespace,
      path: `${wowCharacterBasePath}/${realmSlug}/${characterName}/specializations`,
    });
  });
});
