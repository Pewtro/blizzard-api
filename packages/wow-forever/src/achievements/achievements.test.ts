import { wowBasePath, wowMediaBasePath } from '@blizzard-api/core';
import { describe, expect, test } from 'vitest';
import {
  achievement,
  achievementCategory,
  achievementCategoryIndex,
  achievementIndex,
  achievementMedia,
} from './index';

describe('achievementsApi', () => {
  const achievementId = 123;
  const achievementCategoryId = 456;

  test('achievement should return a resource object with the correct path and namespace', () => {
    const resource = achievement(achievementId);

    expect(resource.path).toBe(`${wowBasePath}/achievement/123`);
    expect(resource.namespace).toBe('static-forever');
  });

  test('achievementCategory should return a resource object with the correct path and namespace', () => {
    const resource = achievementCategory(achievementCategoryId);

    expect(resource.path).toBe(`${wowBasePath}/achievement-category/456`);
    expect(resource.namespace).toBe('static-forever');
  });

  test('achievementCategoryIndex should return a resource object with the correct path and namespace', () => {
    const resource = achievementCategoryIndex();

    expect(resource.path).toBe(`${wowBasePath}/achievement-category/index`);
    expect(resource.namespace).toBe('static-forever');
  });

  test('achievementIndex should return a resource object with the correct path and namespace', () => {
    const resource = achievementIndex();

    expect(resource.path).toBe(`${wowBasePath}/achievement/index`);
    expect(resource.namespace).toBe('static-forever');
  });

  test('achievementMedia should return a resource object with the correct path and namespace', () => {
    const resource = achievementMedia(achievementId);

    expect(resource.path).toBe(`${wowMediaBasePath}/achievement/123`);
    expect(resource.namespace).toBe('static-forever');
  });
});
