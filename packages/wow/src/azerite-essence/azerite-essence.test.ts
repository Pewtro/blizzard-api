import { describe, it, expect } from 'vitest';
import { base, mediaBase, searchBase } from '../base';
import { azeriteEssenceApi } from './azerite-essence';

describe('azeriteEssenceApi', () => {
  it('should return the correct path and namespace for azeriteEssence', () => {
    const azeriteEssenceId = 123;
    const resource = azeriteEssenceApi.azeriteEssence(azeriteEssenceId);

    expect(resource.path).toBe(`${base}/azerite-essence/123`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the correct path and namespace for azeriteEssenceIndex', () => {
    const resource = azeriteEssenceApi.azeriteEssenceIndex();

    expect(resource.path).toBe(`${base}/azerite-essence/index`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the correct path and namespace for azeriteEssenceMedia', () => {
    const azeriteEssenceId = 123;
    const resource = azeriteEssenceApi.azeriteEssenceMedia(azeriteEssenceId);

    expect(resource.path).toBe(`${mediaBase}/azerite-essence/123`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the correct path and namespace for azeriteEssenceSearch', () => {
    const resource = azeriteEssenceApi.azeriteEssenceSearch({ _page: 1 });

    expect(resource.path).toBe(`${searchBase}/azerite-essence`);
    expect(resource.namespace).toBe('static');
    expect(resource.parameters).toEqual({ _page: 1 });
  });
});
