import { wowBasePath, wowSearchBasePath } from '@blizzard-api/core';
import { describe, expect, test } from 'vitest';
import type { RealmSearchParameters } from './types';
import { realm, realmIndex, realmSearch } from './index';

const namespaces = ['dynamic-classic1x', 'dynamic-classic', 'dynamic-classicann'] as const;

describe('classicRealmApi', () => {
  test.each(namespaces)('should return appropriate realm resource in the %s namespace', (namespace) => {
    const realmSlug = 'test-realm';

    const result = realm(namespace, realmSlug);

    expect(result).toEqual({
      namespace,
      path: `${wowBasePath}/realm/test-realm`,
    });
  });

  test.each(namespaces)('should return appropriate realm index resource in the %s namespace', (namespace) => {
    const result = realmIndex(namespace);

    expect(result).toEqual({
      namespace,
      path: `${wowBasePath}/realm/index`,
    });
  });

  test.each(namespaces)(
    'should return appropriate realm search when orderby is a single string in the %s namespace',
    (namespace) => {
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
    },
  );

  test.each(namespaces)(
    'should return appropriate realm search when orderby is an array in the %s namespace',
    (namespace) => {
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
    },
  );
});
