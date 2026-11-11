import { describe, expect, test } from 'vitest';
import {
  characterCollectionsIndex,
  characterHeirloomsCollectionSummary,
  characterMountsCollectionSummary,
  characterPetsCollectionSummary,
  characterToysCollectionSummary,
  characterTransmogCollectionSummary,
} from './index';

describe('characterCollectionsApi', () => {
  test('characterCollectionsIndex should return a resource object with the correct path and namespace', () => {
    const resource = characterCollectionsIndex('Putrofessor', 'Putricide');

    expect(resource.path).toBe('/profile/wow/character/putrofessor-putricide/collections');
    expect(resource.namespace).toBe('profile-forever');
  });

  test('characterHeirloomsCollectionSummary should return a resource object with the correct path and namespace', () => {
    const resource = characterHeirloomsCollectionSummary('Putrofessor', 'Putricide');

    expect(resource.path).toBe('/profile/wow/character/putrofessor-putricide/collections/heirlooms');
    expect(resource.namespace).toBe('profile-forever');
  });

  test('characterMountsCollectionSummary should return a resource object with the correct path and namespace', () => {
    const resource = characterMountsCollectionSummary('Putrofessor', 'Putricide');

    expect(resource.path).toBe('/profile/wow/character/putrofessor-putricide/collections/mounts');
    expect(resource.namespace).toBe('profile-forever');
  });

  test('characterPetsCollectionSummary should return a resource object with the correct path and namespace', () => {
    const resource = characterPetsCollectionSummary('Putrofessor', 'Putricide');

    expect(resource.path).toBe('/profile/wow/character/putrofessor-putricide/collections/pets');
    expect(resource.namespace).toBe('profile-forever');
  });

  test('characterToysCollectionSummary should return a resource object with the correct path and namespace', () => {
    const resource = characterToysCollectionSummary('Putrofessor', 'Putricide');

    expect(resource.path).toBe('/profile/wow/character/putrofessor-putricide/collections/toys');
    expect(resource.namespace).toBe('profile-forever');
  });

  test('characterTransmogCollectionSummary should return a resource object with the correct path and namespace', () => {
    const resource = characterTransmogCollectionSummary('Putrofessor', 'Putricide');

    expect(resource.path).toBe('/profile/wow/character/putrofessor-putricide/collections/transmogs');
    expect(resource.namespace).toBe('profile-forever');
  });
});
