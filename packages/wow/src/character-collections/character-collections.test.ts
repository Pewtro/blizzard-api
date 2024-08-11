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

  it('should generate the correct protected resource for characterCollectionsIndex', () => {
    const expectedResource = {
      namespace: 'profile',
      path: '/profile/wow/character/realm-slug/character-name/collections',
    };

    const resource = characterCollectionsIndex(realmSlug, characterName);

    expect(resource).toEqual(expectedResource);
  });

  it('should generate the correct protected resource for characterHeirloomsCollectionSummary', () => {
    const expectedResource = {
      namespace: 'profile',
      path: '/profile/wow/character/realm-slug/character-name/collections/heirlooms',
    };

    const resource = characterHeirloomsCollectionSummary(realmSlug, characterName);

    expect(resource).toEqual(expectedResource);
  });

  it('should generate the correct protected resource for characterMountsCollectionSummary', () => {
    const expectedResource = {
      namespace: 'profile',
      path: '/profile/wow/character/realm-slug/character-name/collections/mounts',
    };

    const resource = characterMountsCollectionSummary(realmSlug, characterName);

    expect(resource).toEqual(expectedResource);
  });

  it('should generate the correct protected resource for characterPetsCollectionSummary', () => {
    const expectedResource = {
      namespace: 'profile',
      path: '/profile/wow/character/realm-slug/character-name/collections/pets',
    };

    const resource = characterPetsCollectionSummary(realmSlug, characterName);

    expect(resource).toEqual(expectedResource);
  });

  it('should generate the correct protected resource for characterToysCollectionSummary', () => {
    const expectedResource = {
      namespace: 'profile',
      path: '/profile/wow/character/realm-slug/character-name/collections/toys',
    };

    const resource = characterToysCollectionSummary(realmSlug, characterName);

    expect(resource).toEqual(expectedResource);
  });

  it('should generate the correct protected resource for characterTransmogCollectionSummary', () => {
    const expectedResource = {
      namespace: 'profile',
      path: '/profile/wow/character/realm-slug/character-name/collections/transmogs',
    };

    const resource = characterTransmogCollectionSummary(realmSlug, characterName);

    expect(resource).toEqual(expectedResource);
  });
});
