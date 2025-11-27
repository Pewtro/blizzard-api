import { wowBasePath, wowMediaBasePath, wowSearchBasePath } from '@blizzard-api/core';
import { describe, it } from 'vitest';
import { item, itemClass, itemClassIndex, itemMedia, itemSearch, itemSubClass } from './item';
import type { ItemSearchParameters } from './types';

const namespace = 'static-classic';

describe.concurrent('classicItemApi', () => {
  it('should return the item class index resource', ({ expect }) => {
    const resource = itemClassIndex(namespace);
    expect(resource.path).toBe(`${wowBasePath}/item-class/index`);
    expect(resource.namespace).toBe(namespace);
  });

  it('should return the item class resource for a given itemClassId', ({ expect }) => {
    const itemClassId = 123;
    const resource = itemClass(namespace, itemClassId);
    expect(resource.path).toBe(`${wowBasePath}/item-class/${itemClassId}`);
    expect(resource.namespace).toBe(namespace);
  });

  it('should return the item sub class resource for a given itemClassId and itemSubClassId', ({ expect }) => {
    const itemClassId = 123;
    const itemSubClassId = 456;
    const resource = itemSubClass(namespace, itemClassId, itemSubClassId);
    expect(resource.path).toBe(`${wowBasePath}/item-class/${itemClassId}/item-subclass/${itemSubClassId}`);
    expect(resource.namespace).toBe(namespace);
  });

  it('should return the item resource for a given itemId', ({ expect }) => {
    const itemId = 123;
    const resource = item(namespace, itemId);
    expect(resource.path).toBe(`${wowBasePath}/item/${itemId}`);
    expect(resource.namespace).toBe(namespace);
  });

  it('should return the item media resource for a given itemId', ({ expect }) => {
    const itemId = 123;
    const resource = itemMedia(namespace, itemId);
    expect(resource.path).toBe(`${wowMediaBasePath}/item/${itemId}`);
    expect(resource.namespace).toBe(namespace);
  });

  it('should return the correct path and namespace for itemSearch', ({ expect }) => {
    const options = {
      _page: 1,
      locale: 'en_US',
      name: 'test',
      orderby: 'name',
    } satisfies ItemSearchParameters;
    const resource = itemSearch(namespace, options);
    expect(resource.path).toBe(`${wowSearchBasePath}/item`);
    expect(resource.namespace).toBe(namespace);
    expect(resource.parameters).toEqual({
      _page: 1,
      'name.en_US': 'test',
      orderby: 'name',
    });
  });

  it('should return the correct path and namespace for itemSearch when orderby is an array', ({ expect }) => {
    const options = {
      _page: 1,
      locale: 'en_US',
      name: 'test',
      orderby: ['name', 'id'],
    } satisfies ItemSearchParameters;
    const resource = itemSearch(namespace, options);
    expect(resource.path).toBe(`${wowSearchBasePath}/item`);
    expect(resource.namespace).toBe(namespace);
    expect(resource.parameters).toEqual({
      _page: 1,
      'name.en_US': 'test',
      orderby: 'name,id',
    });
  });
});
