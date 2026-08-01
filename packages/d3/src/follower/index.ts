import type { Resource } from '@blizzard-api/core';
import { d3BasePath } from '@blizzard-api/core';
import type { Follower, FollowerResponse } from './types';

/**
 * Returns the follower information for the specified follower slug.
 * @param followerSlug The slug of the follower.
 * @returns The follower resource. See {@link FollowerResponse}.
 */
export function follower(followerSlug: Follower): Resource<FollowerResponse> {
  return {
    path: `${d3BasePath}/follower/${followerSlug}`,
  };
}
