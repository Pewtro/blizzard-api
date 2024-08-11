import { describe, expect, it } from 'vitest';
import { characterDungeons, characterEncountersSummary, characterRaids } from './character-encounters';

describe('Character Encounters', () => {
  it('should return the correct ProtectedResource object for character encounters', () => {
    const realmSlug = 'realm';
    const characterName = 'character';

    const result = characterEncountersSummary(realmSlug, characterName);

    expect(result).toEqual({
      namespace: 'profile',
      path: 'profile/wow/character/realm/character/encounters',
    });
  });
  it('should return the correct ProtectedResource object for character dungeons', () => {
    const realmSlug = 'realm';
    const characterName = 'character';

    const result = characterDungeons(realmSlug, characterName);

    expect(result).toEqual({
      namespace: 'profile',
      path: 'profile/wow/character/realm/character/encounters/dungeons',
    });
  });

  it('should return the correct ProtectedResource object for character raids', () => {
    const realmSlug = 'realm';
    const characterName = 'character';

    const result = characterRaids(realmSlug, characterName);

    expect(result).toEqual({
      namespace: 'profile',
      path: 'profile/wow/character/realm/character/encounters/raids',
    });
  });
});
