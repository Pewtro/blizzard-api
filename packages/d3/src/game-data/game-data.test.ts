import { describe, it } from 'vitest';
import { gameDataBase } from '../base';
import { seasonIndex, season, seasonLeaderboard, eraIndex, era, eraLeaderboard } from '../game-data/game-data';

describe.concurrent('game-data', () => {
  it('seasonIndex should return the correct resource path', ({ expect }) => {
    const resource = seasonIndex();
    expect(resource.path).toBe(`${gameDataBase}/season`);
  });

  it('season should return the correct resource path', ({ expect }) => {
    const id = 123;
    const resource = season(id);
    expect(resource.path).toBe(`${gameDataBase}/season/${id}`);
  });

  it('seasonLeaderboard should return the correct resource path', ({ expect }) => {
    const id = 123;
    const leaderboard = 'leaderboard1';
    const resource = seasonLeaderboard(id, leaderboard);
    expect(resource.path).toBe(`${gameDataBase}/season/${id}/leaderboard/${leaderboard}`);
  });

  it('eraIndex should return the correct resource path', ({ expect }) => {
    const resource = eraIndex();
    expect(resource.path).toBe(`${gameDataBase}/era`);
  });

  it('era should return the correct resource path', ({ expect }) => {
    const id = 123;
    const resource = era(id);
    expect(resource.path).toBe(`${gameDataBase}/era/${id}`);
  });

  it('eraLeaderboard should return the correct resource path', ({ expect }) => {
    const id = 123;
    const leaderboard = 'leaderboard1';
    const resource = eraLeaderboard(id, leaderboard);
    expect(resource.path).toBe(`${gameDataBase}/era/${id}/leaderboard/${leaderboard}`);
  });
});
