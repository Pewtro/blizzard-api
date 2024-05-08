import type { BlizzardNamespaces } from '@blizzard-api/core';
import { describe, it } from 'vitest';
import { base } from '../../../wow/src/base';
import { classicPowerTypeApi } from './power-type';

const namespace: BlizzardNamespaces = 'static-classic1x';

describe.concurrent('powerTypeApi', () => {
  it('powerType should return a resource object with the correct path and namespace', ({ expect }) => {
    const powerTypeId = 123;
    const resource = classicPowerTypeApi.powerType(namespace, powerTypeId);

    expect(resource.path).toBe(`${base}/power-type/${powerTypeId}`);
    expect(resource.namespace).toBe(namespace);
  });

  it('powerTypeIndex should return a resource object with the correct path and namespace', ({ expect }) => {
    const resource = classicPowerTypeApi.powerTypeIndex(namespace);

    expect(resource.path).toBe(`${base}/power-type/index`);
    expect(resource.namespace).toBe(namespace);
  });
});
