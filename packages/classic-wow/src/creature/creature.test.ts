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

const namespaces = ['static-classic1x', 'static-classic', 'static-classicann'] as const;

describe('classicCreatureApi', () => {
  const creatureId = 123;
  const creatureDisplayId = 456;
  const creatureFamilyId = 789;
  const creatureTypeId = 987;

  test.each(namespaces)('creature should return the correct resource information in the %s namespace', (namespace) => {
    const resource = creature(namespace, creatureId);
    expect(resource).toEqual({
      namespace,
      path: `${wowBasePath}/creature/123`,
    });
  });

  test.each(namespaces)(
    'creatureDisplayMedia should return the correct resource information in the %s namespace',
    (namespace) => {
      const resource = creatureDisplayMedia(namespace, creatureDisplayId);
      expect(resource).toEqual({
        namespace,
        path: `${wowMediaBasePath}/creature-display/456`,
      });
    },
  );

  test.each(namespaces)(
    'creatureFamily should return the correct resource information in the %s namespace',
    (namespace) => {
      const resource = creatureFamily(namespace, creatureFamilyId);
      expect(resource).toEqual({
        namespace,
        path: `${wowBasePath}/creature-family/789`,
      });
    },
  );

  test.each(namespaces)(
    'creatureFamilyIndex should return the correct resource information in the %s namespace',
    (namespace) => {
      const resource = creatureFamilyIndex(namespace);
      expect(resource).toEqual({
        namespace,
        path: `${wowBasePath}/creature-family/index`,
      });
    },
  );

  test.each(namespaces)(
    'creatureFamilyMedia should return the correct resource information in the %s namespace',
    (namespace) => {
      const resource = creatureFamilyMedia(namespace, creatureFamilyId);
      expect(resource).toEqual({
        namespace,
        path: `${wowMediaBasePath}/creature-family/789`,
      });
    },
  );

  test.each(namespaces)(
    'creatureType should return the correct resource information in the %s namespace',
    (namespace) => {
      const resource = creatureType(namespace, creatureTypeId);
      expect(resource).toEqual({
        namespace,
        path: `${wowBasePath}/creature-type/987`,
      });
    },
  );

  test.each(namespaces)(
    'creatureTypeIndex should return the correct resource information in the %s namespace',
    (namespace) => {
      const resource = creatureTypeIndex(namespace);
      expect(resource).toEqual({
        namespace,
        path: `${wowBasePath}/creature-type/index`,
      });
    },
  );

  test.each(namespaces)(
    'creatureSearch should return the correct resource information in the %s namespace',
    (namespace) => {
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
    },
  );

  test.each(namespaces)(
    'creatureSearch should return the correct resource information when orderby is an array in the %s namespace',
    (namespace) => {
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
    },
  );
});
