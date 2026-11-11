import { describe, expect, test } from 'vitest';
import { characterDungeons, characterEncountersSummary, characterRaids } from './index';

describe('characterEncountersApi', () => {
  test('characterEncountersSummary should return a resource object with the correct path and namespace', () => {
    const resource = characterEncountersSummary('Putrofessor', 'Putricide');

    expect(resource.path).toBe('/profile/wow/character/putrofessor-putricide/encounters');
    expect(resource.namespace).toBe('profile-forever');
  });

  test('characterDungeons should return a resource object with the correct path and namespace', () => {
    const resource = characterDungeons('Putrofessor', 'Putricide');

    expect(resource.path).toBe('/profile/wow/character/putrofessor-putricide/encounters/dungeons');
    expect(resource.namespace).toBe('profile-forever');
  });

  test('characterRaids should return a resource object with the correct path and namespace', () => {
    const resource = characterRaids('Putrofessor', 'Putricide');

    expect(resource.path).toBe('/profile/wow/character/putrofessor-putricide/encounters/raids');
    expect(resource.namespace).toBe('profile-forever');
  });
});
