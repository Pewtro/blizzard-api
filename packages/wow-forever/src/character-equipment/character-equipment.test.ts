import { describe, expect, test } from 'vitest';
import { characterEquipmentSummary } from './index';

describe('characterEquipmentApi', () => {
  test('characterEquipmentSummary should return a resource object with the correct path and namespace', () => {
    const resource = characterEquipmentSummary('Putrofessor', 'Putricide');

    expect(resource.path).toBe('/profile/wow/character/putrofessor-putricide/equipment');
    expect(resource.namespace).toBe('profile-forever');
  });
});
