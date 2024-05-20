import { describe, it } from 'vitest';
import { base } from '../base';
import { itemTypeIndex, itemType } from './item-type';

describe.concurrent('itemTypeIndex', () => {
  it('should return the correct resource path', ({ expect }) => {
    const resource = itemTypeIndex();
    expect(resource.path).toBe(`${base}/item-type`);
  });
  it('should return the correct resource path', ({ expect }) => {
    const itemTypeSlug = 'some-item-type-slug';
    const resource = itemType(itemTypeSlug);
    expect(resource.path).toBe(`${base}/item-type/${itemTypeSlug}`);
  });
});
