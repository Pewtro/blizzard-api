import { describe, expect, test } from 'vitest';
import { characterCompletedQuests, characterQuests } from './character-quests';

describe('characterQuests', () => {
  test('should return the correct ProtectedResource object', () => {
    const realmSlug = 'realm';
    const characterName = 'character';

    const result = characterQuests(realmSlug, characterName);

    expect(result).toEqual({
      namespace: 'profile',
      path: `/profile/wow/character/${realmSlug}/${characterName}/quests`,
    });
  });
});

describe('characterCompletedQuests', () => {
  test('should return the correct ProtectedResource object', () => {
    const realmSlug = 'realm';
    const characterName = 'character';

    const result = characterCompletedQuests(realmSlug, characterName);

    expect(result).toEqual({
      namespace: 'profile',
      path: `/profile/wow/character/${realmSlug}/${characterName}/quests/completed`,
    });
  });
});
