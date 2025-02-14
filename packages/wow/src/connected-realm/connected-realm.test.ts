import { describe, it } from 'vitest';
import { searchBase } from '../base';
import { connectedRealm, connectedRealmIndex, connectedRealmSearch } from './connected-realm';

describe.concurrent('connectedRealm', () => {
  it('should return the correct resource for connected realm index', ({ expect }) => {
    const resource = connectedRealmIndex();

    expect(resource.path).toBe('/data/wow/connected-realm/index');
    expect(resource.namespace).toBe('dynamic');
  });

  it('should return the correct resource for a specific connected realm', ({ expect }) => {
    const connectedRealmId = 123;
    const resource = connectedRealm(connectedRealmId);

    expect(resource.path).toBe('/data/wow/connected-realm/123');
    expect(resource.namespace).toBe('dynamic');
  });

  it('should return the correct resource for connected realm search', ({ expect }) => {
    const resource = connectedRealmSearch({ _page: 1 });

    expect(resource.path).toBe(`${searchBase}/connected-realm`);
    expect(resource.namespace).toBe('dynamic');
    expect(resource.parameters).toEqual({ _page: 1 });
  });

  it('connected realm search should return correct resource object when orderby is an array', ({ expect }) => {
    const resource = connectedRealmSearch({
      _page: 1,
      orderby: ['name', 'id'],
    });

    expect(resource.path).toBe(`${searchBase}/connected-realm`);
    expect(resource.namespace).toBe('dynamic');
    expect(resource.parameters).toEqual({
      _page: 1,
      orderby: 'name,id',
    });
  });
});
