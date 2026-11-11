import { wowBasePath, wowMediaBasePath, wowSearchBasePath } from '@blizzard-api/core';
import { describe, expect, test } from 'vitest';
import {
  journalEncounter,
  journalEncounterIndex,
  journalEncounterSearch,
  journalExpansion,
  journalExpansionIndex,
  journalInstance,
  journalInstanceIndex,
  journalInstanceMedia,
} from './index';

describe('journalApi', () => {
  test('journalEncounter should return a resource object with the correct path and namespace', () => {
    const resource = journalEncounter(123);

    expect(resource.path).toBe(`${wowBasePath}/journal-encounter/123`);
    expect(resource.namespace).toBe('static-forever');
  });

  test('journalEncounterIndex should return a resource object with the correct path and namespace', () => {
    const resource = journalEncounterIndex();

    expect(resource.path).toBe(`${wowBasePath}/journal-encounter/index`);
    expect(resource.namespace).toBe('static-forever');
  });

  test('journalEncounterSearch should return a resource object with the correct path and parameters', () => {
    const resource = journalEncounterSearch({ _page: 1, instanceName: 'The Deadmines', locale: 'en_US' });

    expect(resource.path).toBe(`${wowSearchBasePath}/journal-encounter`);
    expect(resource.namespace).toBe('static-forever');
    expect(resource.parameters).toEqual({ _page: 1, 'instance.name.en_US': 'The Deadmines' });
  });

  test('journalExpansion should return a resource object with the correct path and namespace', () => {
    const resource = journalExpansion(123);

    expect(resource.path).toBe(`${wowBasePath}/journal-expansion/123`);
    expect(resource.namespace).toBe('static-forever');
  });

  test('journalExpansionIndex should return a resource object with the correct path and namespace', () => {
    const resource = journalExpansionIndex();

    expect(resource.path).toBe(`${wowBasePath}/journal-expansion/index`);
    expect(resource.namespace).toBe('static-forever');
  });

  test('journalInstance should return a resource object with the correct path and namespace', () => {
    const resource = journalInstance(123);

    expect(resource.path).toBe(`${wowBasePath}/journal-instance/123`);
    expect(resource.namespace).toBe('static-forever');
  });

  test('journalInstanceIndex should return a resource object with the correct path and namespace', () => {
    const resource = journalInstanceIndex();

    expect(resource.path).toBe(`${wowBasePath}/journal-instance/index`);
    expect(resource.namespace).toBe('static-forever');
  });

  test('journalInstanceMedia should return a resource object with the correct path and namespace', () => {
    const resource = journalInstanceMedia(123);

    expect(resource.path).toBe(`${wowMediaBasePath}/journal-instance/123`);
    expect(resource.namespace).toBe('static-forever');
  });
});
