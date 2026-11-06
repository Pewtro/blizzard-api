import { wowBasePath, wowMediaBasePath, wowSearchBasePath } from '@blizzard-api/core';
import { describe, expect, test } from 'vitest';
import { item, itemClass, itemClassIndex, itemMedia, itemSearch, itemSet, itemSetIndex, itemSubclass } from './index';

describe('itemApi', () => {
  test('item should return a resource object with the correct path and namespace', () => {
    const resource = item(123);

    expect(resource.path).toBe(`${wowBasePath}/item/123`);
    expect(resource.namespace).toBe('static-forever');
  });

  test('itemClass should return a resource object with the correct path and namespace', () => {
    const resource = itemClass(123);

    expect(resource.path).toBe(`${wowBasePath}/item-class/123`);
    expect(resource.namespace).toBe('static-forever');
  });

  test('itemClassIndex should return a resource object with the correct path and namespace', () => {
    const resource = itemClassIndex();

    expect(resource.path).toBe(`${wowBasePath}/item-class/index`);
    expect(resource.namespace).toBe('static-forever');
  });

  test('itemMedia should return a resource object with the correct path and namespace', () => {
    const resource = itemMedia(123);

    expect(resource.path).toBe(`${wowMediaBasePath}/item/123`);
    expect(resource.namespace).toBe('static-forever');
  });

  test('itemSearch should return a resource object with the correct path and namespace', () => {
    const resource = itemSearch({ _page: 1, locale: 'en_US', name: 'item', orderby: 'name' });

    expect(resource.path).toBe(`${wowSearchBasePath}/item`);
    expect(resource.namespace).toBe('static-forever');
    expect(resource.parameters).toEqual({
      _page: 1,
      'name.en_US': 'item',
      orderby: 'name',
    });
  });

  test('itemSearch should return the correct parameters when orderby is an array', () => {
    const resource = itemSearch({ _page: 1, locale: 'en_US', name: 'item', orderby: ['name', 'id'] });

    expect(resource.path).toBe(`${wowSearchBasePath}/item`);
    expect(resource.parameters).toEqual({
      _page: 1,
      'name.en_US': 'item',
      orderby: 'name,id',
    });
  });

  test('itemSet should return a resource object with the correct path and namespace', () => {
    const resource = itemSet(123);

    expect(resource.path).toBe(`${wowBasePath}/item-set/123`);
    expect(resource.namespace).toBe('static-forever');
  });

  test('itemSetIndex should return a resource object with the correct path and namespace', () => {
    const resource = itemSetIndex();

    expect(resource.path).toBe(`${wowBasePath}/item-set/index`);
    expect(resource.namespace).toBe('static-forever');
  });

  test('itemSubclass should return a resource object with the correct path and namespace', () => {
    const resource = itemSubclass(123, 456);

    expect(resource.path).toBe(`${wowBasePath}/item-class/123/item-subclass/456`);
    expect(resource.namespace).toBe('static-forever');
  });
});
