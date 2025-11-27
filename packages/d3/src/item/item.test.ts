import { d3BasePath } from '@blizzard-api/core';
import { describe, it } from 'vitest';
import { item } from './item';

describe.concurrent('item', () => {
  it('should return the correct resource path', ({ expect }) => {
    const itemSlugAndId = '12345';
    const expectedPath = `${d3BasePath}/item/12345`;

    const resource = item(itemSlugAndId);

    expect(resource.path).toBe(expectedPath);
  });
});
