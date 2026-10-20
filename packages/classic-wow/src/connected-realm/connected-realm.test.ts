import { describe, expect, test } from 'vitest';
import { connectedRealm, connectedRealmIndex, connectedRealmSearch } from './index';

const namespaces = ['dynamic-classic1x', 'dynamic-classic', 'dynamic-classicann'] as const;

describe('classicConnectedRealmApi', () => {
  test.each(namespaces)(
    'connectedRealmIndex should return the correct resource path in the %s namespace',
    (namespace) => {
      const result = connectedRealmIndex(namespace);
      expect(result).toBeDefined();
      expect(result.path).toBe('/data/wow/connected-realm/index');
      expect(result.namespace).toBe(namespace);
    },
  );

  test.each(namespaces)('connectedRealm should return the correct resource path in the %s namespace', (namespace) => {
    const connectedRealmId = 123;
    const result = connectedRealm(namespace, connectedRealmId);
    expect(result).toBeDefined();
    expect(result.path).toBe(`/data/wow/connected-realm/${connectedRealmId}`);
    expect(result.namespace).toBe(namespace);
  });

  test.each(namespaces)(
    'connectedRealmSearch should return the proper search resource when orderby is an array with a single value in the %s namespace',
    (namespace) => {
      const result = connectedRealmSearch(namespace, {
        _page: 1,
        orderby: 'name',
        'realms.timezone': 'America/Chicago',
        'status.type': 'UP',
      });
      expect(result).toBeDefined();
      expect(result.path).toBe('/data/wow/search/connected-realm');
      expect(result.namespace).toBe(namespace);
      expect(result.parameters).toEqual({
        _page: 1,
        orderby: 'name',
        'realms.timezone': 'America/Chicago',
        'status.type': 'UP',
      });
    },
  );

  test.each(namespaces)(
    'connectedRealmSearch should return the proper search resource when orderby is an array with multiple values in the %s namespace',
    (namespace) => {
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
    },
  );
});
