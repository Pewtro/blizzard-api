import { describe, expect, test } from 'vitest';
import { characterEquipmentSummary } from './character-equipment';

describe('characterEquipmentSummary', () => {
  test('should return the correct ProtectedResource object', () => {
    const realmSlug = 'test-realm';
    const characterName = 'test-character';

    const expectedResource = {
      namespace: 'profile',
      path: '/profile/wow/character/test-realm/test-character/equipment',
    };

    const result = characterEquipmentSummary(realmSlug, characterName);

    expect(result).toEqual(expectedResource);
  });
});
