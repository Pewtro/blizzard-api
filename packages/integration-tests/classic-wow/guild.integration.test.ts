import { guild, guildAchievements, guildActivity, guildRoster } from '@blizzard-api/classic-wow/guild';
import { createBlizzardApiClient } from '@blizzard-api/client';
import { describe, test } from 'vitest';
import { prettifyError } from 'zod';
import { environment } from '../../../environment';
import {
  guildAchievementsClassicEraResponseSchema,
  guildAchievementsResponseSchema,
  guildActivityResponseSchema,
  guildResponseSchema,
  guildRosterResponseSchema,
} from '../../../generated/schemas/classic-wow';

describe('classic-wow guild integration', () => {
  test('fetches guild endpoints for raid-drømmen on shekzeer', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'eu',
      secret: environment.blizzardClientSecret,
    });

    const realm = 'shekzeer';
    const guildSlug = 'raid-drømmen';

    const guildResp = await client.sendRequest(guild('profile-classic', realm, guildSlug));
    const parsedGuildResp = guildResponseSchema.safeParse(guildResp);
    if (!parsedGuildResp.success) {
      console.error('Guild response validation failed:', prettifyError(parsedGuildResp.error));
    }
    expect(parsedGuildResp.success).toBe(true);

    const achievementsResp = await client.sendRequest(guildAchievements('profile-classic', realm, guildSlug));
    const parsedAchievementsResp = guildAchievementsResponseSchema.safeParse(achievementsResp);
    if (!parsedAchievementsResp.success) {
      console.error('Guild achievements response validation failed:', prettifyError(parsedAchievementsResp.error));
    }
    expect(parsedAchievementsResp.success).toBe(true);

    const rosterResp = await client.sendRequest(guildRoster('profile-classic', realm, guildSlug));
    const parsedRosterResp = guildRosterResponseSchema.safeParse(rosterResp);
    if (!parsedRosterResp.success) {
      console.error('Guild roster response validation failed:', prettifyError(parsedRosterResp.error));
    }
    expect(parsedRosterResp.success).toBe(true);

    const activityResp = await client.sendRequest(guildActivity('profile-classic', realm, guildSlug));
    const parsedActivityResp = guildActivityResponseSchema.safeParse(activityResp);
    if (!parsedActivityResp.success) {
      console.error('Guild activity response validation failed:', prettifyError(parsedActivityResp.error));
    }
    expect(parsedActivityResp.success).toBe(true);
  });
});

describe('classic-wow guild integration for classic anniversary', () => {
  test('fetches guild endpoints for the-legacy on thunderstrike', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'eu',
      secret: environment.blizzardClientSecret,
    });

    const realm = 'thunderstrike';
    const guildSlug = 'the-legacy';

    const guildResp = await client.sendRequest(guild('profile-classicann', realm, guildSlug));
    const parsedGuildResp = guildResponseSchema.safeParse(guildResp);
    if (!parsedGuildResp.success) {
      console.error('Guild response validation failed:', prettifyError(parsedGuildResp.error));
    }
    expect(parsedGuildResp.success).toBe(true);

    // The anniversary namespace only exposes the guild itself, without the achievement details.
    const achievementsResp = await client.sendRequest(guildAchievements('profile-classicann', realm, guildSlug));
    const parsedAchievementsResp = guildAchievementsClassicEraResponseSchema.safeParse(achievementsResp);
    if (!parsedAchievementsResp.success) {
      console.error('Guild achievements response validation failed:', prettifyError(parsedAchievementsResp.error));
    }
    expect(parsedAchievementsResp.success).toBe(true);

    const rosterResp = await client.sendRequest(guildRoster('profile-classicann', realm, guildSlug));
    const parsedRosterResp = guildRosterResponseSchema.safeParse(rosterResp);
    if (!parsedRosterResp.success) {
      console.error('Guild roster response validation failed:', prettifyError(parsedRosterResp.error));
    }
    expect(parsedRosterResp.success).toBe(true);

    const activityResp = await client.sendRequest(guildActivity('profile-classicann', realm, guildSlug));
    const parsedActivityResp = guildActivityResponseSchema.safeParse(activityResp);
    if (!parsedActivityResp.success) {
      console.error('Guild activity response validation failed:', prettifyError(parsedActivityResp.error));
    }
    expect(parsedActivityResp.success).toBe(true);
  });
});
