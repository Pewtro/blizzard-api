import { describe, it } from 'vitest';
import { base } from '../base';
import { follower } from './follower';

describe.concurrent('follower', () => {
  it('should return the correct resource path', ({ expect }) => {
    const followerSlug = 'some-follower-slug';
    const expectedPath = `${base}/follower/some-follower-slug`;

    const resource = follower(followerSlug);

    expect(resource.path).toBe(expectedPath);
  });
});
