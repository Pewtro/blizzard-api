import { describe, it } from 'vitest';
import { base, searchBase } from '../base';
import { mount, mountIndex, mountSearch } from './mount';

describe.concurrent('mountApi', () => {
  it('mount should return a resource object with the correct path and namespace', ({ expect }) => {
    const mountId = 123;
    const resource = mount(mountId);

    expect(resource.path).toBe(`${base}/mount/123`);
    expect(resource.namespace).toBe('static');
  });

  it('mountIndex should return a resource object with the correct path and namespace', ({ expect }) => {
    const resource = mountIndex();

    expect(resource.path).toBe(`${base}/mount/index`);
    expect(resource.namespace).toBe('static');
  });

  it('mountSearch should return a resource object with the correct path and namespace', ({ expect }) => {
    const resource = mountSearch({
      _page: 1,
      locale: 'en_US',
      name: 'mount',
      orderby: 'name',
    });

    expect(resource.path).toBe(`${searchBase}/mount`);
    expect(resource.namespace).toBe('static');
    expect(resource.parameters).toEqual({
      _page: 1,
      'name.en_US': 'mount',
      orderby: 'name',
    });
  });

  it('mountSearch should return correct resource object when orderby is an array', ({ expect }) => {
    const resource = mountSearch({
      _page: 1,
      locale: 'en_US',
      name: 'mount',
      orderby: ['name', 'id'],
    });

    expect(resource.path).toBe(`${searchBase}/mount`);
    expect(resource.namespace).toBe('static');
    expect(resource.parameters).toEqual({
      _page: 1,
      'name.en_US': 'mount',
      orderby: 'name,id',
    });
  });
});
