import { describe, it } from 'vitest';
import { base } from '../base';
import { item } from './item';

describe.concurrent('item', () => {
  it('should return the correct resource path', ({ expect }) => {
    const itemSlugAndId = '12345';
    const expectedPath = `${base}/item/12345`;

    const resource = item(itemSlugAndId);

    expect(resource.path).toBe(expectedPath);
  });
});
