import { wowBasePath, wowMediaBasePath } from '@blizzard-api/core';
import { describe, expect, test } from 'vitest';
import { pet, petAbility, petAbilityIndex, petAbilityMedia, petIndex, petMedia } from './index';

describe('petApi', () => {
  test('pet should return a resource object with the correct path and namespace', () => {
    const resource = pet(123);

    expect(resource.path).toBe(`${wowBasePath}/pet/123`);
    expect(resource.namespace).toBe('static-forever');
  });

  test('petAbility should return a resource object with the correct path and namespace', () => {
    const resource = petAbility(123);

    expect(resource.path).toBe(`${wowBasePath}/pet-ability/123`);
    expect(resource.namespace).toBe('static-forever');
  });

  test('petAbilityIndex should return a resource object with the correct path and namespace', () => {
    const resource = petAbilityIndex();

    expect(resource.path).toBe(`${wowBasePath}/pet-ability/index`);
    expect(resource.namespace).toBe('static-forever');
  });

  test('petAbilityMedia should return a resource object with the correct path and namespace', () => {
    const resource = petAbilityMedia(123);

    expect(resource.path).toBe(`${wowMediaBasePath}/pet-ability/123`);
    expect(resource.namespace).toBe('static-forever');
  });

  test('petIndex should return a resource object with the correct path and namespace', () => {
    const resource = petIndex();

    expect(resource.path).toBe(`${wowBasePath}/pet/index`);
    expect(resource.namespace).toBe('static-forever');
  });

  test('petMedia should return a resource object with the correct path and namespace', () => {
    const resource = petMedia(123);

    expect(resource.path).toBe(`${wowMediaBasePath}/pet/123`);
    expect(resource.namespace).toBe('static-forever');
  });
});
