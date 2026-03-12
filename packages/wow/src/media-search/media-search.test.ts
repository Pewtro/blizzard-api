import { wowSearchBasePath } from '@blizzard-api/core';
import { describe, test } from 'vitest';
import { mediaSearch } from './media-search';

describe.concurrent('mediaSearchApi', () => {
  test('should return the media search resource', ({ expect }) => {
    const resource = mediaSearch({});
    expect(resource.path).toBe(`${wowSearchBasePath}/media`);
    expect(resource.namespace).toBe('static');
    expect(resource.parameters).toEqual({});
  });

  test('should return the media search resource with parameters', ({ expect }) => {
    const resource = mediaSearch({
      _page: 1,
      orderby: 'name',
      tags: 'tag',
    });
    expect(resource.path).toBe(`${wowSearchBasePath}/media`);
    expect(resource.namespace).toBe('static');
    expect(resource.parameters).toEqual({
      _page: 1,
      orderby: 'name',
      tags: 'tag',
    });
  });

  test('should return the media search resource with parameters when orderby is an array', ({ expect }) => {
    const resource = mediaSearch({
      _page: 1,
      orderby: ['name', 'id'],
      tags: 'tag',
    });
    expect(resource.path).toBe(`${wowSearchBasePath}/media`);
    expect(resource.namespace).toBe('static');
    expect(resource.parameters).toEqual({
      _page: 1,
      orderby: 'name,id',
      tags: 'tag',
    });
  });
});
