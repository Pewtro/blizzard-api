import { describe, it } from 'vitest';
import { base, mediaBase, searchBase } from '../base';
import { itemApi } from './item';

describe.concurrent('itemApi', () => {
  it('should return the item resource for a given itemId', ({ expect }) => {
    const itemId = 123;
    const resource = itemApi.item(itemId);
    expect(resource.path).toBe(`${base}/item/${itemId}`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the item class resource for a given itemClassId', ({ expect }) => {
    const itemClassId = 456;
    const resource = itemApi.itemClass(itemClassId);
    expect(resource.path).toBe(`${base}/item-class/${itemClassId}`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the item class index resource', ({ expect }) => {
    const resource = itemApi.itemClassIndex();
    expect(resource.path).toBe(`${base}/item-class/index`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the item media resource for a given itemId', ({ expect }) => {
    const itemId = 789;
    const resource = itemApi.itemMedia(itemId);
    expect(resource.path).toBe(`${mediaBase}/item/${itemId}`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the item set resource for a given itemSetId', ({ expect }) => {
    const itemSetId = 987;
    const resource = itemApi.itemSet(itemSetId);
    expect(resource.path).toBe(`${base}/item-set/${itemSetId}`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the item set index resource', ({ expect }) => {
    const resource = itemApi.itemSetIndex();
    expect(resource.path).toBe(`${base}/item-set/index`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the correct path and namespace for creatureSearch', ({ expect }) => {
    const resource = itemApi.itemSearch({
      _page: 1,
      locale: 'en_US',
      name: 'test',
    });

    expect(resource.path).toBe(`${searchBase}/item`);
    expect(resource.namespace).toBe('static');
    expect(resource.parameters).toEqual({
      _page: 1,
      'name.en_US': 'test',
    });
  });
});
