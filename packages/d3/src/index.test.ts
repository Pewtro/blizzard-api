import { describe, expect, test } from 'vitest';
import * as d3Module from './index';
import { d3 } from './index';

/**
 * Every endpoint helper that `export *` re-exports as a named export must also be reachable
 * on the `d3` namespace object. Without this, a helper can silently be missing from the
 * object while the named import still works.
 */
describe('d3 namespace', () => {
  test('exposes every exported endpoint helper', () => {
    const namedExports = Object.entries(d3Module)
      .filter(([, value]) => typeof value === 'function')
      .map(([name]) => name)
      .toSorted((a, b) => a.localeCompare(b));

    expect(Object.keys(d3).toSorted((a, b) => a.localeCompare(b))).toEqual(namedExports);
  });

  test('exposes no helpers that are not exported', () => {
    const namedExports = new Set(Object.keys(d3Module));

    for (const key of Object.keys(d3)) {
      expect(namedExports.has(key)).toBe(true);
    }
  });

  test('is not empty and contains known helpers', () => {
    expect(Object.keys(d3).length).toBeGreaterThan(0);
    expect(d3.item).toBeTypeOf('function');
  });
});
