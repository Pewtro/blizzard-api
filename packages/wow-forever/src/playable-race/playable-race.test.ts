import { wowBasePath } from '@blizzard-api/core';
import { describe, expect, test } from 'vitest';
import { playableRace, playableRaceIndex } from './index';

describe('playableRaceApi', () => {
  test('playableRace should return a resource object with the correct path and namespace', () => {
    const resource = playableRace(1);

    expect(resource.path).toBe(`${wowBasePath}/playable-race/1`);
    expect(resource.namespace).toBe('static-forever');
  });

  test('playableRaceIndex should return a resource object with the correct path and namespace', () => {
    const resource = playableRaceIndex();

    expect(resource.path).toBe(`${wowBasePath}/playable-race/index`);
    expect(resource.namespace).toBe('static-forever');
  });
});
