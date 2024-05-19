import { describe, it } from 'vitest';
import { base, mediaBase, searchBase } from '../base';
import * as spellApi from './spell';

describe.concurrent('spellApi', () => {
  it('spell should return a resource object with the correct path and namespace', ({ expect }) => {
    const spellId = 456;
    const resource = spellApi.spell(spellId);

    expect(resource.path).toBe(`${base}/spell/${spellId}`);
    expect(resource.namespace).toBe('static');
  });

  it('spellMedia should return a resource object with the correct path and namespace', ({ expect }) => {
    const spellId = 789;
    const resource = spellApi.spellMedia(spellId);

    expect(resource.path).toBe(`${mediaBase}/spell/${spellId}`);
    expect(resource.namespace).toBe('static');
  });

  it('spellSearch should return a resource object with the correct path, namespace and parameters', ({ expect }) => {
    const resource = spellApi.spellSearch({
      _page: 1,
      orderby: 'name',
      name: 'Fireball',
      locale: 'en_US',
    });

    expect(resource.path).toBe(`${searchBase}/spell`);
    expect(resource.namespace).toBe('static');
    expect(resource.parameters).toEqual({
      _page: 1,
      orderby: 'name',
      'name.en_US': 'Fireball',
    });
  });

  it('spellSearch should return correct resource object when orderby is an array', ({ expect }) => {
    const resource = spellApi.spellSearch({
      _page: 1,
      orderby: ['name', 'id'],
      name: 'Fireball',
      locale: 'en_US',
    });

    expect(resource.path).toBe(`${searchBase}/spell`);
    expect(resource.namespace).toBe('static');
    expect(resource.parameters).toEqual({
      _page: 1,
      orderby: 'name,id',
      'name.en_US': 'Fireball',
    });
  });
});
