import { d3BasePath } from '@blizzard-api/core';
import { describe, test } from 'vitest';
import type { Follower } from './types';
import { follower } from './index';

describe('follower', () => {
  test('should return the correct resource path', ({ expect }) => {
    const followerSlug: Follower = 'enchantress';
    const expectedPath = `${d3BasePath}/follower/enchantress`;

    const resource = follower(followerSlug);

    expect(resource.path).toBe(expectedPath);
  });
});
