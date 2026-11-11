import { wowBasePath } from '@blizzard-api/core';
import { describe, expect, test } from 'vitest';
import { mythicKeystoneLeaderboard, mythicKeystoneLeaderboardIndex } from './index';

const namespace = 'dynamic-classic' as const;

describe('classicMythicKeystoneLeaderboardApi', () => {
  test('mythicKeystoneLeaderboard should return a resource object with the correct path and namespace', () => {
    const resource = mythicKeystoneLeaderboard(namespace, 1, 2, 3);

    expect(resource.path).toBe(`${wowBasePath}/connected-realm/1/mythic-leaderboard/2/period/3`);
    expect(resource.namespace).toBe(namespace);
  });

  test('mythicKeystoneLeaderboardIndex should return a resource object with the correct path and namespace', () => {
    const resource = mythicKeystoneLeaderboardIndex(namespace, 1);

    expect(resource.path).toBe(`${wowBasePath}/connected-realm/1/mythic-leaderboard/index`);
    expect(resource.namespace).toBe(namespace);
  });
});
