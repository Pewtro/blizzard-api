import { wowBasePath } from '@blizzard-api/core';
import { describe, expect, test } from 'vitest';
import {
  quest,
  questArea,
  questAreaIndex,
  questCategory,
  questCategoryIndex,
  questIndex,
  questType,
  questTypeIndex,
} from './index';

describe('questApi', () => {
  test('quest should return a resource object with the correct path and namespace', () => {
    const resource = quest(123);

    expect(resource.path).toBe(`${wowBasePath}/quest/123`);
    expect(resource.namespace).toBe('static-forever');
  });

  test('questArea should return a resource object with the correct path and namespace', () => {
    const resource = questArea(123);

    expect(resource.path).toBe(`${wowBasePath}/quest/area/123`);
    expect(resource.namespace).toBe('static-forever');
  });

  test('questAreaIndex should return a resource object with the correct path and namespace', () => {
    const resource = questAreaIndex();

    expect(resource.path).toBe(`${wowBasePath}/quest/area/index`);
    expect(resource.namespace).toBe('static-forever');
  });

  test('questCategory should return a resource object with the correct path and namespace', () => {
    const resource = questCategory(123);

    expect(resource.path).toBe(`${wowBasePath}/quest/category/123`);
    expect(resource.namespace).toBe('static-forever');
  });

  test('questCategoryIndex should return a resource object with the correct path and namespace', () => {
    const resource = questCategoryIndex();

    expect(resource.path).toBe(`${wowBasePath}/quest/category/index`);
    expect(resource.namespace).toBe('static-forever');
  });

  test('questIndex should return a resource object with the correct path and namespace', () => {
    const resource = questIndex();

    expect(resource.path).toBe(`${wowBasePath}/quest/index`);
    expect(resource.namespace).toBe('static-forever');
  });

  test('questType should return a resource object with the correct path and namespace', () => {
    const resource = questType(123);

    expect(resource.path).toBe(`${wowBasePath}/quest/type/123`);
    expect(resource.namespace).toBe('static-forever');
  });

  test('questTypeIndex should return a resource object with the correct path and namespace', () => {
    const resource = questTypeIndex();

    expect(resource.path).toBe(`${wowBasePath}/quest/type/index`);
    expect(resource.namespace).toBe('static-forever');
  });
});
