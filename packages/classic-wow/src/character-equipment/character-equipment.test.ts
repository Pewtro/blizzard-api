import { wowCharacterBasePath } from '@blizzard-api/core';
import { describe, expect, test } from 'vitest';
import { characterEquipmentSummary } from './index';

const namespaces = ['profile-classic1x', 'profile-classic', 'profile-classicann'] as const;

describe('characterEquipmentSummary', () => {
  test.each(namespaces)('should return the correct resource for the %s namespace', (namespace) => {
    const realmSlug = 'some-realm';
    const characterName = 'some-character';

    const result = characterEquipmentSummary(namespace, realmSlug, characterName);

    expect(result).toEqual({
      namespace,
      path: `${wowCharacterBasePath}/${realmSlug}/${characterName}/equipment`,
    });
  });
});
