import { wowBasePath, wowSearchBasePath } from '@blizzard-api/core';
import { describe, test } from 'vitest';
import { realm, realmIndex, realmSearch } from './realm';

describe.concurrent('realmApi', () => {
  test('realm should return a resource object with the correct path and namespace', ({ expect }) => {
    const realmSlug = 'my-realm';
    const resource = realm(realmSlug);

    expect(resource.path).toBe(`${wowBasePath}/realm/${realmSlug}`);
    expect(resource.namespace).toBe('dynamic');
  });

  test('realmIndex should return a resource object with the correct path and namespace', ({ expect }) => {
    const resource = realmIndex();

    expect(resource.path).toBe(`${wowBasePath}/realm/index`);
    expect(resource.namespace).toBe('dynamic');
  });

  test('realmSearch should return a resource object with the correct path and namespace', ({ expect }) => {
    const resource = realmSearch({
      _page: 1,
      orderby: 'name',
      timezone: 'Europe/Paris',
    });

    expect(resource.path).toBe(`${wowSearchBasePath}/realm`);
    expect(resource.namespace).toBe('dynamic');
    expect(resource.parameters).toEqual({
      _page: 1,
      orderby: 'name',
      timezone: 'Europe/Paris',
    });
  });

  test('realmSearch should return correct resource object when orderby is an array', ({ expect }) => {
    const resource = realmSearch({
      _page: 1,
      orderby: ['name', 'id'],
      timezone: 'America/Chicago',
    });

    expect(resource.path).toBe(`${wowSearchBasePath}/realm`);
    expect(resource.namespace).toBe('dynamic');
    expect(resource.parameters).toEqual({
      _page: 1,
      orderby: 'name,id',
      timezone: 'America/Chicago',
    });
  });
});
