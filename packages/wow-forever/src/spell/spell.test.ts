import { wowBasePath, wowMediaBasePath, wowSearchBasePath } from '@blizzard-api/core';
import { describe, expect, test } from 'vitest';
import { spell, spellMedia, spellSearch } from './index';

describe('spellApi', () => {
  test('spell should return a resource object with the correct path and namespace', () => {
    const resource = spell(123);

    expect(resource.path).toBe(`${wowBasePath}/spell/123`);
    expect(resource.namespace).toBe('static-forever');
  });

  test('spellMedia should return a resource object with the correct path and namespace', () => {
    const resource = spellMedia(123);

    expect(resource.path).toBe(`${wowMediaBasePath}/spell/123`);
    expect(resource.namespace).toBe('static-forever');
  });

  test('spellSearch should return a resource object with the correct path and namespace', () => {
    const resource = spellSearch({ _page: 1, locale: 'en_US', name: 'spell', orderby: 'name' });

    expect(resource.path).toBe(`${wowSearchBasePath}/spell`);
    expect(resource.namespace).toBe('static-forever');
    expect(resource.parameters).toEqual({
      _page: 1,
      'name.en_US': 'spell',
      orderby: 'name',
    });
  });

  test('spellSearch should return the correct parameters when orderby is an array', () => {
    const resource = spellSearch({ _page: 1, locale: 'en_US', name: 'spell', orderby: ['name', 'id'] });

    expect(resource.path).toBe(`${wowSearchBasePath}/spell`);
    expect(resource.parameters).toEqual({
      _page: 1,
      'name.en_US': 'spell',
      orderby: 'name,id',
    });
  });
});
