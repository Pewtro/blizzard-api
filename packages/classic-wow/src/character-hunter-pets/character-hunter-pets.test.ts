import { wowCharacterBasePath } from '@blizzard-api/core';
import { describe, expect, test } from 'vitest';
import { characterHunterPetsSummary } from './index';

const namespaces = ['profile-classic1x', 'profile-classic', 'profile-classicann'] as const;

describe('characterHunterPetsSummary', () => {
  test.each(namespaces)('should return the correct resource path for the %s namespace', (namespace) => {
    const realmSlug = 'some-realm';
    const characterName = 'some-character';

    const result = characterHunterPetsSummary(namespace, realmSlug, characterName);

    expect(result).toEqual({
      namespace,
      path: `${wowCharacterBasePath}/${realmSlug}/${characterName}/hunter-pets`,
    });
  });
});
