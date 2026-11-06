import { wowBasePath } from '@blizzard-api/core';
import { describe, expect, test } from 'vitest';
import { pvpTalent, pvpTalentIndex, talent, talentIndex, talentTree, talentTreeIndex, talentTreeNodes } from './index';

describe('talentApi', () => {
  test('pvpTalent should return a resource object with the correct path and namespace', () => {
    const resource = pvpTalent(123);

    expect(resource.path).toBe(`${wowBasePath}/pvp-talent/123`);
    expect(resource.namespace).toBe('static-forever');
  });

  test('pvpTalentIndex should return a resource object with the correct path and namespace', () => {
    const resource = pvpTalentIndex();

    expect(resource.path).toBe(`${wowBasePath}/pvp-talent/index`);
    expect(resource.namespace).toBe('static-forever');
  });

  test('talent should return a resource object with the correct path and namespace', () => {
    const resource = talent(123);

    expect(resource.path).toBe(`${wowBasePath}/talent/123`);
    expect(resource.namespace).toBe('static-forever');
  });

  test('talentIndex should return a resource object with the correct path and namespace', () => {
    const resource = talentIndex();

    expect(resource.path).toBe(`${wowBasePath}/talent/index`);
    expect(resource.namespace).toBe('static-forever');
  });

  test('talentTree should return a resource object with the correct path and namespace', () => {
    const resource = talentTree(1082, 375);

    expect(resource.path).toBe(`${wowBasePath}/talent-tree/1082/playable-specialization/375`);
    expect(resource.namespace).toBe('static-forever');
  });

  test('talentTreeIndex should return a resource object with the correct path and namespace', () => {
    const resource = talentTreeIndex();

    expect(resource.path).toBe(`${wowBasePath}/talent-tree/index`);
    expect(resource.namespace).toBe('static-forever');
  });

  test('talentTreeNodes should return a resource object with the correct path and namespace', () => {
    const resource = talentTreeNodes(1089);

    expect(resource.path).toBe(`${wowBasePath}/talent-tree/1089`);
    expect(resource.namespace).toBe('static-forever');
  });
});
