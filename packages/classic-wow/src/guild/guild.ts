import type { BlizzardNamespaces, Resource } from '@blizzard-api/core';
import type {
  GuildAchievementsClassicEraResponse,
  GuildAchievementsResponse,
  GuildActivityResponse,
  GuildResponse,
  GuildRosterResponse,
} from './types';

const basePath = '/data/wow/guild';

/**
 * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
 * @param realmSlug The slug of the realm.
 * @param nameSlug The lowercase name of the guild.
 * @returns a single guild by its name and realm.
 */
export function guild(
  namespace: Extract<BlizzardNamespaces, 'profile-classic1x' | 'profile-classic'>,
  realmSlug: string,
  nameSlug: string,
): Resource<GuildResponse> {
  return {
    namespace,
    path: `${basePath}/${realmSlug}/${nameSlug}`,
  };
}

/**
 * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
 * @param realmSlug The slug of the realm.
 * @param nameSlug The lowercase name of the guild.
 * @returns a single guild's achievements by name and realm.
 */
export function guildAchievements<T extends Extract<BlizzardNamespaces, 'profile-classic1x' | 'profile-classic'>>(
  namespace: T,
  realmSlug: string,
  nameSlug: string,
): Resource<T extends 'profile-classic1x' ? GuildAchievementsClassicEraResponse : GuildAchievementsResponse> {
  console.log('typeof namespace', typeof namespace);
  return {
    namespace,
    path: `${basePath}/${realmSlug}/${nameSlug}/achievements`,
  };
}

/**
 * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
 * @param realmSlug The slug of the realm.
 * @param nameSlug The lowercase name of the guild.
 * @returns a single guild's activity by name and realm.
 */
export function guildActivity(
  namespace: Extract<BlizzardNamespaces, 'profile-classic1x' | 'profile-classic'>,
  realmSlug: string,
  nameSlug: string,
): Resource<GuildActivityResponse> {
  return {
    namespace,
    path: `${basePath}/${realmSlug}/${nameSlug}/activity`,
  };
}

/**
 * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
 * @param realmSlug The slug of the realm.
 * @param nameSlug The lowercase name of the guild.
 * @returns a single guild's roster by its name and realm.
 */
export function guildRoster(
  namespace: Extract<BlizzardNamespaces, 'profile-classic1x' | 'profile-classic'>,
  realmSlug: string,
  nameSlug: string,
): Resource<GuildRosterResponse> {
  return {
    namespace,
    path: `${basePath}/${realmSlug}/${nameSlug}/roster`,
  };
}
