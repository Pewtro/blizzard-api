import { wowBasePath } from '@blizzard-api/core';
import { describe, test } from 'vitest';
import { playableRace, playableRaceIndex } from './playable-race';

describe.concurrent('playableRaceApi', () => {
  test('playableRace should return a resource object with the correct path and namespace', ({ expect }) => {
    const playableRaceId = 456;
    const resource = playableRace(playableRaceId);

    expect(resource.path).toBe(`${wowBasePath}/playable-race/${playableRaceId}`);
    expect(resource.namespace).toBe('static');
  });

  test('playableRaceIndex should return a resource object with the correct path and namespace', ({ expect }) => {
    const resource = playableRaceIndex();

    expect(resource.path).toBe(`${wowBasePath}/playable-race/index`);
    expect(resource.namespace).toBe('static');
  });
});
