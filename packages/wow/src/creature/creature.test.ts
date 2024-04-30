import { describe, it, expect } from 'vitest';
import { base, mediaBase, searchBase } from '../base';
import { creatureApi } from './creature';

describe('creatureApi', () => {
  it('should return the correct path and namespace for creature', () => {
    const creatureId = 123;
    const resource = creatureApi.creature(creatureId);

    expect(resource.path).toBe(`${base}/creature/${creatureId}`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the correct path and namespace for creatureDisplayMedia', () => {
    const creatureDisplayId = 123;
    const resource = creatureApi.creatureDisplayMedia(creatureDisplayId);

    expect(resource.path).toBe(`${mediaBase}/creature-display/${creatureDisplayId}`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the correct path and namespace for creatureFamily', () => {
    const creatureFamilyId = 123;
    const resource = creatureApi.creatureFamily(creatureFamilyId);

    expect(resource.path).toBe(`${base}/creature-family/${creatureFamilyId}`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the correct path and namespace for creatureFamilyIndex', () => {
    const resource = creatureApi.creatureFamilyIndex();

    expect(resource.path).toBe(`${base}/creature-family/index`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the correct path and namespace for creatureFamilyMedia', () => {
    const creatureFamilyId = 123;
    const resource = creatureApi.creatureFamilyMedia(creatureFamilyId);

    expect(resource.path).toBe(`${mediaBase}/creature-family/${creatureFamilyId}`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the correct path and namespace for creatureType', () => {
    const creatureTypeId = 123;
    const resource = creatureApi.creatureType(creatureTypeId);

    expect(resource.path).toBe(`${base}/creature-type/${creatureTypeId}`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the correct path and namespace for creatureTypeIndex', () => {
    const resource = creatureApi.creatureTypeIndex();

    expect(resource.path).toBe(`${base}/creature-type/index`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the correct path and namespace for creatureSearch', () => {
    const resource = creatureApi.creatureSearch({
      _page: 1,
      locale: 'en_US',
      name: 'test',
    });

    expect(resource.path).toBe(`${searchBase}/creature`);
    expect(resource.namespace).toBe('static');
    expect(resource.parameters).toEqual({
      _page: 1,
      'name.en_US': 'test',
    });
  });
});
