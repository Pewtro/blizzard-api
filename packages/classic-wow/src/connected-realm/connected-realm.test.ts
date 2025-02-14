import type { BlizzardNamespaces } from '@blizzard-api/core';
import { describe, it } from 'vitest';
import { connectedRealm, connectedRealmIndex, connectedRealmSearch } from '../connected-realm/connected-realm';

const namespace: BlizzardNamespaces = 'dynamic-classic';
const namespace1x: BlizzardNamespaces = 'dynamic-classic1x';

describe.concurrent('classicConnectedRealmApi', () => {
  it('should return the connected realm index', ({ expect }) => {
    const result = connectedRealmIndex(namespace);
    expect(result).toBeDefined();
    expect(result.path).toBe('/data/wow/connected-realm/index');
    expect(result.namespace).toBe(namespace);
  });

  it('should return the connected realm', ({ expect }) => {
    const connectedRealmId = 123;
    const result = connectedRealm(namespace1x, connectedRealmId);
    expect(result).toBeDefined();
    expect(result.path).toBe(`/data/wow/connected-realm/${connectedRealmId}`);
    expect(result.namespace).toBe(namespace1x);
  });

  it('should return the proper search resource when orderby is an array', ({ expect }) => {
    const result = connectedRealmSearch(namespace1x, {
      _page: 1,
      orderby: 'name',
      'realms.timezone': 'America/Chicago',
      'status.type': 'UP',
    });
    expect(result).toBeDefined();
    expect(result.path).toBe('/data/wow/search/connected-realm');
    expect(result.namespace).toBe(namespace1x);
    expect(result.parameters).toEqual({
      _page: 1,
      orderby: 'name',
      'realms.timezone': 'America/Chicago',
      'status.type': 'UP',
    });
  });

  it('should return the proper search resource when orderby is an array', ({ expect }) => {
    const result = connectedRealmSearch(namespace, {
      _page: 1,
      orderby: ['name', 'id'],
      'realms.timezone': 'America/New_York',
      'status.type': 'UP',
    });
    expect(result).toBeDefined();
    expect(result.path).toBe('/data/wow/search/connected-realm');
    expect(result.namespace).toBe(namespace);
    expect(result.parameters).toEqual({
      _page: 1,
      orderby: 'name,id',
      'realms.timezone': 'America/New_York',
      'status.type': 'UP',
    });
  });
});
