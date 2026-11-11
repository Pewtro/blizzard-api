import { describe, expect, test } from 'vitest';
import { accountProfileSummary, accountTransmogsCollectionSummary } from './index';

describe('accountProfileApi', () => {
  test('accountProfileSummary should return a resource object with the correct path, namespace and token', () => {
    const resource = accountProfileSummary('token');

    expect(resource.path).toBe('/profile/user/wow');
    expect(resource.namespace).toBe('profile-forever');
    expect(resource.token).toBe('token');
  });

  test('accountTransmogsCollectionSummary should return a resource object with the correct path, namespace and token', () => {
    const resource = accountTransmogsCollectionSummary('token');

    expect(resource.path).toBe('/profile/user/wow/collections/transmogs');
    expect(resource.namespace).toBe('profile-forever');
    expect(resource.token).toBe('token');
  });
});
