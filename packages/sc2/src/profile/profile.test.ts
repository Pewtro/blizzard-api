import type { Resource } from '@blizzard-api/core';
import { describe, expect, it } from 'vitest';
import { starcraftRegion } from '../regions';
import type { StarcraftRegion } from '../regions';
import { ladder, ladderSummary, metadata, profile, staticProfile } from './profile';
import type { LadderResponse, LadderSummaryResponse, MetadataResponse, StaticProfileResponse } from './types';

describe('profile', () => {
  const regionId: StarcraftRegion = 'us';
  const realmId = 1;
  const profileId = 12_345;
  const ladderId = 67_890;

  it('should generate correct path for staticProfile', () => {
    const result: Resource<StaticProfileResponse> = staticProfile(regionId);
    expect(result.path).toBe(`/sc2/static/profile/${starcraftRegion[regionId]}`);
  });

  it('should generate correct path for metadata', () => {
    const result: Resource<MetadataResponse> = metadata(regionId, realmId, profileId);
    expect(result.path).toBe(`/sc2/metadata/profile/${starcraftRegion[regionId]}/${realmId}/${profileId}`);
  });

  it('should generate correct path for profile', () => {
    const result: Resource<MetadataResponse> = profile(regionId, realmId, profileId);
    expect(result.path).toBe(`/sc2/profile/${starcraftRegion[regionId]}/${realmId}/${profileId}`);
  });

  it('should generate correct path for ladderSummary', () => {
    const result: Resource<LadderSummaryResponse> = ladderSummary(regionId, realmId, profileId);
    expect(result.path).toBe(`/sc2/profile/${starcraftRegion[regionId]}/${realmId}/${profileId}/ladder/summary`);
  });

  it('should generate correct path for ladder', () => {
    const result: Resource<LadderResponse> = ladder(regionId, realmId, profileId, ladderId);
    expect(result.path).toBe(`/sc2/profile/${starcraftRegion[regionId]}/${realmId}/${profileId}/ladder/${ladderId}`);
  });
});
