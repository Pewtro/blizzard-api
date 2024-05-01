import { describe, it } from 'vitest';
import { base, searchBase } from '../base';
import { mountApi } from './mount';

describe.concurrent('mountApi', () => {
  it('mount should return a resource object with the correct path and namespace', ({ expect }) => {
    const mountId = 123;
    const resource = mountApi.mount(mountId);

    expect(resource.path).toBe(`${base}/mount/123`);
    expect(resource.namespace).toBe('static');
  });

  it('mountIndex should return a resource object with the correct path and namespace', ({ expect }) => {
    const resource = mountApi.mountIndex();

    expect(resource.path).toBe(`${base}/mount/index`);
    expect(resource.namespace).toBe('static');
  });

  it('mountSearch should return a resource object with the correct path and namespace', ({ expect }) => {
    const resource = mountApi.mountSearch({
      _page: 1,
      orderby: 'name',
      locale: 'en_US',
      name: 'mount',
    });

    expect(resource.path).toBe(`${searchBase}/mount`);
    expect(resource.namespace).toBe('static');
    expect(resource.parameters).toEqual({
      _page: 1,
      orderby: 'name',
      'name.en_US': 'mount',
    });
  });

  it('mountSearch should return correct resource object when orderby is an array', ({ expect }) => {
    const resource = mountApi.mountSearch({
      _page: 1,
      orderby: ['name', 'id'],
      locale: 'en_US',
      name: 'mount',
    });

    expect(resource.path).toBe(`${searchBase}/mount`);
    expect(resource.namespace).toBe('static');
    expect(resource.parameters).toEqual({
      _page: 1,
      orderby: 'name,id',
      'name.en_US': 'mount',
    });
  });
});
