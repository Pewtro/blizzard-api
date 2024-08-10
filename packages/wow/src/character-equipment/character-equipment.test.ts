import { describe, expect, it } from 'vitest';
import { characterEquipmentSummary } from './character-equipment';

describe('characterEquipmentSummary', () => {
  it('should return the correct ProtectedResource object', () => {
    const realmSlug = 'test-realm';
    const characterName = 'test-character';
    const token = 'test-token';

    const expectedResource = {
      namespace: 'profile',
      path: '/profile/wow/character/test-realm/test-character/equipment',
      token: 'test-token',
    };

    const result = characterEquipmentSummary(realmSlug, characterName, token);

    expect(result).toEqual(expectedResource);
  });
});
