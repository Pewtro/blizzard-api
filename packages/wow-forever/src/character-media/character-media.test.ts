import { describe, expect, test } from 'vitest';
import { characterMediaSummary } from './index';

describe('characterMediaApi', () => {
  test('characterMediaSummary should return a resource object with the correct path and namespace', () => {
    const resource = characterMediaSummary('Putrofessor', 'Putricide');

    expect(resource.path).toBe('/profile/wow/character/putrofessor-putricide/character-media');
    expect(resource.namespace).toBe('profile-forever');
  });
});
