import type { Resource } from '@blizzard-api/core';
import { wowCharacterBasePath } from '@blizzard-api/core';
import { describe, expect, test } from 'vitest';
import type { CharacterMediaSummaryResponse } from './types';
import { characterMediaSummary } from './index';

const namespaces = ['profile-classic1x', 'profile-classic', 'profile-classicann'] as const;

describe('characterMediaSummary', () => {
  test.each(namespaces)('should return the correct resource object for the %s namespace', (namespace) => {
    const realmSlug = 'some-realm';
    const characterName = 'some-character';

    const result: Resource<CharacterMediaSummaryResponse> = characterMediaSummary(namespace, realmSlug, characterName);

    expect(result).toEqual({
      namespace,
      path: `${wowCharacterBasePath}/${realmSlug}/${characterName}/character-media`,
    });
  });
});
