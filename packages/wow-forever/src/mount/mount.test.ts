import { wowBasePath, wowSearchBasePath } from '@blizzard-api/core';
import { describe, expect, test } from 'vitest';
import { mount, mountIndex, mountSearch } from './index';

describe('mountApi', () => {
  test('mount should return a resource object with the correct path and namespace', () => {
    const resource = mount(123);

    expect(resource.path).toBe(`${wowBasePath}/mount/123`);
    expect(resource.namespace).toBe('static-forever');
  });

  test('mountIndex should return a resource object with the correct path and namespace', () => {
    const resource = mountIndex();

    expect(resource.path).toBe(`${wowBasePath}/mount/index`);
    expect(resource.namespace).toBe('static-forever');
  });

  test('mountSearch should return a resource object with the correct path and namespace', () => {
    const resource = mountSearch({ _page: 1, locale: 'en_US', name: 'mount', orderby: 'name' });

    expect(resource.path).toBe(`${wowSearchBasePath}/mount`);
    expect(resource.namespace).toBe('static-forever');
    expect(resource.parameters).toEqual({
      _page: 1,
      'name.en_US': 'mount',
      orderby: 'name',
    });
  });

  test('mountSearch should return the correct parameters when orderby is an array', () => {
    const resource = mountSearch({ _page: 1, locale: 'en_US', name: 'mount', orderby: ['name', 'id'] });

    expect(resource.path).toBe(`${wowSearchBasePath}/mount`);
    expect(resource.parameters).toEqual({
      _page: 1,
      'name.en_US': 'mount',
      orderby: 'name,id',
    });
  });
});
