import { wowBasePath, wowMediaBasePath } from '@blizzard-api/core';
import { describe, expect, test } from 'vitest';
import { playableClass, playableClassIndex, playableClassMedia } from './index';

const namespaces = ['static-classic1x', 'static-classic', 'static-classicann'] as const;

describe('classicPlayableClassApi', () => {
  test.each(namespaces)('should return a playable class resource in the %s namespace', (namespace) => {
    const playableClassId = 1;

    const resource = playableClass(namespace, playableClassId);

    expect(resource.namespace).toBe(namespace);
    expect(resource.path).toBe(`${wowBasePath}/playable-class/1`);
  });

  test.each(namespaces)('should return a playable class index resource in the %s namespace', (namespace) => {
    const resource = playableClassIndex(namespace);

    expect(resource.namespace).toBe(namespace);
    expect(resource.path).toBe(`${wowBasePath}/playable-class/index`);
  });

  test.each(namespaces)('should return a playable class media resource in the %s namespace', (namespace) => {
    const playableClassId = 1;

    const resource = playableClassMedia(namespace, playableClassId);

    expect(resource.namespace).toBe(namespace);
    expect(resource.path).toBe(`${wowMediaBasePath}/playable-class/1`);
  });
});
