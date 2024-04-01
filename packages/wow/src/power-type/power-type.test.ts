import { describe, it, expect } from 'vitest';
import { base } from '../base';
import { powerTypeApi } from './power-type';

describe('powerTypeApi', () => {
  it('powerType should return a resource object with the correct path and namespace', () => {
    const powerTypeId = 123;
    const resource = powerTypeApi.powerType(powerTypeId);

    expect(resource.path).toBe(`${base}/power-type/${powerTypeId}`);
    expect(resource.namespace).toBe('static');
  });

  it('powerTypeIndex should return a resource object with the correct path and namespace', () => {
    const resource = powerTypeApi.powerTypeIndex();

    expect(resource.path).toBe(`${base}/power-type/index`);
    expect(resource.namespace).toBe('static');
  });
});
