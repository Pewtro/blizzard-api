import { wowBasePath } from '@blizzard-api/core';
import { describe, test } from 'vitest';
import {
  quest,
  questArea,
  questAreaIndex,
  questCategory,
  questCategoryIndex,
  questIndex,
  questType,
  questTypeIndex,
} from './quest';

describe.concurrent('questApi', () => {
  test('quest should return a resource object with the correct path and namespace', ({ expect }) => {
    const questId = 123;
    const resource = quest(questId);

    expect(resource.path).toBe(`${wowBasePath}/quest/${questId}`);
    expect(resource.namespace).toBe('static');
  });

  test('questIndex should return a resource object with the correct path and namespace', ({ expect }) => {
    const resource = questIndex();

    expect(resource.path).toBe(`${wowBasePath}/quest/index`);
    expect(resource.namespace).toBe('static');
  });

  test('questArea should return a resource object with the correct path and namespace', ({ expect }) => {
    const questAreaId = 456;
    const resource = questArea(questAreaId);

    expect(resource.path).toBe(`${wowBasePath}/quest/area/${questAreaId}`);
    expect(resource.namespace).toBe('static');
  });

  test('questAreaIndex should return a resource object with the correct path and namespace', ({ expect }) => {
    const resource = questAreaIndex();

    expect(resource.path).toBe(`${wowBasePath}/quest/area/index`);
    expect(resource.namespace).toBe('static');
  });

  test('questCategory should return a resource object with the correct path and namespace', ({ expect }) => {
    const questCategoryId = 789;
    const resource = questCategory(questCategoryId);

    expect(resource.path).toBe(`${wowBasePath}/quest/category/${questCategoryId}`);
    expect(resource.namespace).toBe('static');
  });

  test('questCategoryIndex should return a resource object with the correct path and namespace', ({ expect }) => {
    const resource = questCategoryIndex();

    expect(resource.path).toBe(`${wowBasePath}/quest/category/index`);
    expect(resource.namespace).toBe('static');
  });

  test('questType should return a resource object with the correct path and namespace', ({ expect }) => {
    const questTypeId = 987;
    const resource = questType(questTypeId);

    expect(resource.path).toBe(`${wowBasePath}/quest/type/${questTypeId}`);
    expect(resource.namespace).toBe('static');
  });

  test('questTypeIndex should return a resource object with the correct path and namespace', ({ expect }) => {
    const resource = questTypeIndex();

    expect(resource.path).toBe(`${wowBasePath}/quest/type/index`);
    expect(resource.namespace).toBe('static');
  });
});
