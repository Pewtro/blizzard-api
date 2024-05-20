import { describe, it } from 'vitest';
import { base } from '../base';
import { characterClass, skill } from './character-class-and-skill';

describe.concurrent('characterClass', () => {
  it('returns the correct resource path', ({ expect }) => {
    const characterClassSlug = 'warrior';
    const expectedPath = `${base}/character-class/warrior`;

    const resource = characterClass(characterClassSlug);

    expect(resource.path).toEqual(expectedPath);
  });
  it('returns the correct resource path', ({ expect }) => {
    const characterClassSlug = 'warrior';
    const skillSlug = 'charge';
    const expectedPath = `${base}/hero/warrior/skill/charge`;

    const resource = skill(characterClassSlug, skillSlug);

    expect(resource.path).toEqual(expectedPath);
  });
});
