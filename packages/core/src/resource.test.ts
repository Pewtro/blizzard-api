import { describe, it, expect, expectTypeOf } from 'vitest';
import type { Resource, ExtractResourceType } from './resource';

describe('Resource', () => {
  it('should have the correct properties', () => {
    type MyResource = Resource<{ id: number }>;
    const resource: MyResource = {
      path: '/path',
      namespace: 'static',
      parameters: { id: 1 },
    };

    expectTypeOf(resource).toMatchTypeOf<MyResource>();
    expectTypeOf<ExtractResourceType<MyResource>>().toMatchTypeOf<{ id: number }>();
    expectTypeOf<ExtractResourceType<typeof resource>>().toMatchTypeOf<{ id: number }>();
    expect(resource).toMatchObject({
      path: '/path',
      namespace: 'static',
      parameters: { id: 1 },
    });
  });
});
