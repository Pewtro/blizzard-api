import type { Resource } from '@blizzard-api/core';
import { describe, expect, it } from 'vitest';
import type { StarcraftRegion } from '../regions';
import { grandmasterLeaderboard, season } from './ladder';
import type { GrandmasterLeaderboardResponse, SeasonResponse } from './types';

describe('ladder', () => {
  describe('grandmasterLeaderboard', () => {
    it('should return the correct path for a given region', () => {
      const regionId: StarcraftRegion = 'us';
      const expected: Resource<GrandmasterLeaderboardResponse> = {
        path: `/sc2/ladder/grandmaster/1`,
      };
      const result = grandmasterLeaderboard(regionId);
      expect(result).toEqual(expected);
    });
  });

  describe('season', () => {
    it('should return the correct path for a given region', () => {
      const regionId: StarcraftRegion = 'eu';
      const expected: Resource<SeasonResponse> = {
        path: `/sc2/ladder/season/2`,
      };
      const result = season(regionId);
      expect(result).toEqual(expected);
    });
  });
});
