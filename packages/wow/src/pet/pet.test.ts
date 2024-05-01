import { describe, it } from 'vitest';
import { base, mediaBase } from '../base';
import { petApi } from './pet';

describe.concurrent('petApi', () => {
  it('pet should return a resource object with the correct path and namespace', ({ expect }) => {
    const petId = 123;
    const resource = petApi.pet(petId);

    expect(resource.path).toBe(`${base}/pet/${petId}`);
    expect(resource.namespace).toBe('static');
  });

  it('petIndex should return a resource object with the correct path and namespace', ({ expect }) => {
    const resource = petApi.petIndex();

    expect(resource.path).toBe(`${base}/pet/index`);
    expect(resource.namespace).toBe('static');
  });

  it('petMedia should return a resource object with the correct path and namespace', ({ expect }) => {
    const petId = 123;
    const resource = petApi.petMedia(petId);

    expect(resource.path).toBe(`${mediaBase}/pet/${petId}`);
    expect(resource.namespace).toBe('static');
  });

  it('petAbility should return a resource object with the correct path and namespace', ({ expect }) => {
    const petAbilityId = 123;
    const resource = petApi.petAbility(petAbilityId);

    expect(resource.path).toBe(`${base}/pet-ability/${petAbilityId}`);
    expect(resource.namespace).toBe('static');
  });

  it('petAbilityIndex should return a resource object with the correct path and namespace', ({ expect }) => {
    const resource = petApi.petAbilityIndex();

    expect(resource.path).toBe(`${base}/pet-ability/index`);
    expect(resource.namespace).toBe('static');
  });

  it('petAbilityMedia should return a resource object with the correct path and namespace', ({ expect }) => {
    const petAbilityId = 123;
    const resource = petApi.petAbilityMedia(petAbilityId);

    expect(resource.path).toBe(`${mediaBase}/pet-ability/${petAbilityId}`);
    expect(resource.namespace).toBe('static');
  });
});
