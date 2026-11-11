import { describe, expect, test } from 'vitest';
import { characterProfileStatus, characterProfileSummary } from './index';

describe('characterProfileApi', () => {
  test('characterProfileSummary should return a resource object with the correct path and namespace', () => {
    const resource = characterProfileSummary('Putrofessor', 'Putricide');

    expect(resource.path).toBe('/profile/wow/character/putrofessor-putricide');
    expect(resource.namespace).toBe('profile-forever');
  });

  test('characterProfileStatus should return a resource object with the correct path and namespace', () => {
    const resource = characterProfileStatus('Putrofessor', 'Putricide');

    expect(resource.path).toBe('/profile/wow/character/putrofessor-putricide/status');
    expect(resource.namespace).toBe('profile-forever');
  });
});
