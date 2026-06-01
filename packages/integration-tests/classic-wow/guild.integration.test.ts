import { guild, guildAchievements, guildActivity, guildRoster } from '@blizzard-api/classic-wow/guild';
import { createBlizzardApiClient } from '@blizzard-api/client';
import { describe, test } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import {
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
      console.error('Guild response validation failed:', treeifyError(parsedGuildResp.error));
    }
    expect(parsedGuildResp.success).toBe(true);

    const achievementsResp = await client.sendRequest(guildAchievements('profile-classic', realm, guildSlug));
    const parsedAchievementsResp = guildAchievementsResponseSchema.safeParse(achievementsResp);
    if (!parsedAchievementsResp.success) {
      console.error('Guild achievements response validation failed:', treeifyError(parsedAchievementsResp.error));
    }
    expect(parsedAchievementsResp.success).toBe(true);

    const rosterResp = await client.sendRequest(guildRoster('profile-classic', realm, guildSlug));
    const parsedRosterResp = guildRosterResponseSchema.safeParse(rosterResp);
    if (!parsedRosterResp.success) {
      console.error('Guild roster response validation failed:', treeifyError(parsedRosterResp.error));
    }
    expect(parsedRosterResp.success).toBe(true);

    const activityResp = await client.sendRequest(guildActivity('profile-classic', realm, guildSlug));
    const parsedActivityResp = guildActivityResponseSchema.safeParse(activityResp);
    if (!parsedActivityResp.success) {
      console.error('Guild activity response validation failed:', treeifyError(parsedActivityResp.error));
    }
    expect(parsedActivityResp.success).toBe(true);
  });
});
