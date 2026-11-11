import { describe, expect, test } from 'vitest';
import { characterStatisticsSummary } from './index';

describe('characterStatisticsApi', () => {
  test('characterStatisticsSummary should return a resource object with the correct path and namespace', () => {
    const resource = characterStatisticsSummary('Putrofessor', 'Putricide');

    expect(resource.path).toBe('/profile/wow/character/putrofessor-putricide/statistics');
    expect(resource.namespace).toBe('profile-forever');
  });
});
