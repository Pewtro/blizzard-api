import { describe, it, expect } from 'vitest';
import { base } from '../base';
import { mountApi } from './mount';

describe('mountApi', () => {
  it('mount should return a resource object with the correct path and namespace', () => {
    const mountId = 123;
    const resource = mountApi.mount(mountId);

    expect(resource.path).toBe(`${base}/mount/123`);
    expect(resource.namespace).toBe('static');
  });

  it('mountIndex should return a resource object with the correct path and namespace', () => {
    const resource = mountApi.mountIndex();

    expect(resource.path).toBe(`${base}/mount/index`);
    expect(resource.namespace).toBe('static');
  });
});
