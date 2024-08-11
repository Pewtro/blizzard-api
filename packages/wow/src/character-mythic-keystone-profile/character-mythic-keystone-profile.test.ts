import { describe, expect, it } from 'vitest';
import {
  characterMythicKeystoneProfileIndex,
  characterMythicKeystoneSeasonDetails,
} from './character-mythic-keystone-profile';

describe('Character Mythic Keystone Profile', () => {
  it('should return the correct ProtectedResource object for characterMythicKeystoneProfileIndex', () => {
    const realmSlug = 'realm';
    const characterName = 'character';

    const result = characterMythicKeystoneProfileIndex(realmSlug, characterName);

    expect(result).toEqual({
      namespace: 'profile',
      path: `/profile/wow/character/${realmSlug}/${characterName}/mythic-keystone-profile`,
    });
  });

  it('should return the correct ProtectedResource object for characterMythicKeystoneSeasonDetails', () => {
    const realmSlug = 'realm';
    const characterName = 'character';
    const seasonId = 123;

    const result = characterMythicKeystoneSeasonDetails(realmSlug, characterName, seasonId);

    expect(result).toEqual({
      namespace: 'profile',
      path: `/profile/wow/character/${realmSlug}/${characterName}/mythic-keystone-profile/season/${seasonId}`,
    });
  });
});
