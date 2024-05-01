import { describe, it } from 'vitest';
import { base } from '../base';
import { playableRaceApi } from './playable-race';

describe.concurrent('playableRaceApi', () => {
  it('playableRace should return a resource object with the correct path and namespace', ({ expect }) => {
    const playableRaceId = 456;
    const resource = playableRaceApi.playableRace(playableRaceId);

    expect(resource.path).toBe(`${base}/playable-race/${playableRaceId}`);
    expect(resource.namespace).toBe('static');
  });

  it('playableRaceIndex should return a resource object with the correct path and namespace', ({ expect }) => {
    const resource = playableRaceApi.playableRaceIndex();

    expect(resource.path).toBe(`${base}/playable-race/index`);
    expect(resource.namespace).toBe('static');
  });
});
