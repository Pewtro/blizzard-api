import { describe, expect, test } from 'vitest';
import * as sc2Module from './index';
import { sc2 } from './index';

/**
 * Every endpoint helper and constant that `export *` re-exports as a named export must also
 * be reachable on the `sc2` namespace object. Without this, a helper can silently be missing
 * from the object while the named import still works.
 */
describe('sc2 namespace', () => {
  test('exposes every exported endpoint helper', () => {
    const namedExports = Object.entries(sc2Module)
      .filter(([, value]) => typeof value === 'function')
      .map(([name]) => name)
      .toSorted((a, b) => a.localeCompare(b));

    //`starcraftRegion` is a lookup map rather than a helper, so it is compared separately.
    const namespaceKeys = Object.keys(sc2)
      .filter((key) => key !== 'starcraftRegion')
      .toSorted((a, b) => a.localeCompare(b));

    expect(namespaceKeys).toEqual(namedExports);
  });

  test('exposes no helpers that are not exported', () => {
    const namedExports = new Set(Object.keys(sc2Module));

    for (const key of Object.keys(sc2)) {
      expect(namedExports.has(key)).toBe(true);
    }
  });

  test('is not empty and contains known helpers', () => {
    expect(Object.keys(sc2).length).toBeGreaterThan(0);
    expect(sc2.player).toBeTypeOf('function');
    expect(sc2.starcraftRegion).toEqual({ cn: 5, eu: 2, kr: 3, tw: 3, us: 1 });
  });

  test('exports the region map from the package root', async () => {
    const reexported = await import('./index');

    expect(reexported.starcraftRegion).toEqual({ cn: 5, eu: 2, kr: 3, tw: 3, us: 1 });
  });
});
