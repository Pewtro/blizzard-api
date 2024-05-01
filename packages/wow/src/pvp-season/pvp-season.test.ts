import { describe, it } from 'vitest';
import { base } from '../base';
import { pvpSeasonApi } from './pvp-season';

describe.concurrent('pvpSeasonApi', () => {
  const pvpSeasonId = 123;
  const bracket = '2v2';

  it('pvpLeaderboard should return a resource object with the correct path and namespace', ({ expect }) => {
    const resource = pvpSeasonApi.pvpLeaderboard(pvpSeasonId, bracket);

    expect(resource.path).toBe(`${base}/pvp-season/${pvpSeasonId}/pvp-leaderboard/${bracket}`);
    expect(resource.namespace).toBe('dynamic');
  });

  it('pvpLeaderboardIndex should return a resource object with the correct path and namespace', ({ expect }) => {
    const resource = pvpSeasonApi.pvpLeaderboardIndex(pvpSeasonId);

    expect(resource.path).toBe(`${base}/pvp-season/${pvpSeasonId}/pvp-leaderboard/index`);
    expect(resource.namespace).toBe('dynamic');
  });

  it('pvpRewardsIndex should return a resource object with the correct path and namespace', ({ expect }) => {
    const resource = pvpSeasonApi.pvpRewardsIndex(pvpSeasonId);

    expect(resource.path).toBe(`${base}/pvp-season/${pvpSeasonId}/pvp-reward/index`);
    expect(resource.namespace).toBe('dynamic');
  });

  it('pvpSeason should return a resource object with the correct path and namespace', ({ expect }) => {
    const resource = pvpSeasonApi.pvpSeason(pvpSeasonId);

    expect(resource.path).toBe(`${base}/pvp-season/${pvpSeasonId}`);
    expect(resource.namespace).toBe('dynamic');
  });

  it('pvpSeasonIndex should return a resource object with the correct path and namespace', ({ expect }) => {
    const resource = pvpSeasonApi.pvpSeasonIndex();

    expect(resource.path).toBe(`${base}/pvp-season/index`);
    expect(resource.namespace).toBe('dynamic');
  });
});
