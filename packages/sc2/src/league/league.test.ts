import { describe, expect, it } from 'vitest';
import { getLeagueData } from './league';
import type { StarcraftLeagueId, StarcraftLeagueQueue, StarcraftLeagueTeamType } from './types';

describe('league', () => {
  it('should return the correct path for grandmaster league', () => {
    const seasonId = '42';
    const queueId: StarcraftLeagueQueue = 'lotv-1v1';
    const teamType: StarcraftLeagueTeamType = 'arranged';
    const leagueId: StarcraftLeagueId = 'grandmaster';

    const result = getLeagueData(seasonId, queueId, teamType, leagueId);

    expect(result.path).toBe('/data/sc2/league/42/201/0/6');
  });

  it('should return the correct path for bronze league', () => {
    const seasonId = '42';
    const queueId: StarcraftLeagueQueue = 'lotv-1v1';
    const teamType: StarcraftLeagueTeamType = 'arranged';
    const leagueId: StarcraftLeagueId = 'bronze';

    const result = getLeagueData(seasonId, queueId, teamType, leagueId);

    expect(result.path).toBe('/data/sc2/league/42/201/0/0');
  });

  it('should return the correct path for silver league', () => {
    const seasonId = '42';
    const queueId: StarcraftLeagueQueue = 'lotv-1v1';
    const teamType: StarcraftLeagueTeamType = 'arranged';
    const leagueId: StarcraftLeagueId = 'silver';

    const result = getLeagueData(seasonId, queueId, teamType, leagueId);

    expect(result.path).toBe('/data/sc2/league/42/201/0/1');
  });

  it('should return the correct path for gold league', () => {
    const seasonId = '42';
    const queueId: StarcraftLeagueQueue = 'lotv-1v1';
    const teamType: StarcraftLeagueTeamType = 'arranged';
    const leagueId: StarcraftLeagueId = 'gold';

    const result = getLeagueData(seasonId, queueId, teamType, leagueId);

    expect(result.path).toBe('/data/sc2/league/42/201/0/2');
  });

  it('should return the correct path for platinum league', () => {
    const seasonId = '42';
    const queueId: StarcraftLeagueQueue = 'lotv-1v1';
    const teamType: StarcraftLeagueTeamType = 'arranged';
    const leagueId: StarcraftLeagueId = 'platinum';

    const result = getLeagueData(seasonId, queueId, teamType, leagueId);

    expect(result.path).toBe('/data/sc2/league/42/201/0/3');
  });

  it('should return the correct path for diamond league', () => {
    const seasonId = '42';
    const queueId: StarcraftLeagueQueue = 'lotv-1v1';
    const teamType: StarcraftLeagueTeamType = 'arranged';
    const leagueId: StarcraftLeagueId = 'diamond';

    const result = getLeagueData(seasonId, queueId, teamType, leagueId);

    expect(result.path).toBe('/data/sc2/league/42/201/0/4');
  });

  it('should return the correct path for master league', () => {
    const seasonId = '42';
    const queueId: StarcraftLeagueQueue = 'lotv-1v1';
    const teamType: StarcraftLeagueTeamType = 'arranged';
    const leagueId: StarcraftLeagueId = 'master';

    const result = getLeagueData(seasonId, queueId, teamType, leagueId);

    expect(result.path).toBe('/data/sc2/league/42/201/0/5');
  });

  it('should return the correct path for hots-1v1 queue', () => {
    const seasonId = '42';
    const queueId: StarcraftLeagueQueue = 'hots-1v1';
    const teamType: StarcraftLeagueTeamType = 'arranged';
    const leagueId: StarcraftLeagueId = 'master';

    const result = getLeagueData(seasonId, queueId, teamType, leagueId);

    expect(result.path).toBe('/data/sc2/league/42/101/0/5');
  });

  it('should return the correct path for hots-2v2 queue', () => {
    const seasonId = '42';
    const queueId: StarcraftLeagueQueue = 'hots-2v2';
    const teamType: StarcraftLeagueTeamType = 'arranged';
    const leagueId: StarcraftLeagueId = 'master';

    const result = getLeagueData(seasonId, queueId, teamType, leagueId);

    expect(result.path).toBe('/data/sc2/league/42/102/0/5');
  });

  it('should return the correct path for hots-3v3 queue', () => {
    const seasonId = '42';
    const queueId: StarcraftLeagueQueue = 'hots-3v3';
    const teamType: StarcraftLeagueTeamType = 'arranged';
    const leagueId: StarcraftLeagueId = 'master';

    const result = getLeagueData(seasonId, queueId, teamType, leagueId);

    expect(result.path).toBe('/data/sc2/league/42/103/0/5');
  });

  it('should return the correct path for hots-4v4 queue', () => {
    const seasonId = '42';
    const queueId: StarcraftLeagueQueue = 'hots-4v4';
    const teamType: StarcraftLeagueTeamType = 'arranged';
    const leagueId: StarcraftLeagueId = 'master';

    const result = getLeagueData(seasonId, queueId, teamType, leagueId);

    expect(result.path).toBe('/data/sc2/league/42/104/0/5');
  });

  it('should return the correct path for lotv-2v2 queue', () => {
    const seasonId = '42';
    const queueId: StarcraftLeagueQueue = 'lotv-2v2';
    const teamType: StarcraftLeagueTeamType = 'arranged';
    const leagueId: StarcraftLeagueId = 'master';

    const result = getLeagueData(seasonId, queueId, teamType, leagueId);

    expect(result.path).toBe('/data/sc2/league/42/202/0/5');
  });

  it('should return the correct path for lotv-3v3 queue', () => {
    const seasonId = '42';
    const queueId: StarcraftLeagueQueue = 'lotv-3v3';
    const teamType: StarcraftLeagueTeamType = 'arranged';
    const leagueId: StarcraftLeagueId = 'master';

    const result = getLeagueData(seasonId, queueId, teamType, leagueId);

    expect(result.path).toBe('/data/sc2/league/42/203/0/5');
  });

  it('should return the correct path for lotv-4v4 queue', () => {
    const seasonId = '42';
    const queueId: StarcraftLeagueQueue = 'lotv-4v4';
    const teamType: StarcraftLeagueTeamType = 'arranged';
    const leagueId: StarcraftLeagueId = 'master';

    const result = getLeagueData(seasonId, queueId, teamType, leagueId);

    expect(result.path).toBe('/data/sc2/league/42/204/0/5');
  });

  it('should return the correct path for lotv-archon queue', () => {
    const seasonId = '42';
    const queueId: StarcraftLeagueQueue = 'lotv-archon';
    const teamType: StarcraftLeagueTeamType = 'arranged';
    const leagueId: StarcraftLeagueId = 'master';

    const result = getLeagueData(seasonId, queueId, teamType, leagueId);

    expect(result.path).toBe('/data/sc2/league/42/206/0/5');
  });

  it('should return the correct path for wol-1v1 queue', () => {
    const seasonId = '42';
    const queueId: StarcraftLeagueQueue = 'wol-1v1';
    const teamType: StarcraftLeagueTeamType = 'arranged';
    const leagueId: StarcraftLeagueId = 'master';

    const result = getLeagueData(seasonId, queueId, teamType, leagueId);

    expect(result.path).toBe('/data/sc2/league/42/1/0/5');
  });

  it('should return the correct path for wol-2v2 queue', () => {
    const seasonId = '42';
    const queueId: StarcraftLeagueQueue = 'wol-2v2';
    const teamType: StarcraftLeagueTeamType = 'arranged';
    const leagueId: StarcraftLeagueId = 'master';

    const result = getLeagueData(seasonId, queueId, teamType, leagueId);

    expect(result.path).toBe('/data/sc2/league/42/2/0/5');
  });

  it('should return the correct path for wol-3v3 queue', () => {
    const seasonId = '42';
    const queueId: StarcraftLeagueQueue = 'wol-3v3';
    const teamType: StarcraftLeagueTeamType = 'arranged';
    const leagueId: StarcraftLeagueId = 'master';

    const result = getLeagueData(seasonId, queueId, teamType, leagueId);

    expect(result.path).toBe('/data/sc2/league/42/3/0/5');
  });

  it('should return the correct path for wol-4v4 queue', () => {
    const seasonId = '42';
    const queueId: StarcraftLeagueQueue = 'wol-4v4';
    const teamType: StarcraftLeagueTeamType = 'arranged';
    const leagueId: StarcraftLeagueId = 'master';

    const result = getLeagueData(seasonId, queueId, teamType, leagueId);

    expect(result.path).toBe('/data/sc2/league/42/4/0/5');
  });

  it('should return the correct path for random team type', () => {
    const seasonId = '42';
    const queueId: StarcraftLeagueQueue = 'wol-4v4';
    const teamType: StarcraftLeagueTeamType = 'random';
    const leagueId: StarcraftLeagueId = 'master';

    const result = getLeagueData(seasonId, queueId, teamType, leagueId);

    expect(result.path).toBe('/data/sc2/league/42/4/1/5');
  });

  it('should return the correct path for season 1', () => {
    const seasonId = '1';
    const queueId: StarcraftLeagueQueue = 'wol-4v4';
    const teamType: StarcraftLeagueTeamType = 'random';
    const leagueId: StarcraftLeagueId = 'master';

    const result = getLeagueData(seasonId, queueId, teamType, leagueId);

    expect(result.path).toBe('/data/sc2/league/1/4/1/5');
  });
});
