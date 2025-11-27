import { d3BasePath } from '@blizzard-api/core';
import { describe, it } from 'vitest';
import { follower } from './follower';

describe.concurrent('follower', () => {
  it('should return the correct resource path', ({ expect }) => {
    const followerSlug = 'some-follower-slug';
    const expectedPath = `${d3BasePath}/follower/some-follower-slug`;

    const resource = follower(followerSlug);

    expect(resource.path).toBe(expectedPath);
  });
});
