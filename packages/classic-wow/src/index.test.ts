import { describe, expect, test } from 'vitest';
import * as classicWowModule from './index';
import { classicWow } from './index';

/**
 * Every endpoint helper that `export *` re-exports as a named export must also be reachable
 * on the `classicWow` namespace object. Without this, a helper can silently be missing from
 * the object while the named import still works.
 */
describe('classicWow namespace', () => {
  test('exposes every exported endpoint helper', () => {
    const namedExports = Object.entries(classicWowModule)
      .filter(([, value]) => typeof value === 'function')
      .map(([name]) => name)
      .toSorted((a, b) => a.localeCompare(b));

    expect(Object.keys(classicWow).toSorted((a, b) => a.localeCompare(b))).toEqual(namedExports);
  });

  test('exposes no helpers that are not exported', () => {
    const namedExports = new Set(Object.keys(classicWowModule));

    for (const key of Object.keys(classicWow)) {
      expect(namedExports.has(key)).toBe(true);
    }
  });

  test('is not empty and contains known helpers', () => {
    expect(Object.keys(classicWow).length).toBeGreaterThan(0);
    expect(classicWow.auctionHouseIndex).toBeTypeOf('function');
  });
});
