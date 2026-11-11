import { describe, expect, test } from 'vitest';
import { characterSpecializationsSummary } from './index';

describe('characterSpecializationsApi', () => {
  test('characterSpecializationsSummary should return a resource object with the correct path and namespace', () => {
    const resource = characterSpecializationsSummary('Putrofessor', 'Putricide');

    expect(resource.path).toBe('/profile/wow/character/putrofessor-putricide/specializations');
    expect(resource.namespace).toBe('profile-forever');
  });
});
