import type { Resource } from '@blizzard-api/core';
import { base } from '../base';
import type { FollowerResponse } from './types';

/**
 * Returns the follower information for the specified follower slug.
 * @param followerSlug The slug of the follower.
 * @returns The follower resource. See {@link FollowerResponse}.
 */
export function follower(followerSlug: string): Resource<FollowerResponse> {
  return {
    path: `${base}/follower/${followerSlug}`,
  };
}
