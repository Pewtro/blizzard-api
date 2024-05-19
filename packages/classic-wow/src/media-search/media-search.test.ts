import { describe, it } from 'vitest';
import { searchBase } from '../../../wow/src/base';
import * as classicMediaSearchApi from './media-search';

const namespace = 'static-classic';

describe.concurrent('mediaSearchApi', () => {
  it('should return the media search resource', ({ expect }) => {
    const resource = classicMediaSearchApi.mediaSearch(namespace, {});
    expect(resource.path).toBe(`${searchBase}/media`);
    expect(resource.namespace).toBe(namespace);
    expect(resource.parameters).toEqual({});
  });

  it('should return the media search resource with parameters', ({ expect }) => {
    const resource = classicMediaSearchApi.mediaSearch(namespace, {
      _page: 1,
      orderby: 'name',
      tags: 'tag',
    });
    expect(resource.path).toBe(`${searchBase}/media`);
    expect(resource.namespace).toBe(namespace);
    expect(resource.parameters).toEqual({
      _page: 1,
      orderby: 'name',
      tags: 'tag',
    });
  });

  it('should return the media search resource with parameters when orderby is an array', ({ expect }) => {
    const resource = classicMediaSearchApi.mediaSearch(namespace, {
      _page: 1,
      orderby: ['name', 'id'],
      tags: 'tag',
    });
    expect(resource.path).toBe(`${searchBase}/media`);
    expect(resource.namespace).toBe(namespace);
    expect(resource.parameters).toEqual({
      _page: 1,
      orderby: 'name,id',
      tags: 'tag',
    });
  });
});
