import type { BlizzardNamespaces } from '@blizzard-api/core';
import { describe, it } from 'vitest';
import * as classicConnectedRealmApi from '../connected-realm/connected-realm';

const namespace: BlizzardNamespaces = 'dynamic-classic';
const namespace1x: BlizzardNamespaces = 'dynamic-classic1x';

describe.concurrent('classicConnectedRealmApi', () => {
  it('should return the connected realm index', ({ expect }) => {
    const result = classicConnectedRealmApi.connectedRealmIndex(namespace);
    expect(result).toBeDefined();
    expect(result.path).toBe('/data/wow/connected-realm/index');
    expect(result.namespace).toBe(namespace);
  });

  it('should return the connected realm', ({ expect }) => {
    const connectedRealmId = 123;
    const result = classicConnectedRealmApi.connectedRealm(namespace1x, connectedRealmId);
    expect(result).toBeDefined();
    expect(result.path).toBe(`/data/wow/connected-realm/${connectedRealmId}`);
    expect(result.namespace).toBe(namespace1x);
  });

  it('should return the proper search resource when orderby is an array', ({ expect }) => {
    const result = classicConnectedRealmApi.connectedRealmSearch(namespace1x, {
      _page: 1,
      orderby: 'name',
      'status.type': 'UP',
      'realms.timezone': 'America/Chicago',
    });
    expect(result).toBeDefined();
    expect(result.path).toBe('/data/wow/search/connected-realm');
    expect(result.namespace).toBe(namespace1x);
    expect(result.parameters).toEqual({
      _page: 1,
      orderby: 'name',
      'status.type': 'UP',
      'realms.timezone': 'America/Chicago',
    });
  });

  it('should return the proper search resource when orderby is an array', ({ expect }) => {
    const result = classicConnectedRealmApi.connectedRealmSearch(namespace, {
      _page: 1,
      orderby: ['name', 'id'],
      'status.type': 'UP',
      'realms.timezone': 'America/New_York',
    });
    expect(result).toBeDefined();
    expect(result.path).toBe('/data/wow/search/connected-realm');
    expect(result.namespace).toBe(namespace);
    expect(result.parameters).toEqual({
      _page: 1,
      orderby: 'name,id',
      'status.type': 'UP',
      'realms.timezone': 'America/New_York',
    });
  });
});
