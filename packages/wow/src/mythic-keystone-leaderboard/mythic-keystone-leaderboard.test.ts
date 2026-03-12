import { wowBasePath } from '@blizzard-api/core';
import { describe, test } from 'vitest';
import { mythicKeystoneLeaderboard, mythicKeystoneLeaderboardIndex } from './mythic-keystone-leaderboard';

describe.concurrent('mythicKeystoneLeaderboardApi', () => {
  test('mythicKeystoneLeaderboard should return a resource object with the correct path and namespace', ({
    expect,
  }) => {
    const connectedRealmId = 456;
    const dungeonId = 789;
    const period = 123;
    const resource = mythicKeystoneLeaderboard(connectedRealmId, dungeonId, period);

    expect(resource.path).toBe(
      `${wowBasePath}/connected-realm/${connectedRealmId}/mythic-leaderboard/${dungeonId}/period/${period}`,
    );
    expect(resource.namespace).toBe('dynamic');
  });

  test('mythicKeystoneLeaderboardIndex should return a resource object with the correct path and namespace', ({
    expect,
  }) => {
    const connectedRealmId = 456;
    const resource = mythicKeystoneLeaderboardIndex(connectedRealmId);

    expect(resource.path).toBe(`${wowBasePath}/connected-realm/${connectedRealmId}/mythic-leaderboard/index`);
    expect(resource.namespace).toBe('dynamic');
  });
});
