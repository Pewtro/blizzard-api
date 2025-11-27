import { wowBasePath } from '@blizzard-api/core';
import { describe, it } from 'vitest';
import { playableRace, playableRaceIndex } from './playable-race';

describe.concurrent('playableRaceApi', () => {
  it('playableRace should return a resource object with the correct path and namespace', ({ expect }) => {
    const playableRaceId = 456;
    const resource = playableRace(playableRaceId);

    expect(resource.path).toBe(`${wowBasePath}/playable-race/${playableRaceId}`);
    expect(resource.namespace).toBe('static');
  });

  it('playableRaceIndex should return a resource object with the correct path and namespace', ({ expect }) => {
    const resource = playableRaceIndex();

    expect(resource.path).toBe(`${wowBasePath}/playable-race/index`);
    expect(resource.namespace).toBe('static');
  });
});
