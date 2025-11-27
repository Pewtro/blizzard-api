import type { BlizzardNamespaces } from '@blizzard-api/core';
import { wowCharacterBasePath } from '@blizzard-api/core';
import { describe, expect, it } from 'vitest';
import { characterProfileStatus, characterProfileSummary } from './character-profile';

describe('characterProfileStatus', () => {
  it('should return the correct resource for character profile status', () => {
    const namespace: Extract<BlizzardNamespaces, 'profile-classic1x' | 'profile-classic'> = 'profile-classic';
    const realmSlug = 'some-realm';
    const characterName = 'some-character';

    const result = characterProfileStatus(namespace, realmSlug, characterName);

    expect(result).toEqual({
      namespace,
      path: `${wowCharacterBasePath}/${realmSlug}/${characterName.toLowerCase()}/status`,
    });
  });
});

describe('characterProfileSummary', () => {
  it('should return the correct resource for character profile summary', () => {
    const namespace: Extract<BlizzardNamespaces, 'profile-classic1x' | 'profile-classic'> = 'profile-classic';
    const realmSlug = 'some-realm';
    const characterName = 'some-character';

    const result = characterProfileSummary(namespace, realmSlug, characterName);

    expect(result).toEqual({
      namespace,
      path: `${wowCharacterBasePath}/${realmSlug}/${characterName.toLowerCase()}`,
    });
  });
});
