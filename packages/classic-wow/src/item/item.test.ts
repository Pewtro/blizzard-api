import { describe, it } from 'vitest';
import { base, mediaBase, searchBase } from '../../../wow/src/base';
import { classicItemApi } from './item';
import type { ItemSearchParameters } from './types';

const namespace = 'static-classic';

describe.concurrent('classicItemApi', () => {
  it('should return the item class index resource', ({ expect }) => {
    const resource = classicItemApi.itemClassIndex(namespace);
    expect(resource.path).toBe(`${base}/item-class/index`);
    expect(resource.namespace).toBe(namespace);
  });

  it('should return the item class resource for a given itemClassId', ({ expect }) => {
    const itemClassId = 123;
    const resource = classicItemApi.itemClass(namespace, itemClassId);
    expect(resource.path).toBe(`${base}/item-class/${itemClassId}`);
    expect(resource.namespace).toBe(namespace);
  });

  it('should return the item sub class resource for a given itemClassId and itemSubClassId', ({ expect }) => {
    const itemClassId = 123;
    const itemSubClassId = 456;
    const resource = classicItemApi.itemSubClass(namespace, itemClassId, itemSubClassId);
    expect(resource.path).toBe(`${base}/item-class/${itemClassId}/item-subclass/${itemSubClassId}`);
    expect(resource.namespace).toBe(namespace);
  });

  it('should return the item resource for a given itemId', ({ expect }) => {
    const itemId = 123;
    const resource = classicItemApi.item(namespace, itemId);
    expect(resource.path).toBe(`${base}/item/${itemId}`);
    expect(resource.namespace).toBe(namespace);
  });

  it('should return the item media resource for a given itemId', ({ expect }) => {
    const itemId = 123;
    const resource = classicItemApi.itemMedia(namespace, itemId);
    expect(resource.path).toBe(`${mediaBase}/item/${itemId}`);
    expect(resource.namespace).toBe(namespace);
  });

  it('should return the correct path and namespace for itemSearch', ({ expect }) => {
    const options = {
      _page: 1,
      locale: 'en_US',
      name: 'test',
      orderby: 'name',
    } satisfies ItemSearchParameters;
    const resource = classicItemApi.itemSearch(namespace, options);
    expect(resource.path).toBe(`${searchBase}/item`);
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
    const resource = classicItemApi.itemSearch(namespace, options);
    expect(resource.path).toBe(`${searchBase}/item`);
    expect(resource.namespace).toBe(namespace);
    expect(resource.parameters).toEqual({
      _page: 1,
      'name.en_US': 'test',
      orderby: 'name,id',
    });
  });
});
