import { describe, expect, it } from 'vitest';
import {
  characterMythicKeystoneProfileIndex,
  characterMythicKeystoneSeasonDetails,
} from './character-mythic-keystone-profile';

describe('Character Mythic Keystone Profile', () => {
  it('should return the correct ProtectedResource object for characterMythicKeystoneProfileIndex', () => {
    const realmSlug = 'realm';
    const characterName = 'character';
    const token = 'token';

    const result = characterMythicKeystoneProfileIndex(realmSlug, characterName, token);

    expect(result).toEqual({
      namespace: 'profile',
      path: `/profile/wow/character/${realmSlug}/${characterName}/mythic-keystone-profile`,
      token,
    });
  });

  it('should return the correct ProtectedResource object for characterMythicKeystoneSeasonDetails', () => {
    const realmSlug = 'realm';
    const characterName = 'character';
    const seasonId = 123;
    const token = 'token';

    const result = characterMythicKeystoneSeasonDetails(realmSlug, characterName, seasonId, token);

    expect(result).toEqual({
      namespace: 'profile',
      path: `/profile/wow/character/${realmSlug}/${characterName}/mythic-keystone-profile/season/${seasonId}`,
      token,
    });
  });
});
