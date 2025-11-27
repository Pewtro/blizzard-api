import { wowBasePath, wowSearchBasePath } from '@blizzard-api/core';
import { describe, it } from 'vitest';
import { realm, realmIndex, realmSearch } from './realm';
import type { RealmSearchParameters } from './types';

const namespace = 'dynamic-classic';

describe.concurrent('classicRealmApi', () => {
  it('should return appropriate realm resource', ({ expect }) => {
    const realmSlug = 'test-realm';

    const result = realm(namespace, realmSlug);

    expect(result).toEqual({
      namespace,
      path: `${wowBasePath}/realm/test-realm`,
    });
  });

  it('should return appropriate realm index resource', ({ expect }) => {
    const result = realmIndex(namespace);

    expect(result).toEqual({
      namespace,
      path: `${wowBasePath}/realm/index`,
    });
  });

  it('should return appropriate realm search when orderby is a single string', ({ expect }) => {
    const options = {
      _page: 1,
      orderby: 'name',
      timezone: 'Europe/Paris',
    } satisfies RealmSearchParameters;

    const result = realmSearch(namespace, options);

    expect(result).toEqual({
      namespace,
      parameters: {
        _page: 1,
        orderby: 'name',
        timezone: options.timezone,
      },
      path: `${wowSearchBasePath}/realm`,
    });
  });

  it('should return appropriate realm search when orderby is an array', ({ expect }) => {
    const options = {
      _page: 1,
      orderby: ['name', 'population'],
      timezone: 'America/Chicago',
    } satisfies RealmSearchParameters;

    const result = realmSearch(namespace, options);

    expect(result).toEqual({
      namespace,
      parameters: {
        _page: 1,
        orderby: 'name,population',
        timezone: options.timezone,
      },
      path: `${wowSearchBasePath}/realm`,
    });
  });
});
