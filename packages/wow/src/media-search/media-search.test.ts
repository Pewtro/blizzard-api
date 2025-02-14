import { describe, it } from 'vitest';
import { searchBase } from '../base';
import { mediaSearch } from './media-search';

describe.concurrent('mediaSearchApi', () => {
  it('should return the media search resource', ({ expect }) => {
    const resource = mediaSearch({});
    expect(resource.path).toBe(`${searchBase}/media`);
    expect(resource.namespace).toBe('static');
    expect(resource.parameters).toEqual({});
  });

  it('should return the media search resource with parameters', ({ expect }) => {
    const resource = mediaSearch({
      _page: 1,
      orderby: 'name',
      tags: 'tag',
    });
    expect(resource.path).toBe(`${searchBase}/media`);
    expect(resource.namespace).toBe('static');
    expect(resource.parameters).toEqual({
      _page: 1,
      orderby: 'name',
      tags: 'tag',
    });
  });

  it('should return the media search resource with parameters when orderby is an array', ({ expect }) => {
    const resource = mediaSearch({
      _page: 1,
      orderby: ['name', 'id'],
      tags: 'tag',
    });
    expect(resource.path).toBe(`${searchBase}/media`);
    expect(resource.namespace).toBe('static');
    expect(resource.parameters).toEqual({
      _page: 1,
      orderby: 'name,id',
      tags: 'tag',
    });
  });
});
