import { describe, it, expectTypeOf } from 'vitest';
import type { Resource, ExtractResourceType } from './resource';

describe.concurrent('Resource', () => {
  it('should have the correct properties without search options', ({ expect }) => {
    type MyResource = Resource<{ id: number }>;
    const resource: MyResource = {
      path: '/path',
      namespace: 'static',
    };

    expectTypeOf(resource).toMatchTypeOf<MyResource>();
    expectTypeOf<ExtractResourceType<MyResource>>().toMatchTypeOf<{ id: number }>();
    expectTypeOf<ExtractResourceType<typeof resource>>().toMatchTypeOf<{ id: number }>();
    expect(resource).toMatchObject({
      path: '/path',
      namespace: 'static',
    });
  });

  it('should have the correct properties with search options', ({ expect }) => {
    type MyResource = Resource<{ id: number }, { name: string }>;
    const resource: MyResource = {
      path: '/path',
      namespace: 'static',
      parameters: { name: 'name' },
    };

    expectTypeOf(resource).toMatchTypeOf<MyResource>();
    expectTypeOf<ExtractResourceType<MyResource>>().toMatchTypeOf<{ id: number }>();
    expectTypeOf<ExtractResourceType<typeof resource>>().toMatchTypeOf<{ id: number }>();
    expect(resource).toMatchObject({
      path: '/path',
      namespace: 'static',
      parameters: { name: 'name' },
    });
  });

  it('should have the correct properties with token', ({ expect }) => {
    type MyResource = Resource<{ id: number }, object, true>;
    const resource: MyResource = {
      path: '/path',
      namespace: 'static',
      token: 'token',
    };

    expectTypeOf(resource).toMatchTypeOf<MyResource>();
    expectTypeOf<ExtractResourceType<MyResource>>().toMatchTypeOf<{ id: number }>();
    expectTypeOf<ExtractResourceType<typeof resource>>().toMatchTypeOf<{ id: number }>();
    expect(resource).toMatchObject({
      path: '/path',
      namespace: 'static',
      token: 'token',
    });
  });

  it('should have the correct properties with token and search', ({ expect }) => {
    type MyResource = Resource<{ id: number }, { name: string }, true>;
    const resource: MyResource = {
      path: '/path',
      namespace: 'static',
      parameters: { name: 'name' },
      token: 'token',
    };

    expectTypeOf(resource).toMatchTypeOf<MyResource>();
    expectTypeOf<ExtractResourceType<MyResource>>().toMatchTypeOf<{ id: number }>();
    expectTypeOf<ExtractResourceType<typeof resource>>().toMatchTypeOf<{ id: number }>();
    expect(resource).toMatchObject({
      path: '/path',
      namespace: 'static',
      parameters: { name: 'name' },
      token: 'token',
    });
  });
});
