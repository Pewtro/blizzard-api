import { wowBasePath } from '@blizzard-api/core';
import { describe, expect, test } from 'vitest';
import {
  mythicKeystonePeriod,
  mythicKeystonePeriodIndex,
  mythicKeystoneSeason,
  mythicKeystoneSeasonIndex,
} from './index';

const namespace = 'dynamic-classic' as const;

describe('classicMythicKeystoneApi', () => {
  test('mythicKeystonePeriod should return a resource object with the correct path and namespace', () => {
    const resource = mythicKeystonePeriod(namespace, 123);

    expect(resource.path).toBe(`${wowBasePath}/mythic-keystone/period/123`);
    expect(resource.namespace).toBe(namespace);
  });

  test('mythicKeystonePeriodIndex should return a resource object with the correct path and namespace', () => {
    const resource = mythicKeystonePeriodIndex(namespace);

    expect(resource.path).toBe(`${wowBasePath}/mythic-keystone/period/index`);
    expect(resource.namespace).toBe(namespace);
  });

  test('mythicKeystoneSeason should return a resource object with the correct path and namespace', () => {
    const resource = mythicKeystoneSeason(namespace, 123);

    expect(resource.path).toBe(`${wowBasePath}/mythic-keystone/season/123`);
    expect(resource.namespace).toBe(namespace);
  });

  test('mythicKeystoneSeasonIndex should return a resource object with the correct path and namespace', () => {
    const resource = mythicKeystoneSeasonIndex(namespace);

    expect(resource.path).toBe(`${wowBasePath}/mythic-keystone/season/index`);
    expect(resource.namespace).toBe(namespace);
  });
});
