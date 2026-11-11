import { describe, expect, test } from 'vitest';
import { characterPvpSummary } from './index';

describe('characterPvpApi', () => {
  test('characterPvpSummary should return a resource object with the correct path and namespace', () => {
    const resource = characterPvpSummary('Putrofessor', 'Putricide');

    expect(resource.path).toBe('/profile/wow/character/putrofessor-putricide/pvp-summary');
    expect(resource.namespace).toBe('profile-forever');
  });
});
