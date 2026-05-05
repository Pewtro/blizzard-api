import { wowSearchBasePath } from '@blizzard-api/core';
import { describe, test } from 'vitest';
import {
  decor,
  decorIndex,
  decorSearch,
  fixture,
  fixtureHook,
  fixtureHookIndex,
  fixtureHookSearch,
  fixtureIndex,
  fixtureSearch,
  room,
  roomIndex,
  roomSearch,
} from './index';

describe.concurrent('housingDecor', () => {
  test('should return the correct resource for decor index', ({ expect }) => {
    const resource = decorIndex();

    expect(resource.path).toBe('/data/wow/decor/index');
    expect(resource.namespace).toBe('static');
  });

  test('should return the correct resource for a specific decor', ({ expect }) => {
    const decorId = 123;
    const resource = decor(decorId);

    expect(resource.path).toBe('/data/wow/decor/123');
    expect(resource.namespace).toBe('static');
  });

  test('should return the correct resource for decor search', ({ expect }) => {
    const resource = decorSearch({ _page: 1, locale: 'en_US', name: 'test decor' });

    expect(resource.path).toBe(`${wowSearchBasePath}/decor`);
    expect(resource.namespace).toBe('static');
    expect(resource.parameters).toEqual({
      _page: 1,
      'name.en_US': 'test decor',
    });
  });

  test('decor search should return correct resource object when orderby is an array', ({ expect }) => {
    const resource = decorSearch({
      _page: 1,
      locale: 'en_US',
      name: 'test decor',
      orderby: ['name', 'id'],
    });

    expect(resource.path).toBe(`${wowSearchBasePath}/decor`);
    expect(resource.namespace).toBe('static');
    expect(resource.parameters).toEqual({
      _page: 1,
      'name.en_US': 'test decor',
      orderby: 'name,id',
    });
  });

  test('should return the correct resource for fixture index', ({ expect }) => {
    const resource = fixtureIndex();

    expect(resource.path).toBe('/data/wow/fixture/index');
    expect(resource.namespace).toBe('static');
  });

  test('should return the correct resource for a specific fixture', ({ expect }) => {
    const fixtureId = 123;
    const resource = fixture(fixtureId);

    expect(resource.path).toBe('/data/wow/fixture/123');
    expect(resource.namespace).toBe('static');
  });

  test('should return the correct resource for fixture search', ({ expect }) => {
    const resource = fixtureSearch({ _page: 1, locale: 'en_US', name: 'test fixture' });

    expect(resource.path).toBe(`${wowSearchBasePath}/fixture`);
    expect(resource.namespace).toBe('static');
    expect(resource.parameters).toEqual({
      _page: 1,
      'name.en_US': 'test fixture',
    });
  });

  test('fixture search should return correct resource object when orderby is an array', ({ expect }) => {
    const resource = fixtureSearch({
      _page: 1,
      locale: 'en_US',
      name: 'test fixture',
      orderby: ['name', 'id'],
    });

    expect(resource.path).toBe(`${wowSearchBasePath}/fixture`);
    expect(resource.namespace).toBe('static');
    expect(resource.parameters).toEqual({
      _page: 1,
      'name.en_US': 'test fixture',
      orderby: 'name,id',
    });
  });

  test('should return the correct resource for fixture hook index', ({ expect }) => {
    const resource = fixtureHookIndex();

    expect(resource.path).toBe('/data/wow/fixture-hook/index');
    expect(resource.namespace).toBe('static');
  });

  test('should return the correct resource for a specific fixture hook', ({ expect }) => {
    const fixtureHookId = 123;
    const resource = fixtureHook(fixtureHookId);

    expect(resource.path).toBe('/data/wow/fixture-hook/123');
    expect(resource.namespace).toBe('static');
  });

  test('should return the correct resource for fixture hook search', ({ expect }) => {
    const resource = fixtureHookSearch({ _page: 1, locale: 'en_US', name: 'test fixture hook' });

    expect(resource.path).toBe(`${wowSearchBasePath}/fixture-hook`);
    expect(resource.namespace).toBe('static');
    expect(resource.parameters).toEqual({
      _page: 1,
      'name.en_US': 'test fixture hook',
    });
  });

  test('fixture hook search should return correct resource object when orderby is an array', ({ expect }) => {
    const resource = fixtureHookSearch({
      _page: 1,
      locale: 'en_US',
      name: 'test fixture hook',
      orderby: ['name', 'id'],
    });

    expect(resource.path).toBe(`${wowSearchBasePath}/fixture-hook`);
    expect(resource.namespace).toBe('static');
    expect(resource.parameters).toEqual({
      _page: 1,
      'name.en_US': 'test fixture hook',
      orderby: 'name,id',
    });
  });

  test('should return the correct resource for room index', ({ expect }) => {
    const resource = roomIndex();

    expect(resource.path).toBe('/data/wow/room/index');
    expect(resource.namespace).toBe('static');
  });

  test('should return the correct resource for a specific room', ({ expect }) => {
    const roomId = 123;
    const resource = room(roomId);

    expect(resource.path).toBe('/data/wow/room/123');
    expect(resource.namespace).toBe('static');
  });

  test('should return the correct resource for room search', ({ expect }) => {
    const resource = roomSearch({ _page: 1, locale: 'en_US', name: 'test room' });

    expect(resource.path).toBe(`${wowSearchBasePath}/room`);
    expect(resource.namespace).toBe('static');
    expect(resource.parameters).toEqual({
      _page: 1,
      'name.en_US': 'test room',
    });
  });

  test('room search should return correct resource object when orderby is an array', ({ expect }) => {
    const resource = roomSearch({
      _page: 1,
      locale: 'en_US',
      name: 'test room',
      orderby: ['name', 'id'],
    });

    expect(resource.path).toBe(`${wowSearchBasePath}/room`);
    expect(resource.namespace).toBe('static');
    expect(resource.parameters).toEqual({
      _page: 1,
      'name.en_US': 'test room',
      orderby: 'name,id',
    });
  });
});
