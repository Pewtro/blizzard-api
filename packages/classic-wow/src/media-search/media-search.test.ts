import { wowSearchBasePath } from '@blizzard-api/core';
import { describe, expect, test } from 'vitest';
import { mediaSearch } from './index';

const namespaces = ['static-classic1x', 'static-classic', 'static-classicann'] as const;

describe('mediaSearchApi', () => {
  test.each(namespaces)('should return the media search resource in the %s namespace', (namespace) => {
    const resource = mediaSearch(namespace, {});
    expect(resource.path).toBe(`${wowSearchBasePath}/media`);
    expect(resource.namespace).toBe(namespace);
    expect(resource.parameters).toEqual({});
  });

  test.each(namespaces)('should return the media search resource with parameters in the %s namespace', (namespace) => {
    const resource = mediaSearch(namespace, {
      _page: 1,
      orderby: 'name',
      tags: 'tag',
    });
    expect(resource.path).toBe(`${wowSearchBasePath}/media`);
    expect(resource.namespace).toBe(namespace);
    expect(resource.parameters).toEqual({
      _page: 1,
      orderby: 'name',
      tags: 'tag',
    });
  });

  test.each(namespaces)(
    'should return the media search resource with parameters when orderby is an array in the %s namespace',
    (namespace) => {
      const resource = mediaSearch(namespace, {
        _page: 1,
        orderby: ['name', 'id'],
        tags: 'tag',
      });
      expect(resource.path).toBe(`${wowSearchBasePath}/media`);
      expect(resource.namespace).toBe(namespace);
      expect(resource.parameters).toEqual({
        _page: 1,
        orderby: 'name,id',
        tags: 'tag',
      });
    },
  );
});
