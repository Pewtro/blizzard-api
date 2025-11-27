import type { BlizzardNamespaces } from '@blizzard-api/core';
import { wowCharacterBasePath } from '@blizzard-api/core';
import { describe, expect, it } from 'vitest';
import { characterHunterPetsSummary } from './character-hunter-pets';

describe('characterHunterPetsSummary', () => {
  it('should return the correct resource path for profile-classic namespace', () => {
    const namespace: Extract<BlizzardNamespaces, 'profile-classic'> = 'profile-classic';
    const realmSlug = 'some-realm';
    const characterName = 'some-character';
    const result = characterHunterPetsSummary(namespace, realmSlug, characterName);

    expect(result).toEqual({
      namespace,
      path: `${wowCharacterBasePath}/${realmSlug}/${characterName}/hunter-pets`,
    });
  });

  it('should return the correct resource path for profile-classic1x namespace', () => {
    const namespace: Extract<BlizzardNamespaces, 'profile-classic1x'> = 'profile-classic1x';
    const realmSlug = 'another-realm';
    const characterName = 'another-character';
    const result = characterHunterPetsSummary(namespace, realmSlug, characterName);

    expect(result).toEqual({
      namespace,
      path: `${wowCharacterBasePath}/${realmSlug}/${characterName}/hunter-pets`,
    });
  });
});
