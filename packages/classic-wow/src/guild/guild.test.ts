import type { ExtractResourceType } from '@blizzard-api/core';
import { describe, expect, expectTypeOf, test } from 'vitest';
import type { GuildAchievementsClassicEraResponse, GuildAchievementsResponse } from './types';
import { guild, guildAchievements, guildActivity, guildRoster } from './index';

const namespaces = ['profile-classic1x', 'profile-classic', 'profile-classicann'] as const;
const realmSlug = 'some-realm';
const nameSlug = 'some-guild';

describe('guild API functions', () => {
  test.each(namespaces)('should return correct guild resource in the %s namespace', (namespace) => {
    const result = guild(namespace, realmSlug, nameSlug);
    expect(result).toEqual({
      namespace,
      path: `/data/wow/guild/${realmSlug}/${nameSlug}`,
    });
  });

  test.each(namespaces)('should return correct guild achievements resource in the %s namespace', (namespace) => {
    const result = guildAchievements(namespace, realmSlug, nameSlug);
    expect(result).toEqual({
      namespace,
      path: `/data/wow/guild/${realmSlug}/${nameSlug}/achievements`,
    });
  });

  test.each(namespaces)('should return correct guild activity resource in the %s namespace', (namespace) => {
    const result = guildActivity(namespace, realmSlug, nameSlug);
    expect(result).toEqual({
      namespace,
      path: `/data/wow/guild/${realmSlug}/${nameSlug}/activity`,
    });
  });

  test.each(namespaces)('should return correct guild roster resource in the %s namespace', (namespace) => {
    const result = guildRoster(namespace, realmSlug, nameSlug);
    expect(result).toEqual({
      namespace,
      path: `/data/wow/guild/${realmSlug}/${nameSlug}/roster`,
    });
  });
});

/**
 * The guild achievements endpoint is the only one where the response type depends on the
 * namespace, as the API only exposes the achievement details for the classic progression version.
 * The namespace is therefore spelled out per test, so that the response type can be asserted
 * for each of them.
 */
describe('guildAchievements response types', () => {
  describe('classic era namespace', () => {
    test('should return a GuildAchievementsClassicEraResponse', () => {
      const result = guildAchievements('profile-classic1x', realmSlug, nameSlug);

      expect(result.namespace).toBe('profile-classic1x');
      expectTypeOf(result._responseType).toEqualTypeOf<GuildAchievementsClassicEraResponse | undefined>();
      expectTypeOf<ExtractResourceType<typeof result>>().toEqualTypeOf<GuildAchievementsClassicEraResponse>();
    });
  });

  describe('classic progression namespace', () => {
    test('should return a GuildAchievementsResponse', () => {
      const result = guildAchievements('profile-classic', realmSlug, nameSlug);

      expect(result.namespace).toBe('profile-classic');
      expectTypeOf(result._responseType).toEqualTypeOf<GuildAchievementsResponse | undefined>();
      expectTypeOf<ExtractResourceType<typeof result>>().toEqualTypeOf<GuildAchievementsResponse>();
    });
  });

  describe('classic anniversary namespace', () => {
    test('should return a GuildAchievementsClassicEraResponse', () => {
      const result = guildAchievements('profile-classicann', realmSlug, nameSlug);

      expect(result.namespace).toBe('profile-classicann');
      expectTypeOf(result._responseType).toEqualTypeOf<GuildAchievementsClassicEraResponse | undefined>();
      expectTypeOf<ExtractResourceType<typeof result>>().toEqualTypeOf<GuildAchievementsClassicEraResponse>();
    });
  });
});
