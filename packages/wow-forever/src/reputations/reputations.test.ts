import { wowBasePath } from '@blizzard-api/core';
import { describe, expect, test } from 'vitest';
import { reputationFaction, reputationFactionIndex, reputationTiers, reputationTiersIndex } from './index';

describe('reputationsApi', () => {
  test('reputationFaction should return a resource object with the correct path and namespace', () => {
    const resource = reputationFaction(892);

    expect(resource.path).toBe(`${wowBasePath}/reputation-faction/892`);
    expect(resource.namespace).toBe('static-forever');
  });

  test('reputationFactionIndex should return a resource object with the correct path and namespace', () => {
    const resource = reputationFactionIndex();

    expect(resource.path).toBe(`${wowBasePath}/reputation-faction/index`);
    expect(resource.namespace).toBe('static-forever');
  });

  test('reputationTiers should return a resource object with the correct path and namespace', () => {
    const resource = reputationTiers(0);

    expect(resource.path).toBe(`${wowBasePath}/reputation-tiers/0`);
    expect(resource.namespace).toBe('static-forever');
  });

  test('reputationTiersIndex should return a resource object with the correct path and namespace', () => {
    const resource = reputationTiersIndex();

    expect(resource.path).toBe(`${wowBasePath}/reputation-tiers/index`);
    expect(resource.namespace).toBe('static-forever');
  });
});
