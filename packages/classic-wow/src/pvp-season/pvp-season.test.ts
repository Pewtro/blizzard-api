import type { BlizzardNamespaces } from '@blizzard-api/core';
import { describe, it } from 'vitest';
import { base } from '../../../wow/src/base';
import * as classicPvpSeasonApi from './pvp-season';

const namespace: BlizzardNamespaces = 'dynamic-classic';

describe('classicPvpSeasonApi', () => {
  it('should return the PvP season index', ({ expect }) => {
    const result = classicPvpSeasonApi.pvpSeasonIndex(namespace);
    expect(result.namespace).toBe(namespace);
    expect(result.path).toBe(`${base}/pvp-season/index`);
  });

  it('should return the PvP season by ID', ({ expect }) => {
    const pvpSeasonId = 123;
    const result = classicPvpSeasonApi.pvpSeason(namespace, pvpSeasonId);
    expect(result.namespace).toBe(namespace);
    expect(result.path).toBe(`${base}/pvp-season/${pvpSeasonId}`);
  });

  it('should return the PvP region index', ({ expect }) => {
    const result = classicPvpSeasonApi.pvpRegionIndex(namespace);
    expect(result.namespace).toBe(namespace);
    expect(result.path).toBe(`${base}/pvp-region/index`);
  });

  it('should return the PvP season index in a PvP region', ({ expect }) => {
    const pvpRegionId = 456;
    const result = classicPvpSeasonApi.pvpRegionalSeasonIndex(namespace, pvpRegionId);
    expect(result.namespace).toBe(namespace);
    expect(result.path).toBe(`${base}/pvp-region/${pvpRegionId}/pvp-season/index`);
  });

  it('should return a PvP season by region ID and season ID', ({ expect }) => {
    const pvpRegionId = 456;
    const pvpSeasonId = 123;
    const result = classicPvpSeasonApi.pvpRegionalSeason(namespace, pvpRegionId, pvpSeasonId);
    expect(result.namespace).toBe(namespace);
    expect(result.path).toBe(`${base}/pvp-region/${pvpRegionId}/pvp-season/${pvpSeasonId}`);
  });

  it('should return the PvP leaderboards for a PvP season in a given PvP region', ({ expect }) => {
    const pvpRegionId = 456;
    const pvpSeasonId = 123;
    const result = classicPvpSeasonApi.pvpLeaderboardIndex(namespace, pvpRegionId, pvpSeasonId);
    expect(result.namespace).toBe(namespace);
    expect(result.path).toBe(`${base}/pvp-region/${pvpRegionId}/pvp-season/${pvpSeasonId}/pvp-leaderboard/index`);
  });

  it('should return a PvP leaderboard by PvP season ID and bracket', ({ expect }) => {
    const pvpRegionId = 456;
    const pvpSeasonId = 123;
    const pvpBracket = '2v2';
    const result = classicPvpSeasonApi.pvpLeaderboard(namespace, pvpRegionId, pvpSeasonId, pvpBracket);
    expect(result.namespace).toBe(namespace);
    expect(result.path).toBe(
      `${base}/pvp-region/${pvpRegionId}/pvp-season/${pvpSeasonId}/pvp-leaderboard/${pvpBracket}`,
    );
  });

  it('should return the PvP rewards for a PvP season in a given PvP region', ({ expect }) => {
    const pvpRegionId = 456;
    const pvpSeasonId = 123;
    const result = classicPvpSeasonApi.pvpRewardsIndex(namespace, pvpRegionId, pvpSeasonId);
    expect(result.namespace).toBe(namespace);
    expect(result.path).toBe(`${base}/pvp-region/${pvpRegionId}/pvp-season/${pvpSeasonId}/pvp-reward/index`);
  });
});
