import { wowBasePath, wowMediaBasePath, wowSearchBasePath } from '@blizzard-api/core';
import { describe, test } from 'vitest';
import {
  creature,
  creatureDisplayMedia,
  creatureFamily,
  creatureFamilyIndex,
  creatureFamilyMedia,
  creatureSearch,
  creatureType,
  creatureTypeIndex,
} from './creature';

describe.concurrent('classicCreatureApi', () => {
  const namespace = 'static-classic';
  const creatureId = 123;
  const creatureDisplayId = 456;
  const creatureFamilyId = 789;
  const creatureTypeId = 987;

  test('creature should return the correct resource information', ({ expect }) => {
    const resource = creature(namespace, creatureId);
    expect(resource).toEqual({
      namespace,
      path: `${wowBasePath}/creature/123`,
    });
  });

  test('creatureDisplayMedia should return the correct resource information', ({ expect }) => {
    const resource = creatureDisplayMedia(namespace, creatureDisplayId);
    expect(resource).toEqual({
      namespace,
      path: `${wowMediaBasePath}/creature-display/456`,
    });
  });

  test('creatureFamily should return the correct resource information', ({ expect }) => {
    const resource = creatureFamily(namespace, creatureFamilyId);
    expect(resource).toEqual({
      namespace,
      path: `${wowBasePath}/creature-family/789`,
    });
  });

  test('creatureFamilyIndex should return the correct resource information', ({ expect }) => {
    const resource = creatureFamilyIndex(namespace);
    expect(resource).toEqual({
      namespace,
      path: `${wowBasePath}/creature-family/index`,
    });
  });

  test('creatureFamilyMedia should return the correct resource information', ({ expect }) => {
    const resource = creatureFamilyMedia(namespace, creatureFamilyId);
    expect(resource).toEqual({
      namespace,
      path: `${wowMediaBasePath}/creature-family/789`,
    });
  });

  test('creatureType should return the correct resource information', ({ expect }) => {
    const resource = creatureType(namespace, creatureTypeId);
    expect(resource).toEqual({
      namespace,
      path: `${wowBasePath}/creature-type/987`,
    });
  });

  test('creatureTypeIndex should return the correct resource information', ({ expect }) => {
    const resource = creatureTypeIndex(namespace);
    expect(resource).toEqual({
      namespace,
      path: `${wowBasePath}/creature-type/index`,
    });
  });

  test('creatureSearch should return the correct resource information', ({ expect }) => {
    const resource = creatureSearch(namespace, {
      _page: 1,
      locale: 'en_US',
      name: 'creatureName',
      orderby: 'name',
    });
    expect(resource).toEqual({
      namespace,
      parameters: {
        _page: 1,
        'name.en_US': 'creatureName',
        orderby: 'name',
      },
      path: `${wowSearchBasePath}/creature`,
    });
  });

  test('creatureSearch should return the correct resource information when orderby is an array', ({ expect }) => {
    const resource = creatureSearch(namespace, {
      _page: 1,
      locale: 'en_US',
      name: 'creatureName',
      orderby: ['name', 'id'],
    });
    expect(resource).toEqual({
      namespace,
      parameters: {
        _page: 1,
        'name.en_US': 'creatureName',
        orderby: 'name,id',
      },
      path: `${wowSearchBasePath}/creature`,
    });
  });
});
