import { describe, it, expect } from 'vitest';
import { base } from '../base';
import { mythicRaidLeaderboardApi } from './mythic-raid-leaderboard';

describe('mythicRaidLeaderboardApi', () => {
  it('mythicRaidLeaderboard should return a resource object with the correct path and namespace', () => {
    const raid = 'castle-nathria';
    const faction = 'alliance';
    const resource = mythicRaidLeaderboardApi.mythicRaidLeaderboard(raid, faction);

    expect(resource.path).toBe(`${base}/leaderboard/hall-of-fame/${raid}/${faction}`);
    expect(resource.namespace).toBe('dynamic');
  });

  it('mythicRaidLeaderboard should return a resource object with the correct path and namespace for horde faction', () => {
    const raid = 'sanctum-of-domination';
    const faction = 'horde';
    const resource = mythicRaidLeaderboardApi.mythicRaidLeaderboard(raid, faction);

    expect(resource.path).toBe(`${base}/leaderboard/hall-of-fame/${raid}/${faction}`);
    expect(resource.namespace).toBe('dynamic');
  });
});
