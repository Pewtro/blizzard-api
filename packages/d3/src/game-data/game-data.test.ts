import { d3GameDataBasePath } from '@blizzard-api/core';
import { describe, test } from 'vitest';
import { era, eraIndex, eraLeaderboard, season, seasonIndex, seasonLeaderboard } from '../game-data/game-data';

describe.concurrent('game-data', () => {
  test('seasonIndex should return the correct resource path', ({ expect }) => {
    const resource = seasonIndex();
    expect(resource.path).toBe(`${d3GameDataBasePath}/season`);
  });

  test('season should return the correct resource path', ({ expect }) => {
    const id = 123;
    const resource = season(id);
    expect(resource.path).toBe(`${d3GameDataBasePath}/season/${id}`);
  });

  test('seasonLeaderboard should return the correct resource path', ({ expect }) => {
    const id = 123;
    const leaderboard = 'leaderboard1';
    const resource = seasonLeaderboard(id, leaderboard);
    expect(resource.path).toBe(`${d3GameDataBasePath}/season/${id}/leaderboard/${leaderboard}`);
  });

  test('eraIndex should return the correct resource path', ({ expect }) => {
    const resource = eraIndex();
    expect(resource.path).toBe(`${d3GameDataBasePath}/era`);
  });

  test('era should return the correct resource path', ({ expect }) => {
    const id = 123;
    const resource = era(id);
    expect(resource.path).toBe(`${d3GameDataBasePath}/era/${id}`);
  });

  test('eraLeaderboard should return the correct resource path', ({ expect }) => {
    const id = 123;
    const leaderboard = 'leaderboard1';
    const resource = eraLeaderboard(id, leaderboard);
    expect(resource.path).toBe(`${d3GameDataBasePath}/era/${id}/leaderboard/${leaderboard}`);
  });
});
