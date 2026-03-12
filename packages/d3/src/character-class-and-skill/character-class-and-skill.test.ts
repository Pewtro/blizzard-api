import { d3BasePath } from '@blizzard-api/core';
import { describe, test } from 'vitest';
import { characterClass, skill } from './character-class-and-skill';

describe.concurrent('characterClass', () => {
  test('returns the correct resource path', ({ expect }) => {
    const characterClassSlug = 'warrior';
    const expectedPath = `${d3BasePath}/character-class/warrior`;

    const resource = characterClass(characterClassSlug);

    expect(resource.path).toEqual(expectedPath);
  });
  test('returns the correct resource path', ({ expect }) => {
    const characterClassSlug = 'warrior';
    const skillSlug = 'charge';
    const expectedPath = `${d3BasePath}/hero/warrior/skill/charge`;

    const resource = skill(characterClassSlug, skillSlug);

    expect(resource.path).toEqual(expectedPath);
  });
});
