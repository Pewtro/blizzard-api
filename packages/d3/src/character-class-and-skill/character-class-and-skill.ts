import type { Resource } from '@blizzard-api/core';
import { d3BasePath } from '@blizzard-api/core';
import type { CharacterClassResponse, SkillResponse } from './types';

/**
 * Returns the character class information for the specified character class slug.
 * @param characterClassSlug The slug of the character class.
 * @returns The character class resource. See {@link CharacterClassResponse}.
 */
export function characterClass(characterClassSlug: string): Resource<CharacterClassResponse> {
  return {
    path: `${d3BasePath}/character-class/${characterClassSlug}`,
  };
}

/**
 * Returns the skill information for the specified character class and skill slugs.
 * @param characterClassSlug The slug of the character class.
 * @param skillSlug The slug of the skill.
 * @returns The skill resource. See {@link SkillResponse}.
 */
export function skill(characterClassSlug: string, skillSlug: string): Resource<SkillResponse> {
  return {
    path: `${d3BasePath}/hero/${characterClassSlug}/skill/${skillSlug}`,
  };
}
