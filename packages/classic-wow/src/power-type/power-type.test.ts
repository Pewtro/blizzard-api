import { wowBasePath } from '@blizzard-api/core';
import { describe, expect, test } from 'vitest';
import { powerType, powerTypeIndex } from './index';

const namespaces = ['static-classic1x', 'static-classic', 'static-classicann'] as const;

describe('powerTypeApi', () => {
  test.each(namespaces)(
    'powerType should return a resource object with the correct path and namespace in the %s namespace',
    (namespace) => {
      const powerTypeId = 123;
      const resource = powerType(namespace, powerTypeId);

      expect(resource.path).toBe(`${wowBasePath}/power-type/${powerTypeId}`);
      expect(resource.namespace).toBe(namespace);
    },
  );

  test.each(namespaces)(
    'powerTypeIndex should return a resource object with the correct path and namespace in the %s namespace',
    (namespace) => {
      const resource = powerTypeIndex(namespace);

      expect(resource.path).toBe(`${wowBasePath}/power-type/index`);
      expect(resource.namespace).toBe(namespace);
    },
  );
});
