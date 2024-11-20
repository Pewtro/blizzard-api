import type { Resource } from '@blizzard-api/core';
import type { GuildAchievementsResponse, GuildActivityResponse, GuildResponse, GuildRosterResponse } from './types';

const basePath = '/data/wow/guild';

/**
 * @param realmSlug The slug of the realm.
 * @param nameSlug The lowercase name of the guild.
 * @returns a single guild by its name and realm.
 */
export function guild(realmSlug: string, nameSlug: string): Resource<GuildResponse> {
  return {
    namespace: 'profile',
    path: `${basePath}/${realmSlug}/${nameSlug}`,
  };
}

/**
 * @param realmSlug The slug of the realm.
 * @param nameSlug The lowercase name of the guild.
 * @returns a single guild's achievements by name and realm.
 */
export function guildAchievements(realmSlug: string, nameSlug: string): Resource<GuildAchievementsResponse> {
  return {
    namespace: 'profile',
    path: `${basePath}/${realmSlug}/${nameSlug}/achievements`,
  };
}

/**
 * @param realmSlug The slug of the realm.
 * @param nameSlug The lowercase name of the guild.
 * @returns a single guild's activity by name and realm.
 */
export function guildActivity(realmSlug: string, nameSlug: string): Resource<GuildActivityResponse> {
  return {
    namespace: 'profile',
    path: `${basePath}/${realmSlug}/${nameSlug}/activity`,
  };
}

/**
 * @param realmSlug The slug of the realm.
 * @param nameSlug The lowercase name of the guild.
 * @returns a single guild's roster by its name and realm.
 */
export function guildRoster(realmSlug: string, nameSlug: string): Resource<GuildRosterResponse> {
  return {
    namespace: 'profile',
    path: `${basePath}/${realmSlug}/${nameSlug}/roster`,
  };
}
