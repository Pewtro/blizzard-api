import { d3BasePath } from '@blizzard-api/core';
import { describe, test } from 'vitest';
import type { CharacterClass } from './types';
import { characterClass, skill } from './index';

describe('characterClass', () => {
  test('characterClass should return the correct resource path', ({ expect }) => {
    const characterClassSlug: CharacterClass = 'barbarian';
    const expectedPath = `${d3BasePath}/hero/${characterClassSlug}`;

    const resource = characterClass(characterClassSlug);

    expect(resource.path).toEqual(expectedPath);
  });
  test('skill should return the correct resource path', ({ expect }) => {
    const characterClassSlug: CharacterClass = 'barbarian';
    const skillSlug = 'charge';
    const expectedPath = `${d3BasePath}/hero/${characterClassSlug}/skill/${skillSlug}`;

    const resource = skill(characterClassSlug, skillSlug);

    expect(resource.path).toEqual(expectedPath);
  });
});
