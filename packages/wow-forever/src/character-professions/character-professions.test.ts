import { describe, expect, test } from 'vitest';
import { characterProfessionsSummary } from './index';

describe('characterProfessionsApi', () => {
  test('characterProfessionsSummary should return a resource object with the correct path and namespace', () => {
    const resource = characterProfessionsSummary('Putrofessor', 'Putricide');

    expect(resource.path).toBe('/profile/wow/character/putrofessor-putricide/professions');
    expect(resource.namespace).toBe('profile-forever');
  });
});
