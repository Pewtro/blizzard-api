import { wowBasePath, wowMediaBasePath } from '@blizzard-api/core';
import { describe, test } from 'vitest';
import { profession, professionIndex, professionMedia, professionSkillTier, recipe, recipeMedia } from './profession';

describe.concurrent('professionApi', () => {
  test('profession should return a resource object with the correct path and namespace', ({ expect }) => {
    const professionId = 123;
    const resource = profession(professionId);

    expect(resource.path).toBe(`${wowBasePath}/profession/${professionId}`);
    expect(resource.namespace).toBe('static');
  });

  test('professionIndex should return a resource object with the correct path and namespace', ({ expect }) => {
    const resource = professionIndex();

    expect(resource.path).toBe(`${wowBasePath}/profession/index`);
    expect(resource.namespace).toBe('static');
  });

  test('professionMedia should return a resource object with the correct path and namespace', ({ expect }) => {
    const professionId = 123;
    const resource = professionMedia(professionId);

    expect(resource.path).toBe(`${wowMediaBasePath}/profession/${professionId}`);
    expect(resource.namespace).toBe('static');
  });

  test('professionSkillTier should return a resource object with the correct path and namespace', ({ expect }) => {
    const professionId = 123;
    const skillTierId = 456;
    const resource = professionSkillTier(professionId, skillTierId);

    expect(resource.path).toBe(`${wowBasePath}/profession/${professionId}/skill-tier/${skillTierId}`);
    expect(resource.namespace).toBe('static');
  });

  test('recipe should return a resource object with the correct path and namespace', ({ expect }) => {
    const recipeId = 123;
    const resource = recipe(recipeId);

    expect(resource.path).toBe(`${wowBasePath}/recipe/${recipeId}`);
    expect(resource.namespace).toBe('static');
  });

  test('recipeMedia should return a resource object with the correct path and namespace', ({ expect }) => {
    const recipeId = 123;
    const resource = recipeMedia(recipeId);

    expect(resource.path).toBe(`${wowMediaBasePath}/recipe/${recipeId}`);
    expect(resource.namespace).toBe('static');
  });
});
