import { describe, expect, it } from 'vitest';
import { characterCompletedQuests, characterQuests } from './character-quests';

describe('characterQuests', () => {
  it('should return the correct ProtectedResource object', () => {
    const realmSlug = 'realm';
    const characterName = 'character';
    const token = 'token';

    const result = characterQuests(realmSlug, characterName, token);

    expect(result).toEqual({
      namespace: 'profile',
      path: `/profile/wow/character/${realmSlug}/${characterName}/quests`,
      token,
    });
  });
});

describe('characterCompletedQuests', () => {
  it('should return the correct ProtectedResource object', () => {
    const realmSlug = 'realm';
    const characterName = 'character';
    const token = 'token';

    const result = characterCompletedQuests(realmSlug, characterName, token);

    expect(result).toEqual({
      namespace: 'profile',
      path: `/profile/wow/character/${realmSlug}/${characterName}/quests/completed`,
      token,
    });
  });
});
