import { describe, it, expect } from 'vitest';
import { searchBase } from '../base';
import { mediaSearchApi } from './media-search';

describe('mediaSearchApi', () => {
  it('should return the media search resource', () => {
    const resource = mediaSearchApi.mediaSearch({});
    expect(resource.path).toBe(`${searchBase}/media`);
    expect(resource.namespace).toBe('static');
    expect(resource.parameters).toEqual({});
  });

  it('should return the media search resource with parameters', () => {
    const resource = mediaSearchApi.mediaSearch({
      _page: 1,
      orderby: ['name'],
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
});
