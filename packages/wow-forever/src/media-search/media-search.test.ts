import { wowSearchBasePath } from '@blizzard-api/core';
import { describe, expect, test } from 'vitest';
import { mediaSearch } from './index';

describe('mediaSearchApi', () => {
  test('mediaSearch should return a resource object with the correct path and namespace', () => {
    const resource = mediaSearch({ _page: 1, orderby: 'id', tags: 'achievement' });

    expect(resource.path).toBe(`${wowSearchBasePath}/media`);
    expect(resource.namespace).toBe('static-forever');
    expect(resource.parameters).toEqual({
      _page: 1,
      orderby: 'id',
      tags: 'achievement',
    });
  });

  test('mediaSearch should return the correct parameters when orderby is an array', () => {
    const resource = mediaSearch({ orderby: ['id', 'name'] });

    expect(resource.parameters).toEqual({
      _page: undefined,
      orderby: 'id,name',
      tags: undefined,
    });
  });
});
