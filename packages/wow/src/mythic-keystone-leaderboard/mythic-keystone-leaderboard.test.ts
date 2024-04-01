import { describe, it, expect } from 'vitest';
import { base } from '../base';
import { mythicKeystoneLeaderboardApi } from './mythic-keystone-leaderboard';

describe('mythicKeystoneLeaderboardApi', () => {
  it('mythicKeystoneLeaderboard should return a resource object with the correct path and namespace', () => {
    const connectedRealmId = 456;
    const dungeonId = 789;
    const period = 123;
    const resource = mythicKeystoneLeaderboardApi.mythicKeystoneLeaderboard(connectedRealmId, dungeonId, period);

    expect(resource.path).toBe(
      `${base}/connected-realm/${connectedRealmId}/mythic-leaderboard/${dungeonId}/period/${period}`,
    );
    expect(resource.namespace).toBe('dynamic');
  });

  it('mythicKeystoneLeaderboardIndex should return a resource object with the correct path and namespace', () => {
    const connectedRealmId = 456;
    const resource = mythicKeystoneLeaderboardApi.mythicKeystoneLeaderboardIndex(connectedRealmId);

    expect(resource.path).toBe(`${base}/connected-realm/${connectedRealmId}/mythic-leaderboard/index`);
    expect(resource.namespace).toBe('dynamic');
  });
});
