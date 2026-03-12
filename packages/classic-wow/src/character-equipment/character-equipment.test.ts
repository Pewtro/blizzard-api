import type { BlizzardNamespaces } from '@blizzard-api/core';
import { wowCharacterBasePath } from '@blizzard-api/core';
import { describe, expect, test } from 'vitest';
import { characterEquipmentSummary } from './character-equipment';

describe('characterEquipmentSummary', () => {
  test('should return the correct resource for profile-classic namespace', () => {
    const namespace: Extract<BlizzardNamespaces, 'profile-classic1x' | 'profile-classic'> = 'profile-classic';
    const realmSlug = 'some-realm';
    const characterName = 'some-character';

    const result = characterEquipmentSummary(namespace, realmSlug, characterName);

    expect(result).toEqual({
      namespace,
      path: `${wowCharacterBasePath}/${realmSlug}/${characterName}/equipment`,
    });
  });

  test('should return the correct resource for profile-classic1x namespace', () => {
    const namespace: Extract<BlizzardNamespaces, 'profile-classic1x' | 'profile-classic'> = 'profile-classic1x';
    const realmSlug = 'another-realm';
    const characterName = 'another-character';

    const result = characterEquipmentSummary(namespace, realmSlug, characterName);

    expect(result).toEqual({
      namespace,
      path: `${wowCharacterBasePath}/${realmSlug}/${characterName}/equipment`,
    });
  });
});
