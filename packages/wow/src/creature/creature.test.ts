import { describe, it } from 'vitest';
import { base, mediaBase, searchBase } from '../base';
import {
  creature,
  creatureDisplayMedia,
  creatureFamily,
  creatureFamilyIndex,
  creatureFamilyMedia,
  creatureSearch,
  creatureType,
  creatureTypeIndex,
} from './creature';

describe.concurrent('creatureApi', () => {
  it('should return the correct path and namespace for creature', ({ expect }) => {
    const creatureId = 123;
    const resource = creature(creatureId);

    expect(resource.path).toBe(`${base}/creature/${creatureId}`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the correct path and namespace for creatureDisplayMedia', ({ expect }) => {
    const creatureDisplayId = 123;
    const resource = creatureDisplayMedia(creatureDisplayId);

    expect(resource.path).toBe(`${mediaBase}/creature-display/${creatureDisplayId}`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the correct path and namespace for creatureFamily', ({ expect }) => {
    const creatureFamilyId = 123;
    const resource = creatureFamily(creatureFamilyId);

    expect(resource.path).toBe(`${base}/creature-family/${creatureFamilyId}`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the correct path and namespace for creatureFamilyIndex', ({ expect }) => {
    const resource = creatureFamilyIndex();

    expect(resource.path).toBe(`${base}/creature-family/index`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the correct path and namespace for creatureFamilyMedia', ({ expect }) => {
    const creatureFamilyId = 123;
    const resource = creatureFamilyMedia(creatureFamilyId);

    expect(resource.path).toBe(`${mediaBase}/creature-family/${creatureFamilyId}`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the correct path and namespace for creatureType', ({ expect }) => {
    const creatureTypeId = 123;
    const resource = creatureType(creatureTypeId);

    expect(resource.path).toBe(`${base}/creature-type/${creatureTypeId}`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the correct path and namespace for creatureTypeIndex', ({ expect }) => {
    const resource = creatureTypeIndex();

    expect(resource.path).toBe(`${base}/creature-type/index`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the correct path and namespace for creatureSearch', ({ expect }) => {
    const resource = creatureSearch({
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

  it('should return the correct path and namespace for creatureSearch when orderby is an array', ({ expect }) => {
    const resource = creatureSearch({
      _page: 1,
      locale: 'en_US',
      name: 'test',
      orderby: ['name', 'id'],
    });

    expect(resource.path).toBe(`${searchBase}/creature`);
    expect(resource.namespace).toBe('static');
    expect(resource.parameters).toEqual({
      _page: 1,
      'name.en_US': 'test',
      orderby: 'name,id',
    });
  });
});
