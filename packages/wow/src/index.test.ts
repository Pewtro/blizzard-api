import { describe, expect, test } from 'vitest';
import * as wowModule from './index';
import { wow } from './index';

/**
 * Every endpoint helper that `export *` re-exports as a named export must also be reachable
 * on the `wow` namespace object. Without this, a helper can silently be missing from the
 * object (`wow.someHelper(...)` evaluates to `undefined`) while the named import still works.
 */
describe('wow namespace', () => {
  test('exposes every exported endpoint helper', () => {
    const namedExports = Object.entries(wowModule)
      .filter(([, value]) => typeof value === 'function')
      .map(([name]) => name)
      .toSorted((a, b) => a.localeCompare(b));

    expect(Object.keys(wow).toSorted((a, b) => a.localeCompare(b))).toEqual(namedExports);
  });

  test('exposes no helpers that are not exported', () => {
    const namedExports = new Set(Object.keys(wowModule));

    for (const key of Object.keys(wow)) {
      expect(namedExports.has(key)).toBe(true);
    }
  });

  test('is not empty and contains known helpers', () => {
    expect(Object.keys(wow).length).toBeGreaterThan(0);
    expect(wow.commodities).toBeTypeOf('function');
    expect(wow.talent).toBeTypeOf('function');
  });
});
