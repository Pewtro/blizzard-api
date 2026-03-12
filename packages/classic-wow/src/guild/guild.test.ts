import type { BlizzardNamespaces } from '@blizzard-api/core';
import { describe, expect, test } from 'vitest';
import { guild, guildAchievements, guildActivity, guildRoster } from './guild';

describe('guild API functions', () => {
  const namespace: Extract<BlizzardNamespaces, 'profile-classic1x' | 'profile-classic'> = 'profile-classic';
  const realmSlug = 'some-realm';
  const nameSlug = 'some-guild';

  test('should return correct guild resource', () => {
    const result = guild(namespace, realmSlug, nameSlug);
    expect(result).toEqual({
      namespace,
      path: `/data/wow/guild/${realmSlug}/${nameSlug}`,
    });
  });

  test('should return correct guild achievements resource', () => {
    const result = guildAchievements(namespace, realmSlug, nameSlug);
    expect(result).toEqual({
      namespace,
      path: `/data/wow/guild/${realmSlug}/${nameSlug}/achievements`,
    });
  });

  test('should return correct guild activity resource', () => {
    const result = guildActivity(namespace, realmSlug, nameSlug);
    expect(result).toEqual({
      namespace,
      path: `/data/wow/guild/${realmSlug}/${nameSlug}/activity`,
    });
  });

  test('should return correct guild roster resource', () => {
    const result = guildRoster(namespace, realmSlug, nameSlug);
    expect(result).toEqual({
      namespace,
      path: `/data/wow/guild/${realmSlug}/${nameSlug}/roster`,
    });
  });
});
