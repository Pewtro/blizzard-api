import type { BlizzardNamespaces } from '@blizzard-api/core';
import { describe, expect, it } from 'vitest';
import { characterBase } from '../base';
import { characterStatisticsSummary } from './character-statistics';

describe('characterStatisticsSummary', () => {
  it('should return the correct resource for given parameters', () => {
    const namespace: Extract<BlizzardNamespaces, 'profile-classic1x' | 'profile-classic'> = 'profile-classic';
    const realmSlug = 'some-realm';
    const characterName = 'some-character';

    const result = characterStatisticsSummary(namespace, realmSlug, characterName);

    expect(result).toEqual({
      namespace,
      path: `${characterBase}/${realmSlug}/${characterName}/statistics`,
    });
  });

  it('should handle different namespaces correctly', () => {
    const namespace: Extract<BlizzardNamespaces, 'profile-classic1x' | 'profile-classic'> = 'profile-classic1x';
    const realmSlug = 'another-realm';
    const characterName = 'another-character';

    const result = characterStatisticsSummary(namespace, realmSlug, characterName);

    expect(result).toEqual({
      namespace,
      path: `${characterBase}/${realmSlug}/${characterName}/statistics`,
    });
  });
});
