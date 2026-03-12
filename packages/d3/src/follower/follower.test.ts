import { d3BasePath } from '@blizzard-api/core';
import { describe, test } from 'vitest';
import { follower } from './follower';

describe.concurrent('follower', () => {
  test('should return the correct resource path', ({ expect }) => {
    const followerSlug = 'some-follower-slug';
    const expectedPath = `${d3BasePath}/follower/some-follower-slug`;

    const resource = follower(followerSlug);

    expect(resource.path).toBe(expectedPath);
  });
});
