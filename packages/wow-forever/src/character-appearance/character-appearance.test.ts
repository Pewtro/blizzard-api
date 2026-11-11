import { describe, expect, test } from 'vitest';
import { characterAppearanceSummary } from './index';

describe('characterAppearanceApi', () => {
  test('characterAppearanceSummary should return a resource object with the correct path and namespace', () => {
    const resource = characterAppearanceSummary('Putrofessor', 'Putricide');

    expect(resource.path).toBe('/profile/wow/character/putrofessor-putricide/appearance');
    expect(resource.namespace).toBe('profile-forever');
  });
});
