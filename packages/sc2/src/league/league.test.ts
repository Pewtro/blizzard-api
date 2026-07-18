import { describe, expect, test } from 'vitest';
import type { StarcraftLeagueId, StarcraftLeagueQueue, StarcraftLeagueTeamType } from './types';
import { getLeagueData } from './index';

const leaguePathCases: Array<{
  expectedPath: string;
  leagueId: StarcraftLeagueId;
  name: string;
  queueId: StarcraftLeagueQueue;
  seasonId: string;
  teamType: StarcraftLeagueTeamType;
}> = [
  {
    expectedPath: '/data/sc2/league/42/201/0/6',
    leagueId: 'grandmaster',
    name: 'grandmaster league',
    queueId: 'lotv-1v1',
    seasonId: '42',
    teamType: 'arranged',
  },
  {
    expectedPath: '/data/sc2/league/42/201/0/0',
    leagueId: 'bronze',
    name: 'bronze league',
    queueId: 'lotv-1v1',
    seasonId: '42',
    teamType: 'arranged',
  },
  {
    expectedPath: '/data/sc2/league/42/201/0/1',
    leagueId: 'silver',
    name: 'silver league',
    queueId: 'lotv-1v1',
    seasonId: '42',
    teamType: 'arranged',
  },
  {
    expectedPath: '/data/sc2/league/42/201/0/2',
    leagueId: 'gold',
    name: 'gold league',
    queueId: 'lotv-1v1',
    seasonId: '42',
    teamType: 'arranged',
  },
  {
    expectedPath: '/data/sc2/league/42/201/0/3',
    leagueId: 'platinum',
    name: 'platinum league',
    queueId: 'lotv-1v1',
    seasonId: '42',
    teamType: 'arranged',
  },
  {
    expectedPath: '/data/sc2/league/42/201/0/4',
    leagueId: 'diamond',
    name: 'diamond league',
    queueId: 'lotv-1v1',
    seasonId: '42',
    teamType: 'arranged',
  },
  {
    expectedPath: '/data/sc2/league/42/201/0/5',
    leagueId: 'master',
    name: 'master league',
    queueId: 'lotv-1v1',
    seasonId: '42',
    teamType: 'arranged',
  },
  {
    expectedPath: '/data/sc2/league/42/101/0/5',
    leagueId: 'master',
    name: 'hots-1v1 queue',
    queueId: 'hots-1v1',
    seasonId: '42',
    teamType: 'arranged',
  },
  {
    expectedPath: '/data/sc2/league/42/102/0/5',
    leagueId: 'master',
    name: 'hots-2v2 queue',
    queueId: 'hots-2v2',
    seasonId: '42',
    teamType: 'arranged',
  },
  {
    expectedPath: '/data/sc2/league/42/103/0/5',
    leagueId: 'master',
    name: 'hots-3v3 queue',
    queueId: 'hots-3v3',
    seasonId: '42',
    teamType: 'arranged',
  },
  {
    expectedPath: '/data/sc2/league/42/104/0/5',
    leagueId: 'master',
    name: 'hots-4v4 queue',
    queueId: 'hots-4v4',
    seasonId: '42',
    teamType: 'arranged',
  },
  {
    expectedPath: '/data/sc2/league/42/202/0/5',
    leagueId: 'master',
    name: 'lotv-2v2 queue',
    queueId: 'lotv-2v2',
    seasonId: '42',
    teamType: 'arranged',
  },
  {
    expectedPath: '/data/sc2/league/42/203/0/5',
    leagueId: 'master',
    name: 'lotv-3v3 queue',
    queueId: 'lotv-3v3',
    seasonId: '42',
    teamType: 'arranged',
  },
  {
    expectedPath: '/data/sc2/league/42/204/0/5',
    leagueId: 'master',
    name: 'lotv-4v4 queue',
    queueId: 'lotv-4v4',
    seasonId: '42',
    teamType: 'arranged',
  },
  {
    expectedPath: '/data/sc2/league/42/206/0/5',
    leagueId: 'master',
    name: 'lotv-archon queue',
    queueId: 'lotv-archon',
    seasonId: '42',
    teamType: 'arranged',
  },
  {
    expectedPath: '/data/sc2/league/42/1/0/5',
    leagueId: 'master',
    name: 'wol-1v1 queue',
    queueId: 'wol-1v1',
    seasonId: '42',
    teamType: 'arranged',
  },
  {
    expectedPath: '/data/sc2/league/42/2/0/5',
    leagueId: 'master',
    name: 'wol-2v2 queue',
    queueId: 'wol-2v2',
    seasonId: '42',
    teamType: 'arranged',
  },
  {
    expectedPath: '/data/sc2/league/42/3/0/5',
    leagueId: 'master',
    name: 'wol-3v3 queue',
    queueId: 'wol-3v3',
    seasonId: '42',
    teamType: 'arranged',
  },
  {
    expectedPath: '/data/sc2/league/42/4/0/5',
    leagueId: 'master',
    name: 'wol-4v4 queue',
    queueId: 'wol-4v4',
    seasonId: '42',
    teamType: 'arranged',
  },
  {
    expectedPath: '/data/sc2/league/42/4/1/5',
    leagueId: 'master',
    name: 'random team type',
    queueId: 'wol-4v4',
    seasonId: '42',
    teamType: 'random',
  },
  {
    expectedPath: '/data/sc2/league/1/4/1/5',
    leagueId: 'master',
    name: 'season 1',
    queueId: 'wol-4v4',
    seasonId: '1',
    teamType: 'random',
  },
];

describe('league', () => {
  test.each(leaguePathCases)(
    'should return the correct path for $name',
    ({ expectedPath, leagueId, queueId, seasonId, teamType }) => {
      const result = getLeagueData(seasonId, queueId, teamType, leagueId);

      expect(result.path).toBe(expectedPath);
    },
  );
});
