import { wowBasePath, wowMediaBasePath } from '@blizzard-api/core';
import type { Resource, StaticClassicNamespaces } from '@blizzard-api/core';
import type {
  AchievementCategoryIndexResponse,
  AchievementCategoryResponse,
  AchievementIndexResponse,
  AchievementMediaResponse,
  AchievementResponse,
} from './types';

/**
 * Get an achievement by ID.
 *
 * Supported by all Classic namespaces: `classic1x`, `classicann`, and `classic`.
 * @param namespace The namespace to use. See {@link StaticClassicNamespaces}.
 * @param achievementId The achievement ID.
 * @returns The achievement. See {@link AchievementResponse}.
 */
export function achievement(namespace: StaticClassicNamespaces, achievementId: number): Resource<AchievementResponse> {
  return {
    namespace,
    path: `${wowBasePath}/achievement/${encodeURIComponent(achievementId)}`,
  };
}
/**
 * Get the achievement index.
 *
 * Supported by all Classic namespaces: `classic1x`, `classicann`, and `classic`.
 * @param namespace The namespace to use. See {@link StaticClassicNamespaces}.
 * @returns The achievement index. See {@link AchievementIndexResponse}.
 */
export function achievementIndex(namespace: StaticClassicNamespaces): Resource<AchievementIndexResponse> {
  return {
    namespace,
    path: `${wowBasePath}/achievement/index`,
  };
}
/**
 * Get an achievement category by ID.
 *
 * Supported by all Classic namespaces: `classic1x`, `classicann`, and `classic`.
 * @param namespace The namespace to use. See {@link StaticClassicNamespaces}.
 * @param achievementCategoryId The achievement category ID.
 * @returns The achievement category. See {@link AchievementCategoryResponse}.
 */
export function achievementCategory(
  namespace: StaticClassicNamespaces,
  achievementCategoryId: number,
): Resource<AchievementCategoryResponse> {
  return {
    namespace,
    path: `${wowBasePath}/achievement-category/${encodeURIComponent(achievementCategoryId)}`,
  };
}
/**
 * Get the achievement category index.
 *
 * Supported by all Classic namespaces: `classic1x`, `classicann`, and `classic`.
 * `classic1x` responses omit `guild_categories`.
 * @param namespace The namespace to use. See {@link StaticClassicNamespaces}.
 * @returns The achievement category index. See {@link AchievementCategoryIndexResponse}.
 */
export function achievementCategoryIndex(
  namespace: StaticClassicNamespaces,
): Resource<AchievementCategoryIndexResponse> {
  return {
    namespace,
    path: `${wowBasePath}/achievement-category/index`,
  };
}
/**
 * Get achievement media by ID.
 *
 * Supported by all Classic namespaces: `classic1x`, `classicann`, and `classic`.
 * @param namespace The namespace to use. See {@link StaticClassicNamespaces}.
 * @param achievementId The achievement ID.
 * @returns The achievement media. See {@link AchievementMediaResponse}.
 */
export function achievementMedia(
  namespace: StaticClassicNamespaces,
  achievementId: number,
): Resource<AchievementMediaResponse> {
  return {
    namespace,
    path: `${wowMediaBasePath}/achievement/${encodeURIComponent(achievementId)}`,
  };
}
