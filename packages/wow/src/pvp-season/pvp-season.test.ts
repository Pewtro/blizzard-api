import { wowBasePath } from '@blizzard-api/core';
import { describe, test } from 'vitest';
import { pvpLeaderboard, pvpLeaderboardIndex, pvpRewardsIndex, pvpSeason, pvpSeasonIndex } from './pvp-season';

describe.concurrent('pvpSeasonApi', () => {
  const pvpSeasonId = 123;
  const bracket = '2v2';

  test('pvpLeaderboard should return a resource object with the correct path and namespace', ({ expect }) => {
    const resource = pvpLeaderboard(pvpSeasonId, bracket);

    expect(resource.path).toBe(`${wowBasePath}/pvp-season/${pvpSeasonId}/pvp-leaderboard/${bracket}`);
    expect(resource.namespace).toBe('dynamic');
  });

  test('pvpLeaderboardIndex should return a resource object with the correct path and namespace', ({ expect }) => {
    const resource = pvpLeaderboardIndex(pvpSeasonId);

    expect(resource.path).toBe(`${wowBasePath}/pvp-season/${pvpSeasonId}/pvp-leaderboard/index`);
    expect(resource.namespace).toBe('dynamic');
  });

  test('pvpRewardsIndex should return a resource object with the correct path and namespace', ({ expect }) => {
    const resource = pvpRewardsIndex(pvpSeasonId);

    expect(resource.path).toBe(`${wowBasePath}/pvp-season/${pvpSeasonId}/pvp-reward/index`);
    expect(resource.namespace).toBe('dynamic');
  });

  test('pvpSeason should return a resource object with the correct path and namespace', ({ expect }) => {
    const resource = pvpSeason(pvpSeasonId);

    expect(resource.path).toBe(`${wowBasePath}/pvp-season/${pvpSeasonId}`);
    expect(resource.namespace).toBe('dynamic');
  });

  test('pvpSeasonIndex should return a resource object with the correct path and namespace', ({ expect }) => {
    const resource = pvpSeasonIndex();

    expect(resource.path).toBe(`${wowBasePath}/pvp-season/index`);
    expect(resource.namespace).toBe('dynamic');
  });
});
