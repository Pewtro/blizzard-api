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
      namespace,
      path: `${base}/creature/123`,
    });
  });

  it('creatureDisplayMedia should return the correct resource information', ({ expect }) => {
    const resource = classicCreatureApi.creatureDisplayMedia(namespace, creatureDisplayId);
    expect(resource).toEqual({
      namespace,
      path: `${mediaBase}/creature-display/456`,
    });
  });

  it('creatureFamily should return the correct resource information', ({ expect }) => {
    const resource = classicCreatureApi.creatureFamily(namespace, creatureFamilyId);
    expect(resource).toEqual({
      namespace,
      path: `${base}/creature-family/789`,
    });
  });

  it('creatureFamilyIndex should return the correct resource information', ({ expect }) => {
    const resource = classicCreatureApi.creatureFamilyIndex(namespace);
    expect(resource).toEqual({
      namespace,
      path: `${base}/creature-family/index`,
    });
  });

  it('creatureFamilyMedia should return the correct resource information', ({ expect }) => {
    const resource = classicCreatureApi.creatureFamilyMedia(namespace, creatureFamilyId);
    expect(resource).toEqual({
      namespace,
      path: `${mediaBase}/creature-family/789`,
    });
  });

  it('creatureType should return the correct resource information', ({ expect }) => {
    const resource = classicCreatureApi.creatureType(namespace, creatureTypeId);
    expect(resource).toEqual({
      namespace,
      path: `${base}/creature-type/987`,
    });
  });

  it('creatureTypeIndex should return the correct resource information', ({ expect }) => {
    const resource = classicCreatureApi.creatureTypeIndex(namespace);
    expect(resource).toEqual({
      namespace,
      path: `${base}/creature-type/index`,
    });
  });

  it('creatureSearch should return the correct resource information', ({ expect }) => {
    const resource = classicCreatureApi.creatureSearch(namespace, {
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
      path: `${searchBase}/creature`,
    });
  });

  it('creatureSearch should return the correct resource information when orderby is an array', ({ expect }) => {
    const resource = classicCreatureApi.creatureSearch(namespace, {
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
      path: `${searchBase}/creature`,
    });
  });
});
