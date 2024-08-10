import { describe, expect, it } from 'vitest';
import { characterDungeons, characterEncountersSummary, characterRaids } from './character-encounters';

describe('Character Encounters', () => {
  it('should return the correct ProtectedResource object for character encounters', () => {
    const realmSlug = 'realm';
    const characterName = 'character';
    const token = 'token';

    const result = characterEncountersSummary(realmSlug, characterName, token);

    expect(result).toEqual({
      namespace: 'profile',
      path: 'profile/wow/character/realm/character/encounters',
      token,
    });
  });
  it('should return the correct ProtectedResource object for character dungeons', () => {
    const realmSlug = 'realm';
    const characterName = 'character';
    const token = 'token';

    const result = characterDungeons(realmSlug, characterName, token);

    expect(result).toEqual({
      namespace: 'profile',
      path: 'profile/wow/character/realm/character/encounters/dungeons',
      token,
    });
  });

  it('should return the correct ProtectedResource object for character raids', () => {
    const realmSlug = 'realm';
    const characterName = 'character';
    const token = 'token';

    const result = characterRaids(realmSlug, characterName, token);

    expect(result).toEqual({
      namespace: 'profile',
      path: 'profile/wow/character/realm/character/encounters/raids',
      token,
    });
  });
});
