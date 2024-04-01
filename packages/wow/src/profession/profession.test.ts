import { describe, it, expect } from 'vitest';
import { base, mediaBase } from '../base';
import { professionApi } from './profession';

describe('professionApi', () => {
  it('profession should return a resource object with the correct path and namespace', () => {
    const professionId = 123;
    const resource = professionApi.profession(professionId);

    expect(resource.path).toBe(`${base}/profession/${professionId}`);
    expect(resource.namespace).toBe('static');
  });

  it('professionIndex should return a resource object with the correct path and namespace', () => {
    const resource = professionApi.professionIndex();

    expect(resource.path).toBe(`${base}/profession/index`);
    expect(resource.namespace).toBe('static');
  });

  it('professionMedia should return a resource object with the correct path and namespace', () => {
    const professionId = 123;
    const resource = professionApi.professionMedia(professionId);

    expect(resource.path).toBe(`${mediaBase}/profession/${professionId}`);
    expect(resource.namespace).toBe('static');
  });

  it('professionSkillTier should return a resource object with the correct path and namespace', () => {
    const professionId = 123;
    const skillTierId = 456;
    const resource = professionApi.professionSkillTier(professionId, skillTierId);

    expect(resource.path).toBe(`${base}/profession/${professionId}/skill-tier/${skillTierId}`);
    expect(resource.namespace).toBe('static');
  });

  it('recipe should return a resource object with the correct path and namespace', () => {
    const recipeId = 123;
    const resource = professionApi.recipe(recipeId);

    expect(resource.path).toBe(`${base}/recipe/${recipeId}`);
    expect(resource.namespace).toBe('static');
  });

  it('recipeMedia should return a resource object with the correct path and namespace', () => {
    const recipeId = 123;
    const resource = professionApi.recipeMedia(recipeId);

    expect(resource.path).toBe(`${mediaBase}/recipe/${recipeId}`);
    expect(resource.namespace).toBe('static');
  });
});
