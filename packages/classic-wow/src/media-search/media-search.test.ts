import { wowSearchBasePath } from '@blizzard-api/core';
import { describe, it } from 'vitest';
import { mediaSearch } from './media-search';

const namespace = 'static-classic';

describe.concurrent('mediaSearchApi', () => {
  it('should return the media search resource', ({ expect }) => {
    const resource = mediaSearch(namespace, {});
    expect(resource.path).toBe(`${wowSearchBasePath}/media`);
    expect(resource.namespace).toBe(namespace);
    expect(resource.parameters).toEqual({});
  });

  it('should return the media search resource with parameters', ({ expect }) => {
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

  it('should return the media search resource with parameters when orderby is an array', ({ expect }) => {
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
  });
});
