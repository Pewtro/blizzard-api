import { wowBasePath } from '@blizzard-api/core';
import { describe, expect, test } from 'vitest';
import { playableRace, playableRaceIndex } from './index';

const namespaces = ['static-classic1x', 'static-classic', 'static-classicann'] as const;

describe('playableRaceApi', () => {
  test.each(namespaces)(
    'playableRace should return a resource object with the correct path and namespace in the %s namespace',
    (namespace) => {
      const playableRaceId = 456;
      const resource = playableRace(namespace, playableRaceId);

      expect(resource.path).toBe(`${wowBasePath}/playable-race/${playableRaceId}`);
      expect(resource.namespace).toBe(namespace);
    },
  );

  test.each(namespaces)(
    'playableRaceIndex should return a resource object with the correct path and namespace in the %s namespace',
    (namespace) => {
      const resource = playableRaceIndex(namespace);

      expect(resource.path).toBe(`${wowBasePath}/playable-race/index`);
      expect(resource.namespace).toBe(namespace);
    },
  );
});
