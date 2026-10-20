import type { Resource } from '@blizzard-api/core';
import { wowCharacterBasePath } from '@blizzard-api/core';
import { describe, expect, test } from 'vitest';
import type { CharacterSpecializationsSummaryResponse } from './types';
import { characterSpecializationsSummary } from './index';

const namespaces = ['profile-classic1x', 'profile-classic', 'profile-classicann'] as const;

describe('characterSpecializationsSummary', () => {
  test.each(namespaces)('should return the correct resource object for the %s namespace', (namespace) => {
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
});
