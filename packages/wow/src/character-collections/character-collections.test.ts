import { describe, expect, test } from 'vitest';
import {
  characterCollectionDecor,
  characterCollectionsIndex,
  characterHeirloomsCollectionSummary,
  characterMountsCollectionSummary,
  characterPetsCollectionSummary,
  characterToysCollectionSummary,
  characterTransmogCollectionSummary,
} from './index';

describe('Character Collections', () => {
  const realmSlug = 'realm-slug';
  const characterName = 'character-name';

  test('should generate the correct resource for characterCollectionsIndex', () => {
    const expectedResource = {
      namespace: 'profile',
      path: '/profile/wow/character/realm-slug/character-name/collections',
    };

    const resource = characterCollectionsIndex(realmSlug, characterName);

    expect(resource).toEqual(expectedResource);
  });

  test('should generate the correct resource for characterCollectionDecor', () => {
    const expectedResource = {
      namespace: 'profile',
      path: '/profile/wow/character/realm-slug/character-name/collections/decor',
    };

    const resource = characterCollectionDecor(realmSlug, characterName);

    expect(resource).toEqual(expectedResource);
  });

  test('should generate the correct resource for characterHeirloomsCollectionSummary', () => {
    const expectedResource = {
      namespace: 'profile',
      path: '/profile/wow/character/realm-slug/character-name/collections/heirlooms',
    };

    const resource = characterHeirloomsCollectionSummary(realmSlug, characterName);

    expect(resource).toEqual(expectedResource);
  });

  test('should generate the correct resource for characterMountsCollectionSummary', () => {
    const expectedResource = {
      namespace: 'profile',
      path: '/profile/wow/character/realm-slug/character-name/collections/mounts',
    };

    const resource = characterMountsCollectionSummary(realmSlug, characterName);

    expect(resource).toEqual(expectedResource);
  });

  test('should generate the correct resource for characterPetsCollectionSummary', () => {
    const expectedResource = {
      namespace: 'profile',
      path: '/profile/wow/character/realm-slug/character-name/collections/pets',
    };

    const resource = characterPetsCollectionSummary(realmSlug, characterName);

    expect(resource).toEqual(expectedResource);
  });

  test('should generate the correct resource for characterToysCollectionSummary', () => {
    const expectedResource = {
      namespace: 'profile',
      path: '/profile/wow/character/realm-slug/character-name/collections/toys',
    };

    const resource = characterToysCollectionSummary(realmSlug, characterName);

    expect(resource).toEqual(expectedResource);
  });

  test('should generate the correct resource for characterTransmogCollectionSummary', () => {
    const expectedResource = {
      namespace: 'profile',
      path: '/profile/wow/character/realm-slug/character-name/collections/transmogs',
    };

    const resource = characterTransmogCollectionSummary(realmSlug, characterName);

    expect(resource).toEqual(expectedResource);
  });
});
