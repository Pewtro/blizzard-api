import { d3GameDataBasePath } from '@blizzard-api/core';
import { describe, it } from 'vitest';
import { era, eraIndex, eraLeaderboard, season, seasonIndex, seasonLeaderboard } from '../game-data/game-data';

describe.concurrent('game-data', () => {
  it('seasonIndex should return the correct resource path', ({ expect }) => {
    const resource = seasonIndex();
    expect(resource.path).toBe(`${d3GameDataBasePath}/season`);
  });

  it('season should return the correct resource path', ({ expect }) => {
    const id = 123;
    const resource = season(id);
    expect(resource.path).toBe(`${d3GameDataBasePath}/season/${id}`);
  });

  it('seasonLeaderboard should return the correct resource path', ({ expect }) => {
    const id = 123;
    const leaderboard = 'leaderboard1';
    const resource = seasonLeaderboard(id, leaderboard);
    expect(resource.path).toBe(`${d3GameDataBasePath}/season/${id}/leaderboard/${leaderboard}`);
  });

  it('eraIndex should return the correct resource path', ({ expect }) => {
    const resource = eraIndex();
    expect(resource.path).toBe(`${d3GameDataBasePath}/era`);
  });

  it('era should return the correct resource path', ({ expect }) => {
    const id = 123;
    const resource = era(id);
    expect(resource.path).toBe(`${d3GameDataBasePath}/era/${id}`);
  });

  it('eraLeaderboard should return the correct resource path', ({ expect }) => {
    const id = 123;
    const leaderboard = 'leaderboard1';
    const resource = eraLeaderboard(id, leaderboard);
    expect(resource.path).toBe(`${d3GameDataBasePath}/era/${id}/leaderboard/${leaderboard}`);
  });
});
