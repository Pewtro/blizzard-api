import { wowBasePath, wowMediaBasePath } from '@blizzard-api/core';
import { describe, expect, test } from 'vitest';
import { profession, professionIndex, professionMedia, professionSkillTier, recipe, recipeMedia } from './index';

describe('professionApi', () => {
  test('profession should return a resource object with the correct path and namespace', () => {
    const resource = profession(197);

    expect(resource.path).toBe(`${wowBasePath}/profession/197`);
    expect(resource.namespace).toBe('static-forever');
  });

  test('professionIndex should return a resource object with the correct path and namespace', () => {
    const resource = professionIndex();

    expect(resource.path).toBe(`${wowBasePath}/profession/index`);
    expect(resource.namespace).toBe('static-forever');
  });

  test('professionMedia should return a resource object with the correct path and namespace', () => {
    const resource = professionMedia(197);

    expect(resource.path).toBe(`${wowMediaBasePath}/profession/197`);
    expect(resource.namespace).toBe('static-forever');
  });

  test('professionSkillTier should return a resource object with the correct path and namespace', () => {
    const resource = professionSkillTier(197, 2948);

    expect(resource.path).toBe(`${wowBasePath}/profession/197/skill-tier/2948`);
    expect(resource.namespace).toBe('static-forever');
  });

  test('recipe should return a resource object with the correct path and namespace', () => {
    const resource = recipe(2359);

    expect(resource.path).toBe(`${wowBasePath}/recipe/2359`);
    expect(resource.namespace).toBe('static-forever');
  });

  test('recipeMedia should return a resource object with the correct path and namespace', () => {
    const resource = recipeMedia(2359);

    expect(resource.path).toBe(`${wowMediaBasePath}/recipe/2359`);
    expect(resource.namespace).toBe('static-forever');
  });
});
