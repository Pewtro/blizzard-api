import type { BlizzardNamespaces } from '@blizzard-api/core';
import { describe, it } from 'vitest';
import { base } from '../../../wow/src/base';
import {
  pvpLeaderboard,
  pvpLeaderboardIndex,
  pvpRegionalSeason,
  pvpRegionalSeasonIndex,
  pvpRegionIndex,
  pvpRewardsIndex,
  pvpSeason,
  pvpSeasonIndex,
} from './pvp-season';

const namespace: BlizzardNamespaces = 'dynamic-classic';

describe('classicPvpSeasonApi', () => {
  it('should return the PvP season index', ({ expect }) => {
    const result = pvpSeasonIndex(namespace);
    expect(result.namespace).toBe(namespace);
    expect(result.path).toBe(`${base}/pvp-season/index`);
  });

  it('should return the PvP season by ID', ({ expect }) => {
    const pvpSeasonId = 123;
    const result = pvpSeason(namespace, pvpSeasonId);
    expect(result.namespace).toBe(namespace);
    expect(result.path).toBe(`${base}/pvp-season/${pvpSeasonId}`);
  });

  it('should return the PvP region index', ({ expect }) => {
    const result = pvpRegionIndex(namespace);
    expect(result.namespace).toBe(namespace);
    expect(result.path).toBe(`${base}/pvp-region/index`);
  });

  it('should return the PvP season index in a PvP region', ({ expect }) => {
    const pvpRegionId = 456;
    const result = pvpRegionalSeasonIndex(namespace, pvpRegionId);
    expect(result.namespace).toBe(namespace);
    expect(result.path).toBe(`${base}/pvp-region/${pvpRegionId}/pvp-season/index`);
  });

  it('should return a PvP season by region ID and season ID', ({ expect }) => {
    const pvpRegionId = 456;
    const pvpSeasonId = 123;
    const result = pvpRegionalSeason(namespace, pvpRegionId, pvpSeasonId);
    expect(result.namespace).toBe(namespace);
    expect(result.path).toBe(`${base}/pvp-region/${pvpRegionId}/pvp-season/${pvpSeasonId}`);
  });

  it('should return the PvP leaderboards for a PvP season in a given PvP region', ({ expect }) => {
    const pvpRegionId = 456;
    const pvpSeasonId = 123;
    const result = pvpLeaderboardIndex(namespace, pvpRegionId, pvpSeasonId);
    expect(result.namespace).toBe(namespace);
    expect(result.path).toBe(`${base}/pvp-region/${pvpRegionId}/pvp-season/${pvpSeasonId}/pvp-leaderboard/index`);
  });

  it('should return a PvP leaderboard by PvP season ID and bracket', ({ expect }) => {
    const pvpRegionId = 456;
    const pvpSeasonId = 123;
    const pvpBracket = '2v2';
    const result = pvpLeaderboard(namespace, pvpRegionId, pvpSeasonId, pvpBracket);
    expect(result.namespace).toBe(namespace);
    expect(result.path).toBe(
      `${base}/pvp-region/${pvpRegionId}/pvp-season/${pvpSeasonId}/pvp-leaderboard/${pvpBracket}`,
    );
  });

  it('should return the PvP rewards for a PvP season in a given PvP region', ({ expect }) => {
    const pvpRegionId = 456;
    const pvpSeasonId = 123;
    const result = pvpRewardsIndex(namespace, pvpRegionId, pvpSeasonId);
    expect(result.namespace).toBe(namespace);
    expect(result.path).toBe(`${base}/pvp-region/${pvpRegionId}/pvp-season/${pvpSeasonId}/pvp-reward/index`);
  });
});
