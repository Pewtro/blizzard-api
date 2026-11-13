import { wowGuildBasePath } from '@blizzard-api/core';
import type { Resource } from '@blizzard-api/core';
import type { GuildAchievementsResponse, GuildActivityResponse, GuildResponse, GuildRosterResponse } from './types';

/**
 * Get a guild by its name slug.
 * @param nameSlug The slug of the guild's name.
 * @returns The guild. See {@link GuildResponse}.
 */
export function guild(nameSlug: string): Resource<GuildResponse> {
  return {
    namespace: 'profile-forever',
    path: `${wowGuildBasePath}/${encodeURIComponent(nameSlug)}`,
  };
}

/**
 * Get a guild's achievements by its name slug.
 * @param nameSlug The slug of the guild's name.
 * @returns The guild's achievements. See {@link GuildAchievementsResponse}.
 */
export function guildAchievements(nameSlug: string): Resource<GuildAchievementsResponse> {
  return {
    namespace: 'profile-forever',
    path: `${wowGuildBasePath}/${encodeURIComponent(nameSlug)}/achievements`,
  };
}

/**
 * Get a guild's activity by its name slug.
 * @param nameSlug The slug of the guild's name.
 * @returns The guild's activity. See {@link GuildActivityResponse}.
 */
export function guildActivity(nameSlug: string): Resource<GuildActivityResponse> {
  return {
    namespace: 'profile-forever',
    path: `${wowGuildBasePath}/${encodeURIComponent(nameSlug)}/activity`,
  };
}

/**
 * Get a guild's roster by its name slug.
 * @param nameSlug The slug of the guild's name.
 * @returns The guild's roster. See {@link GuildRosterResponse}.
 */
export function guildRoster(nameSlug: string): Resource<GuildRosterResponse> {
  return {
    namespace: 'profile-forever',
    path: `${wowGuildBasePath}/${encodeURIComponent(nameSlug)}/roster`,
  };
}
