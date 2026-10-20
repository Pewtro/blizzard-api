import { wowBasePath } from '@blizzard-api/core';
import { describe, expect, test } from 'vitest';
import {
  pvpLeaderboard,
  pvpLeaderboardIndex,
  pvpRegionalSeason,
  pvpRegionalSeasonIndex,
  pvpRegionIndex,
  pvpRewardsIndex,
  pvpSeason,
  pvpSeasonIndex,
} from './index';

const namespaces = ['dynamic-classic1x', 'dynamic-classic', 'dynamic-classicann'] as const;

describe('classicPvpSeasonApi', () => {
  test.each(namespaces)('should return the PvP season index in the %s namespace', (namespace) => {
    const result = pvpSeasonIndex(namespace);
    expect(result.namespace).toBe(namespace);
    expect(result.path).toBe(`${wowBasePath}/pvp-season/index`);
  });

  test.each(namespaces)('should return the PvP season by ID in the %s namespace', (namespace) => {
    const pvpSeasonId = 123;
    const result = pvpSeason(namespace, pvpSeasonId);
    expect(result.namespace).toBe(namespace);
    expect(result.path).toBe(`${wowBasePath}/pvp-season/${pvpSeasonId}`);
  });

  test.each(namespaces)('should return the PvP region index in the %s namespace', (namespace) => {
    const result = pvpRegionIndex(namespace);
    expect(result.namespace).toBe(namespace);
    expect(result.path).toBe(`${wowBasePath}/pvp-region/index`);
  });

  test.each(namespaces)('should return the PvP season index in a PvP region in the %s namespace', (namespace) => {
    const pvpRegionId = 456;
    const result = pvpRegionalSeasonIndex(namespace, pvpRegionId);
    expect(result.namespace).toBe(namespace);
    expect(result.path).toBe(`${wowBasePath}/pvp-region/${pvpRegionId}/pvp-season/index`);
  });

  test.each(namespaces)('should return a PvP season by region ID and season ID in the %s namespace', (namespace) => {
    const pvpRegionId = 456;
    const pvpSeasonId = 123;
    const result = pvpRegionalSeason(namespace, pvpRegionId, pvpSeasonId);
    expect(result.namespace).toBe(namespace);
    expect(result.path).toBe(`${wowBasePath}/pvp-region/${pvpRegionId}/pvp-season/${pvpSeasonId}`);
  });

  test.each(namespaces)(
    'should return the PvP leaderboards for a PvP season in a given PvP region in the %s namespace',
    (namespace) => {
      const pvpRegionId = 456;
      const pvpSeasonId = 123;
      const result = pvpLeaderboardIndex(namespace, pvpRegionId, pvpSeasonId);
      expect(result.namespace).toBe(namespace);
      expect(result.path).toBe(
        `${wowBasePath}/pvp-region/${pvpRegionId}/pvp-season/${pvpSeasonId}/pvp-leaderboard/index`,
      );
    },
  );

  test.each(namespaces)(
    'should return a PvP leaderboard by PvP season ID and bracket in the %s namespace',
    (namespace) => {
      const pvpRegionId = 456;
      const pvpSeasonId = 123;
      const pvpBracket = '2v2';
      const result = pvpLeaderboard(namespace, pvpRegionId, pvpSeasonId, pvpBracket);
      expect(result.namespace).toBe(namespace);
      expect(result.path).toBe(
        `${wowBasePath}/pvp-region/${pvpRegionId}/pvp-season/${pvpSeasonId}/pvp-leaderboard/${pvpBracket}`,
      );
    },
  );

  test.each(namespaces)(
    'should return the PvP rewards for a PvP season in a given PvP region in the %s namespace',
    (namespace) => {
      const pvpRegionId = 456;
      const pvpSeasonId = 123;
      const result = pvpRewardsIndex(namespace, pvpRegionId, pvpSeasonId);
      expect(result.namespace).toBe(namespace);
      expect(result.path).toBe(`${wowBasePath}/pvp-region/${pvpRegionId}/pvp-season/${pvpSeasonId}/pvp-reward/index`);
    },
  );
});
