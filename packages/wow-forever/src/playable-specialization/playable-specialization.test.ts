import { wowBasePath, wowMediaBasePath } from '@blizzard-api/core';
import { describe, expect, test } from 'vitest';
import { playableSpecialization, playableSpecializationIndex, playableSpecializationMedia } from './index';

describe('playableSpecializationApi', () => {
  test('playableSpecialization should return a resource object with the correct path and namespace', () => {
    const resource = playableSpecialization(375);

    expect(resource.path).toBe(`${wowBasePath}/playable-specialization/375`);
    expect(resource.namespace).toBe('static-forever');
  });

  test('playableSpecializationIndex should return a resource object with the correct path and namespace', () => {
    const resource = playableSpecializationIndex();

    expect(resource.path).toBe(`${wowBasePath}/playable-specialization/index`);
    expect(resource.namespace).toBe('static-forever');
  });

  test('playableSpecializationMedia should return a resource object with the correct path and namespace', () => {
    const resource = playableSpecializationMedia(375);

    expect(resource.path).toBe(`${wowMediaBasePath}/playable-specialization/375`);
    expect(resource.namespace).toBe('static-forever');
  });
});
