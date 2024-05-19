import { describe, it } from 'vitest';
import { base, mediaBase, searchBase } from '../../../wow/src/base';
import * as classicCreatureApi from './creature';

describe.concurrent('classicCreatureApi', () => {
  const namespace = 'static-classic';
  const creatureId = 123;
  const creatureDisplayId = 456;
  const creatureFamilyId = 789;
  const creatureTypeId = 987;

  it('creature should return the correct resource information', ({ expect }) => {
    const resource = classicCreatureApi.creature(namespace, creatureId);
    expect(resource).toEqual({
      path: `${base}/creature/123`,
      namespace,
    });
  });

  it('creatureDisplayMedia should return the correct resource information', ({ expect }) => {
    const resource = classicCreatureApi.creatureDisplayMedia(namespace, creatureDisplayId);
    expect(resource).toEqual({
      path: `${mediaBase}/creature-display/456`,
      namespace,
    });
  });

  it('creatureFamily should return the correct resource information', ({ expect }) => {
    const resource = classicCreatureApi.creatureFamily(namespace, creatureFamilyId);
    expect(resource).toEqual({
      path: `${base}/creature-family/789`,
      namespace,
    });
  });

  it('creatureFamilyIndex should return the correct resource information', ({ expect }) => {
    const resource = classicCreatureApi.creatureFamilyIndex(namespace);
    expect(resource).toEqual({
      path: `${base}/creature-family/index`,
      namespace,
    });
  });

  it('creatureFamilyMedia should return the correct resource information', ({ expect }) => {
    const resource = classicCreatureApi.creatureFamilyMedia(namespace, creatureFamilyId);
    expect(resource).toEqual({
      path: `${mediaBase}/creature-family/789`,
      namespace,
    });
  });

  it('creatureType should return the correct resource information', ({ expect }) => {
    const resource = classicCreatureApi.creatureType(namespace, creatureTypeId);
    expect(resource).toEqual({
      path: `${base}/creature-type/987`,
      namespace,
    });
  });

  it('creatureTypeIndex should return the correct resource information', ({ expect }) => {
    const resource = classicCreatureApi.creatureTypeIndex(namespace);
    expect(resource).toEqual({
      path: `${base}/creature-type/index`,
      namespace,
    });
  });

  it('creatureSearch should return the correct resource information', ({ expect }) => {
    const resource = classicCreatureApi.creatureSearch(namespace, {
      _page: 1,
      orderby: 'name',
      locale: 'en_US',
      name: 'creatureName',
    });
    expect(resource).toEqual({
      path: `${searchBase}/creature`,
      namespace,
      parameters: {
        _page: 1,
        orderby: 'name',
        'name.en_US': 'creatureName',
      },
    });
  });

  it('creatureSearch should return the correct resource information when orderby is an array', ({ expect }) => {
    const resource = classicCreatureApi.creatureSearch(namespace, {
      _page: 1,
      orderby: ['name', 'id'],
      locale: 'en_US',
      name: 'creatureName',
    });
    expect(resource).toEqual({
      path: `${searchBase}/creature`,
      namespace,
      parameters: {
        _page: 1,
        orderby: 'name,id',
        'name.en_US': 'creatureName',
      },
    });
  });
});
