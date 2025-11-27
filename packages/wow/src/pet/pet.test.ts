import { wowBasePath, wowMediaBasePath } from '@blizzard-api/core';
import { describe, it } from 'vitest';
import { pet, petAbility, petAbilityIndex, petAbilityMedia, petIndex, petMedia } from './pet';

describe.concurrent('petApi', () => {
  it('pet should return a resource object with the correct path and namespace', ({ expect }) => {
    const petId = 123;
    const resource = pet(petId);

    expect(resource.path).toBe(`${wowBasePath}/pet/${petId}`);
    expect(resource.namespace).toBe('static');
  });

  it('petIndex should return a resource object with the correct path and namespace', ({ expect }) => {
    const resource = petIndex();

    expect(resource.path).toBe(`${wowBasePath}/pet/index`);
    expect(resource.namespace).toBe('static');
  });

  it('petMedia should return a resource object with the correct path and namespace', ({ expect }) => {
    const petId = 123;
    const resource = petMedia(petId);

    expect(resource.path).toBe(`${wowMediaBasePath}/pet/${petId}`);
    expect(resource.namespace).toBe('static');
  });

  it('petAbility should return a resource object with the correct path and namespace', ({ expect }) => {
    const petAbilityId = 123;
    const resource = petAbility(petAbilityId);

    expect(resource.path).toBe(`${wowBasePath}/pet-ability/${petAbilityId}`);
    expect(resource.namespace).toBe('static');
  });

  it('petAbilityIndex should return a resource object with the correct path and namespace', ({ expect }) => {
    const resource = petAbilityIndex();

    expect(resource.path).toBe(`${wowBasePath}/pet-ability/index`);
    expect(resource.namespace).toBe('static');
  });

  it('petAbilityMedia should return a resource object with the correct path and namespace', ({ expect }) => {
    const petAbilityId = 123;
    const resource = petAbilityMedia(petAbilityId);

    expect(resource.path).toBe(`${wowMediaBasePath}/pet-ability/${petAbilityId}`);
    expect(resource.namespace).toBe('static');
  });
});
