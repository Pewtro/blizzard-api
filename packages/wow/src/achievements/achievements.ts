import type { Resource } from '@blizzard-api/core';
import { base, mediaBase } from '../base';
import type {
  AchievementCategoryIndexResponse,
  AchievementCategoryResponse,
  AchievementIndexResponse,
  AchievementMediaResponse,
  AchievementResponse,
} from './types';

const achievementBase = `${base}/achievement`;
const achievementCategoryBase = `${base}/achievement-category`;

/**
 * Get an achievement by ID.
 * @param achievementId The achievement ID.
 * @returns The achievement. See {@link AchievementResponse}.
 */
export function achievement(achievementId: number): Resource<AchievementResponse> {
  return {
    namespace: 'static',
    path: `${achievementBase}/${achievementId}`,
  };
}
/**
 * Get an achievement category by ID.
 * @param achievementCategoryId The achievement category ID.
 * @returns The achievement category. See {@link AchievementCategoryResponse}.
 */
export function achievementCategory(achievementCategoryId: number): Resource<AchievementCategoryResponse> {
  return {
    namespace: 'static',
    path: `${achievementCategoryBase}/${achievementCategoryId}`,
  };
}
/**
 * Get an achievement category index.
 * @returns The achievement category index. See {@link AchievementCategoryIndexResponse}.
 */
export function achievementCategoryIndex(): Resource<AchievementCategoryIndexResponse> {
  return {
    namespace: 'static',
    path: `${achievementCategoryBase}/index`,
  };
}
/**
 * Get an achievement index.
 * @returns The achievement index. See {@link AchievementIndexResponse}.
 */
export function achievementIndex(): Resource<AchievementIndexResponse> {
  return {
    namespace: 'static',
    path: `${achievementBase}/index`,
  };
}
/**
 * Get achievement media by ID.
 * @param achievementId The achievement ID.
 * @returns The achievement media. See {@link AchievementMediaResponse}.
 */
export function achievementMedia(achievementId: number): Resource<AchievementMediaResponse> {
  return { namespace: 'static', path: `${mediaBase}/achievement/${achievementId}` };
}
