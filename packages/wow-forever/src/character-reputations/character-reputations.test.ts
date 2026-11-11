import { describe, expect, test } from 'vitest';
import { characterReputationsSummary } from './index';

describe('characterReputationsApi', () => {
  test('characterReputationsSummary should return a resource object with the correct path and namespace', () => {
    const resource = characterReputationsSummary('Putrofessor', 'Putricide');

    expect(resource.path).toBe('/profile/wow/character/putrofessor-putricide/reputations');
    expect(resource.namespace).toBe('profile-forever');
  });
});
