import { describe, it } from 'vitest';
import { base, mediaBase, searchBase } from '../base';
import { spell, spellMedia, spellSearch } from './spell';

describe.concurrent('spellApi', () => {
  it('spell should return a resource object with the correct path and namespace', ({ expect }) => {
    const spellId = 456;
    const resource = spell(spellId);

    expect(resource.path).toBe(`${base}/spell/${spellId}`);
    expect(resource.namespace).toBe('static');
  });

  it('spellMedia should return a resource object with the correct path and namespace', ({ expect }) => {
    const spellId = 789;
    const resource = spellMedia(spellId);

    expect(resource.path).toBe(`${mediaBase}/spell/${spellId}`);
    expect(resource.namespace).toBe('static');
  });

  it('spellSearch should return a resource object with the correct path, namespace and parameters', ({ expect }) => {
    const resource = spellSearch({
      _page: 1,
      locale: 'en_US',
      name: 'Fireball',
      orderby: 'name',
    });

    expect(resource.path).toBe(`${searchBase}/spell`);
    expect(resource.namespace).toBe('static');
    expect(resource.parameters).toEqual({
      _page: 1,
      'name.en_US': 'Fireball',
      orderby: 'name',
    });
  });

  it('spellSearch should return correct resource object when orderby is an array', ({ expect }) => {
    const resource = spellSearch({
      _page: 1,
      locale: 'en_US',
      name: 'Fireball',
      orderby: ['name', 'id'],
    });

    expect(resource.path).toBe(`${searchBase}/spell`);
    expect(resource.namespace).toBe('static');
    expect(resource.parameters).toEqual({
      _page: 1,
      'name.en_US': 'Fireball',
      orderby: 'name,id',
    });
  });
});
