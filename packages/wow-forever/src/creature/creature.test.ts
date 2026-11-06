import { wowBasePath, wowMediaBasePath, wowSearchBasePath } from '@blizzard-api/core';
import { describe, expect, test } from 'vitest';
import {
  creature,
  creatureDisplayMedia,
  creatureFamily,
  creatureFamilyIndex,
  creatureFamilyMedia,
  creatureSearch,
  creatureType,
  creatureTypeIndex,
} from './index';

describe('creatureApi', () => {
  const creatureId = 123;
  const creatureDisplayId = 456;
  const creatureFamilyId = 789;
  const creatureTypeId = 987;

  test('creature should return a resource object with the correct path and namespace', () => {
    const resource = creature(creatureId);

    expect(resource.path).toBe(`${wowBasePath}/creature/123`);
    expect(resource.namespace).toBe('static-forever');
  });

  test('creatureDisplayMedia should return a resource object with the correct path and namespace', () => {
    const resource = creatureDisplayMedia(creatureDisplayId);

    expect(resource.path).toBe(`${wowMediaBasePath}/creature-display/456`);
    expect(resource.namespace).toBe('static-forever');
  });

  test('creatureFamily should return a resource object with the correct path and namespace', () => {
    const resource = creatureFamily(creatureFamilyId);

    expect(resource.path).toBe(`${wowBasePath}/creature-family/789`);
    expect(resource.namespace).toBe('static-forever');
  });

  test('creatureFamilyIndex should return a resource object with the correct path and namespace', () => {
    const resource = creatureFamilyIndex();

    expect(resource.path).toBe(`${wowBasePath}/creature-family/index`);
    expect(resource.namespace).toBe('static-forever');
  });

  test('creatureFamilyMedia should return a resource object with the correct path and namespace', () => {
    const resource = creatureFamilyMedia(creatureFamilyId);

    expect(resource.path).toBe(`${wowMediaBasePath}/creature-family/789`);
    expect(resource.namespace).toBe('static-forever');
  });

  test('creatureType should return a resource object with the correct path and namespace', () => {
    const resource = creatureType(creatureTypeId);

    expect(resource.path).toBe(`${wowBasePath}/creature-type/987`);
    expect(resource.namespace).toBe('static-forever');
  });

  test('creatureTypeIndex should return a resource object with the correct path and namespace', () => {
    const resource = creatureTypeIndex();

    expect(resource.path).toBe(`${wowBasePath}/creature-type/index`);
    expect(resource.namespace).toBe('static-forever');
  });

  test('creatureSearch should return a resource object with the correct path and namespace', () => {
    const resource = creatureSearch({
      _page: 1,
      locale: 'en_US',
      name: 'creatureName',
      orderby: 'name',
    });

    expect(resource.path).toBe(`${wowSearchBasePath}/creature`);
    expect(resource.namespace).toBe('static-forever');
    expect(resource.parameters).toEqual({
      _page: 1,
      'name.en_US': 'creatureName',
      orderby: 'name',
    });
  });

  test('creatureSearch should return the correct parameters when orderby is an array', () => {
    const resource = creatureSearch({
      _page: 1,
      locale: 'en_US',
      name: 'creatureName',
      orderby: ['name', 'id'],
    });

    expect(resource.path).toBe(`${wowSearchBasePath}/creature`);
    expect(resource.namespace).toBe('static-forever');
    expect(resource.parameters).toEqual({
      _page: 1,
      'name.en_US': 'creatureName',
      orderby: 'name,id',
    });
  });
});
