import { describe, it } from 'vitest';
import { base, mediaBase, searchBase } from '../base';
import * as azeriteEssenceApi from './azerite-essence';

describe.concurrent('azeriteEssenceApi', () => {
  it('should return the correct path and namespace for azeriteEssence', ({ expect }) => {
    const azeriteEssenceId = 123;
    const resource = azeriteEssenceApi.azeriteEssence(azeriteEssenceId);

    expect(resource.path).toBe(`${base}/azerite-essence/123`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the correct path and namespace for azeriteEssenceIndex', ({ expect }) => {
    const resource = azeriteEssenceApi.azeriteEssenceIndex();

    expect(resource.path).toBe(`${base}/azerite-essence/index`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the correct path and namespace for azeriteEssenceMedia', ({ expect }) => {
    const azeriteEssenceId = 123;
    const resource = azeriteEssenceApi.azeriteEssenceMedia(azeriteEssenceId);

    expect(resource.path).toBe(`${mediaBase}/azerite-essence/123`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the correct path and namespace for azeriteEssenceSearch', ({ expect }) => {
    const resource = azeriteEssenceApi.azeriteEssenceSearch({ _page: 1 });

    expect(resource.path).toBe(`${searchBase}/azerite-essence`);
    expect(resource.namespace).toBe('static');
    expect(resource.parameters).toEqual({ _page: 1 });
  });

  it('should return the correct path and namespace for azeriteEssenceSearch with parameters', ({ expect }) => {
    const resource = azeriteEssenceApi.azeriteEssenceSearch({
      _page: 1,
      orderby: 'name',
    });

    expect(resource.path).toBe(`${searchBase}/azerite-essence`);
    expect(resource.namespace).toBe('static');
    expect(resource.parameters).toEqual({
      _page: 1,
      orderby: 'name',
    });
  });

  it('should return the correct path and namespace for azeriteEssenceSearch with multiple orderby values', ({
    expect,
  }) => {
    const resource = azeriteEssenceApi.azeriteEssenceSearch({
      _page: 1,
      orderby: ['name', 'id'],
    });

    expect(resource.path).toBe(`${searchBase}/azerite-essence`);
    expect(resource.namespace).toBe('static');
    expect(resource.parameters).toEqual({
      _page: 1,
      orderby: 'name,id',
    });
  });
});
