import { describe, it } from 'vitest';
import { base, searchBase } from '../base';
import { realmApi } from './realm';

describe.concurrent('realmApi', () => {
  it('realm should return a resource object with the correct path and namespace', ({ expect }) => {
    const realmSlug = 'my-realm';
    const resource = realmApi.realm(realmSlug);

    expect(resource.path).toBe(`${base}/realm/${realmSlug}`);
    expect(resource.namespace).toBe('dynamic');
  });

  it('realmIndex should return a resource object with the correct path and namespace', ({ expect }) => {
    const resource = realmApi.realmIndex();

    expect(resource.path).toBe(`${base}/realm/index`);
    expect(resource.namespace).toBe('dynamic');
  });

  it('realmSearch should return a resource object with the correct path and namespace', ({ expect }) => {
    const resource = realmApi.realmSearch({
      _page: 1,
      orderby: 'name',
      timezone: 'Europe/Paris',
    });

    expect(resource.path).toBe(`${searchBase}/realm`);
    expect(resource.namespace).toBe('dynamic');
    expect(resource.parameters).toEqual({
      _page: 1,
      orderby: 'name',
      timezone: 'Europe/Paris',
    });
  });

  it('realmSearch should return correct resource object when orderby is an array', ({ expect }) => {
    const resource = realmApi.realmSearch({
      _page: 1,
      orderby: ['name', 'id'],
      timezone: 'America/Chicago',
    });

    expect(resource.path).toBe(`${searchBase}/realm`);
    expect(resource.namespace).toBe('dynamic');
    expect(resource.parameters).toEqual({
      _page: 1,
      orderby: 'name,id',
      timezone: 'America/Chicago',
    });
  });
});
