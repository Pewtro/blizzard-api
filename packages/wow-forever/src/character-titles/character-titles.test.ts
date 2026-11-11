import { describe, expect, test } from 'vitest';
import { characterTitlesSummary } from './index';

describe('characterTitlesApi', () => {
  test('characterTitlesSummary should return a resource object with the correct path and namespace', () => {
    const resource = characterTitlesSummary('Putrofessor', 'Putricide');

    expect(resource.path).toBe('/profile/wow/character/putrofessor-putricide/titles');
    expect(resource.namespace).toBe('profile-forever');
  });
});
