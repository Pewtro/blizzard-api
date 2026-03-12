import { wowBasePath } from '@blizzard-api/core';
import { describe, test } from 'vitest';
import { mythicRaidLeaderboard } from './mythic-raid-leaderboard';

describe.concurrent('mythicRaidLeaderboardApi', () => {
  test('mythicRaidLeaderboard should return a resource object with the correct path and namespace', ({ expect }) => {
    const raid = 'castle-nathria';
    const faction = 'alliance';
    const resource = mythicRaidLeaderboard(raid, faction);

    expect(resource.path).toBe(`${wowBasePath}/leaderboard/hall-of-fame/${raid}/${faction}`);
    expect(resource.namespace).toBe('dynamic');
  });

  test('mythicRaidLeaderboard should return a resource object with the correct path and namespace for horde faction', ({
    expect,
  }) => {
    const raid = 'sanctum-of-domination';
    const faction = 'horde';
    const resource = mythicRaidLeaderboard(raid, faction);

    expect(resource.path).toBe(`${wowBasePath}/leaderboard/hall-of-fame/${raid}/${faction}`);
    expect(resource.namespace).toBe('dynamic');
  });
});
