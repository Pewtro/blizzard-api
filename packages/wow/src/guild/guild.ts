import type { ProtectedResource } from '@blizzard-api/core';
import type { GuildAchievementsResponse, GuildActivityResponse, GuildResponse, GuildRosterResponse } from './types';

const basePath = '/data/wow/guild';

export function guild(realmSlug: string, nameSlug: string, token: string): ProtectedResource<GuildResponse> {
  return {
    namespace: 'profile',
    path: `${basePath}/${realmSlug}/${nameSlug}`,
    token,
  };
}

export function guildActivity(
  realmSlug: string,
  nameSlug: string,
  token: string,
): ProtectedResource<GuildActivityResponse> {
  return {
    namespace: 'profile',
    path: `${basePath}/${realmSlug}/${nameSlug}/activity`,
    token,
  };
}

export function guildAchievements(
  realmSlug: string,
  nameSlug: string,
  token: string,
): ProtectedResource<GuildAchievementsResponse> {
  return {
    namespace: 'profile',
    path: `${basePath}/${realmSlug}/${nameSlug}/achievements`,
    token,
  };
}

export function guildRoster(
  realmSlug: string,
  nameSlug: string,
  token: string,
): ProtectedResource<GuildRosterResponse> {
  return {
    namespace: 'profile',
    path: `${basePath}/${realmSlug}/${nameSlug}/roster`,
    token,
  };
}
