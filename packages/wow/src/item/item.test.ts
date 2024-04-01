import { describe, it, expect } from 'vitest';
import { base, mediaBase } from '../base';
import { itemApi } from './item';

describe('itemApi', () => {
  it('should return the item resource for a given itemId', () => {
    const itemId = 123;
    const resource = itemApi.item(itemId);
    expect(resource.path).toBe(`${base}/item/${itemId}`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the item index resource', () => {
    const resource = itemApi.itemIndex();
    expect(resource.path).toBe(`${base}/item/index`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the item class resource for a given itemClassId', () => {
    const itemClassId = 456;
    const resource = itemApi.itemClass(itemClassId);
    expect(resource.path).toBe(`${base}/item-class/${itemClassId}`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the item class index resource', () => {
    const resource = itemApi.itemClassIndex();
    expect(resource.path).toBe(`${base}/item-class/index`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the item media resource for a given itemId', () => {
    const itemId = 789;
    const resource = itemApi.itemMedia(itemId);
    expect(resource.path).toBe(`${mediaBase}/item/${itemId}`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the item set resource for a given itemSetId', () => {
    const itemSetId = 987;
    const resource = itemApi.itemSet(itemSetId);
    expect(resource.path).toBe(`${base}/item-set/${itemSetId}`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the item set index resource', () => {
    const resource = itemApi.itemSetIndex();
    expect(resource.path).toBe(`${base}/item-set/index`);
    expect(resource.namespace).toBe('static');
  });
});
