import type { Resource } from '@blizzard-api/core';
import { base } from '../base';
import type { FollowerResponse } from './types';

export function follower(followerSlug: string): Resource<FollowerResponse> {
  return {
    path: `${base}/follower/${followerSlug}`,
  };
}
