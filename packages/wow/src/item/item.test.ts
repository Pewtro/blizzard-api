import { wowBasePath, wowMediaBasePath, wowSearchBasePath } from '@blizzard-api/core';
import { describe, it } from 'vitest';
import { item, itemClass, itemClassIndex, itemMedia, itemSearch, itemSet, itemSetIndex, itemSubClass } from './item';

describe.concurrent('itemApi', () => {
  it('should return the item resource for a given itemId', ({ expect }) => {
    const itemId = 123;
    const resource = item(itemId);
    expect(resource.path).toBe(`${wowBasePath}/item/${itemId}`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the item class resource for a given itemClassId', ({ expect }) => {
    const itemClassId = 456;
    const resource = itemClass(itemClassId);
    expect(resource.path).toBe(`${wowBasePath}/item-class/${itemClassId}`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the item sub class resource for a given itemClassId and itemSubClassId', ({ expect }) => {
    const itemClassId = 456;
    const itemSubClassId = 789;
    const resource = itemSubClass(itemClassId, itemSubClassId);
    expect(resource.path).toBe(`${wowBasePath}/item-class/${itemClassId}/item-subclass/${itemSubClassId}`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the item class index resource', ({ expect }) => {
    const resource = itemClassIndex();
    expect(resource.path).toBe(`${wowBasePath}/item-class/index`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the item media resource for a given itemId', ({ expect }) => {
    const itemId = 789;
    const resource = itemMedia(itemId);
    expect(resource.path).toBe(`${wowMediaBasePath}/item/${itemId}`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the item set resource for a given itemSetId', ({ expect }) => {
    const itemSetId = 987;
    const resource = itemSet(itemSetId);
    expect(resource.path).toBe(`${wowBasePath}/item-set/${itemSetId}`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the item set index resource', ({ expect }) => {
    const resource = itemSetIndex();
    expect(resource.path).toBe(`${wowBasePath}/item-set/index`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the correct path and namespace for itemSearch', ({ expect }) => {
    const resource = itemSearch({
      _page: 1,
      locale: 'en_US',
      name: 'test',
      orderby: 'name',
    });

    expect(resource.path).toBe(`${wowSearchBasePath}/item`);
    expect(resource.namespace).toBe('static');
    expect(resource.parameters).toEqual({
      _page: 1,
      'name.en_US': 'test',
      orderby: 'name',
    });
  });

  it('should return the correct path and namespace for itemSearch when orderby is an array', ({ expect }) => {
    const resource = itemSearch({
      _page: 1,
      locale: 'en_US',
      name: 'test',
      orderby: ['name', 'id'],
    });

    expect(resource.path).toBe(`${wowSearchBasePath}/item`);
    expect(resource.namespace).toBe('static');
    expect(resource.parameters).toEqual({
      _page: 1,
      'name.en_US': 'test',
      orderby: 'name,id',
    });
  });
});
