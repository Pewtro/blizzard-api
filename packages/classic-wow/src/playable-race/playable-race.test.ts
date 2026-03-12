import { wowBasePath } from '@blizzard-api/core';
import type { BlizzardNamespaces } from '@blizzard-api/core';
import { describe, test } from 'vitest';
import { playableRace, playableRaceIndex } from './playable-race';

const namespace: BlizzardNamespaces = 'static-classic1x';
describe.concurrent('playableRaceApi', () => {
  test('playableRace should return a resource object with the correct path and namespace', ({ expect }) => {
    const playableRaceId = 456;
    const resource = playableRace(namespace, playableRaceId);

    expect(resource.path).toBe(`${wowBasePath}/playable-race/${playableRaceId}`);
    expect(resource.namespace).toBe(namespace);
  });

  test('playableRaceIndex should return a resource object with the correct path and namespace', ({ expect }) => {
    const resource = playableRaceIndex(namespace);

    expect(resource.path).toBe(`${wowBasePath}/playable-race/index`);
    expect(resource.namespace).toBe(namespace);
  });
});
