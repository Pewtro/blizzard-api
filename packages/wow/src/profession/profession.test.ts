import { describe, it } from 'vitest';
import { base, mediaBase } from '../base';
import * as professionApi from './profession';

describe.concurrent('professionApi', () => {
  it('profession should return a resource object with the correct path and namespace', ({ expect }) => {
    const professionId = 123;
    const resource = professionApi.profession(professionId);

    expect(resource.path).toBe(`${base}/profession/${professionId}`);
    expect(resource.namespace).toBe('static');
  });

  it('professionIndex should return a resource object with the correct path and namespace', ({ expect }) => {
    const resource = professionApi.professionIndex();

    expect(resource.path).toBe(`${base}/profession/index`);
    expect(resource.namespace).toBe('static');
  });

  it('professionMedia should return a resource object with the correct path and namespace', ({ expect }) => {
    const professionId = 123;
    const resource = professionApi.professionMedia(professionId);

    expect(resource.path).toBe(`${mediaBase}/profession/${professionId}`);
    expect(resource.namespace).toBe('static');
  });

  it('professionSkillTier should return a resource object with the correct path and namespace', ({ expect }) => {
    const professionId = 123;
    const skillTierId = 456;
    const resource = professionApi.professionSkillTier(professionId, skillTierId);

    expect(resource.path).toBe(`${base}/profession/${professionId}/skill-tier/${skillTierId}`);
    expect(resource.namespace).toBe('static');
  });

  it('recipe should return a resource object with the correct path and namespace', ({ expect }) => {
    const recipeId = 123;
    const resource = professionApi.recipe(recipeId);

    expect(resource.path).toBe(`${base}/recipe/${recipeId}`);
    expect(resource.namespace).toBe('static');
  });

  it('recipeMedia should return a resource object with the correct path and namespace', ({ expect }) => {
    const recipeId = 123;
    const resource = professionApi.recipeMedia(recipeId);

    expect(resource.path).toBe(`${mediaBase}/recipe/${recipeId}`);
    expect(resource.namespace).toBe('static');
  });
});
