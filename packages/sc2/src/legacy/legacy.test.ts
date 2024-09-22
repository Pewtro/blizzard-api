import { describe, expect, it } from 'vitest';
import {
  legacyAchievements,
  legacyLadder,
  legacyLadders,
  legacyMatchHistory,
  legacyProfile,
  legacyRewards,
} from './legacy';

describe('legacy', () => {
  it('should generate correct path for legacyProfile', () => {
    const result = legacyProfile('us', 1, 123_456);
    expect(result.path).toBe('/sc2/legacy/profile/1/1/123456');
  });

  it('should generate correct path for legacyLadders', () => {
    const result = legacyLadders('eu', 2, 654_321);
    expect(result.path).toBe('/sc2/legacy/profile/2/2/654321/ladders');
  });

  it('should generate correct path for legacyMatchHistory', () => {
    const result = legacyMatchHistory('kr', 1, 111_111);
    expect(result.path).toBe('/sc2/legacy/profile/3/1/111111/matches');
  });

  it('should generate correct path for legacyLadder', () => {
    const result = legacyLadder('tw', 222_222);
    expect(result.path).toBe('/sc2/legacy/ladder/3/222222');
  });

  it('should generate correct path for legacyAchievements', () => {
    const result = legacyAchievements('cn');
    expect(result.path).toBe('/sc2/legacy/data/achievements/5');
  });

  it('should generate correct path for legacyRewards', () => {
    const result = legacyRewards('us');
    expect(result.path).toBe('/sc2/legacy/data/rewards/1');
  });
});
