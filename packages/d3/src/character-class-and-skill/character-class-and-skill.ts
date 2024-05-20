import type { Resource } from '@blizzard-api/core';
import { base } from '../base';
import type { CharacterClassResponse, SkillResponse } from './types';

export function characterClass(characterClassSlug: string): Resource<CharacterClassResponse> {
  return {
    path: `${base}/character-class/${characterClassSlug}`,
  };
}

export function skill(characterClassSlug: string, skillSlug: string): Resource<SkillResponse> {
  return {
    path: `${base}/hero/${characterClassSlug}/skill/${skillSlug}`,
  };
}
