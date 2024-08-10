import { describe, expect, it } from 'vitest';
import {
  characterCollectionsIndex,
  characterHeirloomsCollectionSummary,
  characterMountsCollectionSummary,
  characterPetsCollectionSummary,
  characterToysCollectionSummary,
  characterTransmogCollectionSummary,
} from './character-collections';

describe('Character Collections', () => {
  const realmSlug = 'realm-slug';
  const characterName = 'character-name';
  const token = 'token';

  it('should generate the correct protected resource for characterCollectionsIndex', () => {
    const expectedResource = {
      namespace: 'profile',
      path: '/profile/wow/character/realm-slug/character-name/collections',
      token: 'token',
    };

    const resource = characterCollectionsIndex(realmSlug, characterName, token);

    expect(resource).toEqual(expectedResource);
  });

  it('should generate the correct protected resource for characterHeirloomsCollectionSummary', () => {
    const expectedResource = {
      namespace: 'profile',
      path: '/profile/wow/character/realm-slug/character-name/collections/heirlooms',
      token: 'token',
    };

    const resource = characterHeirloomsCollectionSummary(realmSlug, characterName, token);

    expect(resource).toEqual(expectedResource);
  });

  it('should generate the correct protected resource for characterMountsCollectionSummary', () => {
    const expectedResource = {
      namespace: 'profile',
      path: '/profile/wow/character/realm-slug/character-name/collections/mounts',
      token: 'token',
    };

    const resource = characterMountsCollectionSummary(realmSlug, characterName, token);

    expect(resource).toEqual(expectedResource);
  });

  it('should generate the correct protected resource for characterPetsCollectionSummary', () => {
    const expectedResource = {
      namespace: 'profile',
      path: '/profile/wow/character/realm-slug/character-name/collections/pets',
      token: 'token',
    };

    const resource = characterPetsCollectionSummary(realmSlug, characterName, token);

    expect(resource).toEqual(expectedResource);
  });

  it('should generate the correct protected resource for characterToysCollectionSummary', () => {
    const expectedResource = {
      namespace: 'profile',
      path: '/profile/wow/character/realm-slug/character-name/collections/toys',
      token: 'token',
    };

    const resource = characterToysCollectionSummary(realmSlug, characterName, token);

    expect(resource).toEqual(expectedResource);
  });

  it('should generate the correct protected resource for characterTransmogCollectionSummary', () => {
    const expectedResource = {
      namespace: 'profile',
      path: '/profile/wow/character/realm-slug/character-name/collections/transmogs',
      token: 'token',
    };

    const resource = characterTransmogCollectionSummary(realmSlug, characterName, token);

    expect(resource).toEqual(expectedResource);
  });
});
