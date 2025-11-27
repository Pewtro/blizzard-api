import {  wowBasePath } from '@blizzard-api/core';
import type {BlizzardNamespaces} from '@blizzard-api/core';
import { describe, it } from 'vitest';
import { powerType, powerTypeIndex } from './power-type';

const namespace: BlizzardNamespaces = 'static-classic1x';

describe.concurrent('powerTypeApi', () => {
  it('powerType should return a resource object with the correct path and namespace', ({ expect }) => {
    const powerTypeId = 123;
    const resource = powerType(namespace, powerTypeId);

    expect(resource.path).toBe(`${wowBasePath}/power-type/${powerTypeId}`);
    expect(resource.namespace).toBe(namespace);
  });

  it('powerTypeIndex should return a resource object with the correct path and namespace', ({ expect }) => {
    const resource = powerTypeIndex(namespace);

    expect(resource.path).toBe(`${wowBasePath}/power-type/index`);
    expect(resource.namespace).toBe(namespace);
  });
});
