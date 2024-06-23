import { describe, expectTypeOf, it } from 'vitest';
import type { ExtractResourceType, Resource } from './resource';

describe.concurrent('Resource', () => {
  it('should have the correct properties without search options', ({ expect }) => {
    type MyResource = Resource<{ id: number }>;
    const resource: MyResource = {
      namespace: 'static',
      path: '/path',
    };

    expectTypeOf(resource).toMatchTypeOf<MyResource>();
    expectTypeOf<ExtractResourceType<MyResource>>().toMatchTypeOf<{ id: number }>();
    expectTypeOf<ExtractResourceType<typeof resource>>().toMatchTypeOf<{ id: number }>();
    expect(resource).toMatchObject({
      namespace: 'static',
      path: '/path',
    });
  });

  it('should have the correct properties with search options', ({ expect }) => {
    type MyResource = Resource<{ id: number }, { name: string }>;
    const resource: MyResource = {
      namespace: 'static',
      parameters: { name: 'name' },
      path: '/path',
    };

    expectTypeOf(resource).toMatchTypeOf<MyResource>();
    expectTypeOf<ExtractResourceType<MyResource>>().toMatchTypeOf<{ id: number }>();
    expectTypeOf<ExtractResourceType<typeof resource>>().toMatchTypeOf<{ id: number }>();
    expect(resource).toMatchObject({
      namespace: 'static',
      parameters: { name: 'name' },
      path: '/path',
    });
  });

  it('should have the correct properties with token', ({ expect }) => {
    type MyResource = Resource<{ id: number }, object, true>;
    const resource: MyResource = {
      namespace: 'static',
      path: '/path',
      token: 'token',
    };

    expectTypeOf(resource).toMatchTypeOf<MyResource>();
    expectTypeOf<ExtractResourceType<MyResource>>().toMatchTypeOf<{ id: number }>();
    expectTypeOf<ExtractResourceType<typeof resource>>().toMatchTypeOf<{ id: number }>();
    expect(resource).toMatchObject({
      namespace: 'static',
      path: '/path',
      token: 'token',
    });
  });

  it('should have the correct properties with token and search', ({ expect }) => {
    type MyResource = Resource<{ id: number }, { name: string }, true>;
    const resource: MyResource = {
      namespace: 'static',
      parameters: { name: 'name' },
      path: '/path',
      token: 'token',
    };

    expectTypeOf(resource).toMatchTypeOf<MyResource>();
    expectTypeOf<ExtractResourceType<MyResource>>().toMatchTypeOf<{ id: number }>();
    expectTypeOf<ExtractResourceType<typeof resource>>().toMatchTypeOf<{ id: number }>();
    expect(resource).toMatchObject({
      namespace: 'static',
      parameters: { name: 'name' },
      path: '/path',
      token: 'token',
    });
  });
});
