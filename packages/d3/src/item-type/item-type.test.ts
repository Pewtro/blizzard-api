import { d3BasePath } from '@blizzard-api/core';
import { describe, it } from 'vitest';
import { itemType, itemTypeIndex } from './item-type';

describe.concurrent('itemTypeIndex', () => {
  it('should return the correct resource path', ({ expect }) => {
    const resource = itemTypeIndex();
    expect(resource.path).toBe(`${d3BasePath}/item-type`);
  });
  it('should return the correct resource path', ({ expect }) => {
    const itemTypeSlug = 'some-item-type-slug';
    const resource = itemType(itemTypeSlug);
    expect(resource.path).toBe(`${d3BasePath}/item-type/${itemTypeSlug}`);
  });
});
