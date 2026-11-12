import { describe, expect, test } from 'vitest';
import {
  accountCollectionsIndex,
  accountHeirloomsCollectionSummary,
  accountMountsCollectionSummary,
  accountPetsCollectionSummary,
  accountProfileSummary,
  accountToysCollectionSummary,
  accountTransmogsCollectionSummary,
} from './index';

describe('accountProfileApi', () => {
  test.each([
    [accountCollectionsIndex, '/profile/user/wow/collections'],
    [accountHeirloomsCollectionSummary, '/profile/user/wow/collections/heirlooms'],
    [accountMountsCollectionSummary, '/profile/user/wow/collections/mounts'],
    [accountPetsCollectionSummary, '/profile/user/wow/collections/pets'],
    [accountToysCollectionSummary, '/profile/user/wow/collections/toys'],
  ])('%o should return a resource object with the correct path, namespace and token', (func, path) => {
    const resource = func('token');

    expect(resource.path).toBe(path);
    expect(resource.namespace).toBe('profile-forever');
    expect(resource.token).toBe('token');
  });

  test('accountProfileSummary should return a resource object with the correct path, namespace and token', () => {
    const resource = accountProfileSummary('token');

    expect(resource.path).toBe('/profile/user/wow');
    expect(resource.namespace).toBe('profile-forever');
    expect(resource.token).toBe('token');
  });

  test('accountProfileSummary should allow the token to come from a user-scoped client', () => {
    const resource = accountProfileSummary();

    expect(resource.path).toBe('/profile/user/wow');
    expect(resource.namespace).toBe('profile-forever');
    expect(resource.token).toBeUndefined();
  });

  test('accountTransmogsCollectionSummary should return a resource object with the correct path, namespace and token', () => {
    const resource = accountTransmogsCollectionSummary('token');

    expect(resource.path).toBe('/profile/user/wow/collections/transmogs');
    expect(resource.namespace).toBe('profile-forever');
    expect(resource.token).toBe('token');
  });
});
