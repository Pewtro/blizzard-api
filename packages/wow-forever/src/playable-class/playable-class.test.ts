import { wowBasePath, wowMediaBasePath } from '@blizzard-api/core';
import { describe, expect, test } from 'vitest';
import { playableClass, playableClassIndex, playableClassMedia, pvpTalentSlots } from './index';

describe('playableClassApi', () => {
  test('playableClass should return a resource object with the correct path and namespace', () => {
    const resource = playableClass(1);

    expect(resource.path).toBe(`${wowBasePath}/playable-class/1`);
    expect(resource.namespace).toBe('static-forever');
  });

  test('playableClassIndex should return a resource object with the correct path and namespace', () => {
    const resource = playableClassIndex();

    expect(resource.path).toBe(`${wowBasePath}/playable-class/index`);
    expect(resource.namespace).toBe('static-forever');
  });

  test('playableClassMedia should return a resource object with the correct path and namespace', () => {
    const resource = playableClassMedia(1);

    expect(resource.path).toBe(`${wowMediaBasePath}/playable-class/1`);
    expect(resource.namespace).toBe('static-forever');
  });

  test('pvpTalentSlots should return a resource object with the correct path and namespace', () => {
    const resource = pvpTalentSlots(1);

    expect(resource.path).toBe(`${wowBasePath}/playable-class/1/pvp-talent-slots`);
    expect(resource.namespace).toBe('static-forever');
  });
});
