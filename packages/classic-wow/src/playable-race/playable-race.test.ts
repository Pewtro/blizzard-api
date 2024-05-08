import type { BlizzardNamespaces } from '@blizzard-api/core';
import { describe, it } from 'vitest';
import { base } from '../../../wow/src/base';
import { classicPlayableRaceApi } from './playable-race';

const namespace: BlizzardNamespaces = 'static-classic1x';
describe.concurrent('playableRaceApi', () => {
  it('playableRace should return a resource object with the correct path and namespace', ({ expect }) => {
    const playableRaceId = 456;
    const resource = classicPlayableRaceApi.playableRace(namespace, playableRaceId);

    expect(resource.path).toBe(`${base}/playable-race/${playableRaceId}`);
    expect(resource.namespace).toBe(namespace);
  });

  it('playableRaceIndex should return a resource object with the correct path and namespace', ({ expect }) => {
    const resource = classicPlayableRaceApi.playableRaceIndex(namespace);

    expect(resource.path).toBe(`${base}/playable-race/index`);
    expect(resource.namespace).toBe(namespace);
  });
});
