import { describe, expect, it } from 'vitest';
import { characterCompletedQuests, characterQuests } from './character-quests';

describe('characterQuests', () => {
  it('should return the correct ProtectedResource object', () => {
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
  it('should return the correct ProtectedResource object', () => {
    const realmSlug = 'realm';
    const characterName = 'character';

    const result = characterCompletedQuests(realmSlug, characterName);

    expect(result).toEqual({
      namespace: 'profile',
      path: `/profile/wow/character/${realmSlug}/${characterName}/quests/completed`,
    });
  });
});
