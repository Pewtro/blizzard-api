import { describe, it } from 'vitest';
import { base } from '../base';
import * as questApi from './quest';

describe.concurrent('questApi', () => {
  it('quest should return a resource object with the correct path and namespace', ({ expect }) => {
    const questId = 123;
    const resource = questApi.quest(questId);

    expect(resource.path).toBe(`${base}/quest/${questId}`);
    expect(resource.namespace).toBe('static');
  });

  it('questIndex should return a resource object with the correct path and namespace', ({ expect }) => {
    const resource = questApi.questIndex();

    expect(resource.path).toBe(`${base}/quest/index`);
    expect(resource.namespace).toBe('static');
  });

  it('questArea should return a resource object with the correct path and namespace', ({ expect }) => {
    const questAreaId = 456;
    const resource = questApi.questArea(questAreaId);

    expect(resource.path).toBe(`${base}/quest/area/${questAreaId}`);
    expect(resource.namespace).toBe('static');
  });

  it('questAreaIndex should return a resource object with the correct path and namespace', ({ expect }) => {
    const resource = questApi.questAreaIndex();

    expect(resource.path).toBe(`${base}/quest/area/index`);
    expect(resource.namespace).toBe('static');
  });

  it('questCategory should return a resource object with the correct path and namespace', ({ expect }) => {
    const questCategoryId = 789;
    const resource = questApi.questCategory(questCategoryId);

    expect(resource.path).toBe(`${base}/quest/category/${questCategoryId}`);
    expect(resource.namespace).toBe('static');
  });

  it('questCategoryIndex should return a resource object with the correct path and namespace', ({ expect }) => {
    const resource = questApi.questCategoryIndex();

    expect(resource.path).toBe(`${base}/quest/category/index`);
    expect(resource.namespace).toBe('static');
  });

  it('questType should return a resource object with the correct path and namespace', ({ expect }) => {
    const questTypeId = 987;
    const resource = questApi.questType(questTypeId);

    expect(resource.path).toBe(`${base}/quest/type/${questTypeId}`);
    expect(resource.namespace).toBe('static');
  });

  it('questTypeIndex should return a resource object with the correct path and namespace', ({ expect }) => {
    const resource = questApi.questTypeIndex();

    expect(resource.path).toBe(`${base}/quest/type/index`);
    expect(resource.namespace).toBe('static');
  });
});
