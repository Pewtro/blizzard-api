import { wowBasePath, wowMediaBasePath } from '@blizzard-api/core';
import { describe, expect, test } from 'vitest';
import {
  achievement,
  achievementCategory,
  achievementCategoryIndex,
  achievementIndex,
  achievementMedia,
} from './index';

const namespaces = ['static-classic1x', 'static-classic', 'static-classicann'] as const;

describe('classicAchievementsApi', () => {
  test.each(namespaces)('achievement should return the correct resource in the %s namespace', (namespace) => {
    const resource = achievement(namespace, 123);

    expect(resource.path).toBe(`${wowBasePath}/achievement/123`);
    expect(resource.namespace).toBe(namespace);
  });

  test.each(namespaces)('achievementIndex should return the correct resource in the %s namespace', (namespace) => {
    const resource = achievementIndex(namespace);

    expect(resource.path).toBe(`${wowBasePath}/achievement/index`);
    expect(resource.namespace).toBe(namespace);
  });

  test.each(namespaces)('achievementCategory should return the correct resource in the %s namespace', (namespace) => {
    const resource = achievementCategory(namespace, 123);

    expect(resource.path).toBe(`${wowBasePath}/achievement-category/123`);
    expect(resource.namespace).toBe(namespace);
  });

  test.each(namespaces)(
    'achievementCategoryIndex should return the correct resource in the %s namespace',
    (namespace) => {
      const resource = achievementCategoryIndex(namespace);

      expect(resource.path).toBe(`${wowBasePath}/achievement-category/index`);
      expect(resource.namespace).toBe(namespace);
    },
  );

  test.each(namespaces)('achievementMedia should return the correct resource in the %s namespace', (namespace) => {
    const resource = achievementMedia(namespace, 123);

    expect(resource.path).toBe(`${wowMediaBasePath}/achievement/123`);
    expect(resource.namespace).toBe(namespace);
  });
});
