import { describe, expect, test } from 'vitest';
import * as wowForeverModule from './index';
import { wowForever } from './index';

/**
 * Every endpoint helper that `export *` re-exports as a named export must also be reachable
 * on the `wowForever` namespace object. Without this, a helper can silently be missing from the
 * object (`wowForever.someHelper(...)` evaluates to `undefined`) while the named import still works.
 */
describe('wowForever namespace', () => {
  test('exposes every exported endpoint helper', () => {
    const namedExports = Object.entries(wowForeverModule)
      .filter(([, value]) => typeof value === 'function')
      .map(([name]) => name)
      .toSorted((a, b) => a.localeCompare(b));

    expect(Object.keys(wowForever).toSorted((a, b) => a.localeCompare(b))).toEqual(namedExports);
  });

  test('exposes no helpers that are not exported', () => {
    const namedExports = new Set(Object.keys(wowForeverModule));

    for (const key of Object.keys(wowForever)) {
      expect(namedExports.has(key)).toBe(true);
    }
  });

  test('is not empty and contains known helpers', () => {
    expect(Object.keys(wowForever).length).toBeGreaterThan(0);
    expect(wowForever.mount).toBeTypeOf('function');
    expect(wowForever.spell).toBeTypeOf('function');
  });
});
