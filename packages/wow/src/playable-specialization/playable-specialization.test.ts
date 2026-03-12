import { wowBasePath, wowMediaBasePath } from '@blizzard-api/core';
import { describe, test } from 'vitest';
import {
  playableSpecialization,
  playableSpecializationIndex,
  playableSpecializationMedia,
} from './playable-specialization';

describe.concurrent('playableSpecializationApi', () => {
  test('playableSpecialization should return a resource object with the correct path and namespace', ({ expect }) => {
    const specializationId = 123;
    const resource = playableSpecialization(specializationId);

    expect(resource.path).toBe(`${wowBasePath}/playable-specialization/${specializationId}`);
    expect(resource.namespace).toBe('static');
  });

  test('playableSpecializationIndex should return a resource object with the correct path and namespace', ({
    expect,
  }) => {
    const resource = playableSpecializationIndex();

    expect(resource.path).toBe(`${wowBasePath}/playable-specialization/index`);
    expect(resource.namespace).toBe('static');
  });

  test('playableSpecializationMedia should return a resource object with the correct path and namespace', ({
    expect,
  }) => {
    const specializationId = 123;
    const resource = playableSpecializationMedia(specializationId);

    expect(resource.path).toBe(`${wowMediaBasePath}/playable-specialization/${specializationId}`);
    expect(resource.namespace).toBe('static');
  });
});
