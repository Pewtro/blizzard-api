import { describe, expect, test } from 'vitest';
import * as hsModule from './index';
import { hs } from './index';

/**
 * Every endpoint helper that `export *` re-exports as a named export must also be reachable
 * on the `hs` namespace object. Without this, a helper can silently be missing from the
 * object while the named import still works.
 */
describe('hs namespace', () => {
  test('exposes every exported endpoint helper', () => {
    const namedExports = Object.entries(hsModule)
      .filter(([, value]) => typeof value === 'function')
      .map(([name]) => name)
      .toSorted((a, b) => a.localeCompare(b));

    expect(Object.keys(hs).toSorted((a, b) => a.localeCompare(b))).toEqual(namedExports);
  });

  test('exposes no helpers that are not exported', () => {
    const namedExports = new Set(Object.keys(hsModule));

    for (const key of Object.keys(hs)) {
      expect(namedExports.has(key)).toBe(true);
    }
  });

  test('is not empty and contains known helpers', () => {
    expect(Object.keys(hs).length).toBeGreaterThan(0);
    expect(hs.cardSearch).toBeTypeOf('function');
  });
});
