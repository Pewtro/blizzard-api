import { describe, it, expect } from 'vitest';
import { searchBase } from '../base';
import { connectedRealmApi } from './connected-realm';

describe('connectedRealm', () => {
  it('should return the correct resource for connected realm index', () => {
    const resource = connectedRealmApi.connectedRealmIndex();

    expect(resource.path).toBe('/data/wow/connected-realm/index');
    expect(resource.namespace).toBe('dynamic');
  });

  it('should return the correct resource for a specific connected realm', () => {
    const connectedRealmId = 123;
    const resource = connectedRealmApi.connectedRealm(connectedRealmId);

    expect(resource.path).toBe('/data/wow/connected-realm/123');
    expect(resource.namespace).toBe('dynamic');
  });

  it('should return the correct resource for connected realm search', () => {
    const resource = connectedRealmApi.connectedRealmSearch({ _page: 1 });

    expect(resource.path).toBe(`${searchBase}/connected-realm`);
    expect(resource.namespace).toBe('dynamic');
    expect(resource.parameters).toEqual({ _page: 1 });
  });
});
