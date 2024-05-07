import type { BlizzardNamespaces } from '@blizzard-api/core';
import { describe, it } from 'vitest';
import { connectedRealmApi } from '../connected-realm/connected-realm';

describe.concurrent('connectedRealmApi', () => {
  it('should return the connected realm index', ({ expect }) => {
    const namespace: BlizzardNamespaces = 'dynamic-classic';
    const result = connectedRealmApi.connectedRealmIndex(namespace);
    expect(result).toBeDefined();
    expect(result.path).toBe('/data/wow/connected-realm/index');
    expect(result.namespace).toBe(namespace);
  });

  it('should return the connected realm', ({ expect }) => {
    const namespace: BlizzardNamespaces = 'dynamic-classic1x';
    const connectedRealmId = 123;
    const result = connectedRealmApi.connectedRealm(namespace, connectedRealmId);
    expect(result).toBeDefined();
    expect(result.path).toBe(`/data/wow/connected-realm/${connectedRealmId}`);
    expect(result.namespace).toBe(namespace);
  });

  it('should return the search results', ({ expect }) => {
    const namespace: BlizzardNamespaces = 'dynamic-classic';
    const result = connectedRealmApi.connectedRealmSearch(namespace, {
      _page: 1,
      orderby: ['name'],
      'status.type': 'UP',
      'realms.timezone': 'America/New_York',
    });
    expect(result).toBeDefined();
    expect(result.path).toBe('/data/wow/search/connected-realm');
    expect(result.namespace).toBe(namespace);
    expect(result.parameters).toEqual({
      _page: 1,
      orderby: 'name',
      'status.type': 'UP',
      'realms.timezone': 'America/New_York',
    });
  });
});
