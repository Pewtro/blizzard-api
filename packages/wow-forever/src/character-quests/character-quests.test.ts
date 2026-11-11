import { describe, expect, test } from 'vitest';
import { characterCompletedQuests, characterQuests } from './index';

describe('characterQuestsApi', () => {
  test('characterQuests should return a resource object with the correct path and namespace', () => {
    const resource = characterQuests('Putrofessor', 'Putricide');

    expect(resource.path).toBe('/profile/wow/character/putrofessor-putricide/quests');
    expect(resource.namespace).toBe('profile-forever');
  });

  test('characterCompletedQuests should return a resource object with the correct path and namespace', () => {
    const resource = characterCompletedQuests('Putrofessor', 'Putricide');

    expect(resource.path).toBe('/profile/wow/character/putrofessor-putricide/quests/completed');
    expect(resource.namespace).toBe('profile-forever');
  });
});
