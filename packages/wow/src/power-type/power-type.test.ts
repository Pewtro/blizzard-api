import { wowBasePath } from '@blizzard-api/core';
import { describe, test } from 'vitest';
import { powerType, powerTypeIndex } from './power-type';

describe.concurrent('powerTypeApi', () => {
  test('powerType should return a resource object with the correct path and namespace', ({ expect }) => {
    const powerTypeId = 123;
    const resource = powerType(powerTypeId);

    expect(resource.path).toBe(`${wowBasePath}/power-type/${powerTypeId}`);
    expect(resource.namespace).toBe('static');
  });

  test('powerTypeIndex should return a resource object with the correct path and namespace', ({ expect }) => {
    const resource = powerTypeIndex();

    expect(resource.path).toBe(`${wowBasePath}/power-type/index`);
    expect(resource.namespace).toBe('static');
  });
});
