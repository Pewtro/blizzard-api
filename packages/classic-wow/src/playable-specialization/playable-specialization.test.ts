import { wowBasePath, wowMediaBasePath } from '@blizzard-api/core';
import { describe, expect, test } from 'vitest';
import { playableSpecialization, playableSpecializationIndex, playableSpecializationMedia } from './index';

const namespace = 'static-classic' as const;

describe('classicPlayableSpecializationApi', () => {
  test('playableSpecialization should return a resource object with the correct path and namespace', () => {
    const resource = playableSpecialization(namespace, 123);

    expect(resource.path).toBe(`${wowBasePath}/playable-specialization/123`);
    expect(resource.namespace).toBe(namespace);
  });

  test('playableSpecializationIndex should return a resource object with the correct path and namespace', () => {
    const resource = playableSpecializationIndex(namespace);

    expect(resource.path).toBe(`${wowBasePath}/playable-specialization/index`);
    expect(resource.namespace).toBe(namespace);
  });

  test('playableSpecializationMedia should return a resource object with the correct path and namespace', () => {
    const resource = playableSpecializationMedia(namespace, 123);

    expect(resource.path).toBe(`${wowMediaBasePath}/playable-specialization/123`);
    expect(resource.namespace).toBe(namespace);
  });
});
