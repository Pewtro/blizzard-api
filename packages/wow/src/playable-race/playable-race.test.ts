import { describe, it, expect } from 'vitest';
import { base } from '../base';
import { playableRaceApi } from './playable-race';

describe('playableRaceApi', () => {
  it('playableRace should return a resource object with the correct path and namespace', () => {
    const playableRaceId = 456;
    const resource = playableRaceApi.playableRace(playableRaceId);

    expect(resource.path).toBe(`${base}/playable-race/${playableRaceId}`);
    expect(resource.namespace).toBe('static');
  });

  it('playableRaceIndex should return a resource object with the correct path and namespace', () => {
    const resource = playableRaceApi.playableRaceIndex();

    expect(resource.path).toBe(`${base}/playable-race/index`);
    expect(resource.namespace).toBe('static');
  });
});
