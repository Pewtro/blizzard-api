import { describe, expect, test } from 'vitest';
import {
  accountCollectionsIndex,
  accountHeirloomsCollectionSummary,
  accountMountsCollectionSummary,
  accountPetsCollectionSummary,
  accountProfileSummary,
  accountToysCollectionSummary,
  accountTransmogsCollectionSummary,
  protectedCharacterProfileSummary,
} from './account-profile';

describe('Account Profile', () => {
  const token = 'your_token_here';
  const realmId = 1;
  const characterId = 2;

  test('should return account profile summary', () => {
    const result = accountProfileSummary(token);
    expect(result.namespace).toBe('profile');
    expect(result.path).toBe('/profile/user/wow');
    expect(result.token).toBe(token);
  });

  test('should return protected character profile summary', () => {
    const result = protectedCharacterProfileSummary(realmId, characterId, token);
    expect(result.namespace).toBe('profile');
    expect(result.path).toBe('/profile/user/wow/protected-character/1-2');
    expect(result.token).toBe(token);
  });

  test('should return account collections index', () => {
    const result = accountCollectionsIndex(token);
    expect(result.namespace).toBe('profile');
    expect(result.path).toBe('/profile/user/wow/collections');
    expect(result.token).toBe(token);
  });

  test('should return account heirlooms collection summary', () => {
    const result = accountHeirloomsCollectionSummary(token);
    expect(result.namespace).toBe('profile');
    expect(result.path).toBe('/profile/user/wow/collections/heirlooms');
    expect(result.token).toBe(token);
  });

  test('should return account mounts collection summary', () => {
    const result = accountMountsCollectionSummary(token);
    expect(result.namespace).toBe('profile');
    expect(result.path).toBe('/profile/user/wow/collections/mounts');
    expect(result.token).toBe(token);
  });

  test('should return account pets collection summary', () => {
    const result = accountPetsCollectionSummary(token);
    expect(result.namespace).toBe('profile');
    expect(result.path).toBe('/profile/user/wow/collections/pets');
    expect(result.token).toBe(token);
  });

  test('should return account toys collection summary', () => {
    const result = accountToysCollectionSummary(token);
    expect(result.namespace).toBe('profile');
    expect(result.path).toBe('/profile/user/wow/collections/toys');
    expect(result.token).toBe(token);
  });

  test('should return account transmogs collection summary', () => {
    const result = accountTransmogsCollectionSummary(token);
    expect(result.namespace).toBe('profile');
    expect(result.path).toBe('/profile/user/wow/collections/transmogs');
    expect(result.token).toBe(token);
  });
});
