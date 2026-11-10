import { wowBasePath, wowSearchBasePath } from '@blizzard-api/core';
import { describe, expect, test } from 'vitest';
import {
  itemAppearance,
  itemAppearanceSearch,
  itemAppearanceSet,
  itemAppearanceSetIndex,
  itemAppearanceSlot,
  itemAppearanceSlotIndex,
} from './index';

describe('itemAppearanceApi', () => {
  test('itemAppearance should return a resource object with the correct path and namespace', () => {
    const resource = itemAppearance(123);

    expect(resource.path).toBe(`${wowBasePath}/item-appearance/123`);
    expect(resource.namespace).toBe('static-forever');
  });

  test('itemAppearanceSearch should return a resource object with the correct path and namespace', () => {
    const resource = itemAppearanceSearch({ _page: 1, id: 123, orderby: ['id', 'slot.type'] });

    expect(resource.path).toBe(`${wowSearchBasePath}/item-appearance`);
    expect(resource.namespace).toBe('static-forever');
    expect(resource.parameters).toEqual({ _page: 1, id: 123, orderby: 'id,slot.type' });
  });

  test('itemAppearanceSet should return a resource object with the correct path and namespace', () => {
    const resource = itemAppearanceSet(123);

    expect(resource.path).toBe(`${wowBasePath}/item-appearance/set/123`);
    expect(resource.namespace).toBe('static-forever');
  });

  test('itemAppearanceSetIndex should return a resource object with the correct path and namespace', () => {
    const resource = itemAppearanceSetIndex();

    expect(resource.path).toBe(`${wowBasePath}/item-appearance/set/index`);
    expect(resource.namespace).toBe('static-forever');
  });

  test('itemAppearanceSlot should return a resource object with the correct path and namespace', () => {
    const resource = itemAppearanceSlot('HEAD');

    expect(resource.path).toBe(`${wowBasePath}/item-appearance/slot/HEAD`);
    expect(resource.namespace).toBe('static-forever');
  });

  test('itemAppearanceSlotIndex should return a resource object with the correct path and namespace', () => {
    const resource = itemAppearanceSlotIndex();

    expect(resource.path).toBe(`${wowBasePath}/item-appearance/slot/index`);
    expect(resource.namespace).toBe('static-forever');
  });
});
