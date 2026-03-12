import { d3BasePath } from '@blizzard-api/core';
import { describe, test } from 'vitest';
import { act, actIndex } from './act';

describe.concurrent('act', () => {
  test('should return the act resource', ({ expect }) => {
    const resource = act(1);
    expect(resource.path).toBe(`${d3BasePath}/act/1`);
  });
  test('should return the act index resource', ({ expect }) => {
    const resource = actIndex();
    expect(resource.path).toBe(`${d3BasePath}/act`);
  });
});
