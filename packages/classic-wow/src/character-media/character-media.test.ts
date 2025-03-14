import type { BlizzardNamespaces, Resource } from '@blizzard-api/core';
import { describe, expect, it } from 'vitest';
import { characterBase } from '../base';
import { characterMediaSummary } from './character-media';
import type { CharacterMediaSummaryResponse } from './types';

describe('characterMediaSummary', () => {
  it('should return the correct resource object for profile-classic namespace', () => {
    const namespace: Extract<BlizzardNamespaces, 'profile-classic1x' | 'profile-classic'> = 'profile-classic';
    const realmSlug = 'some-realm';
    const characterName = 'some-character';

    const result: Resource<CharacterMediaSummaryResponse> = characterMediaSummary(namespace, realmSlug, characterName);

    expect(result).toEqual({
      namespace,
      path: `${characterBase}/${realmSlug}/${characterName}/character-media`,
    });
  });

  it('should return the correct resource object for profile-classic1x namespace', () => {
    const namespace: Extract<BlizzardNamespaces, 'profile-classic1x' | 'profile-classic'> = 'profile-classic1x';
    const realmSlug = 'another-realm';
    const characterName = 'another-character';

    const result: Resource<CharacterMediaSummaryResponse> = characterMediaSummary(namespace, realmSlug, characterName);

    expect(result).toEqual({
      namespace,
      path: `${characterBase}/${realmSlug}/${characterName}/character-media`,
    });
  });
});
