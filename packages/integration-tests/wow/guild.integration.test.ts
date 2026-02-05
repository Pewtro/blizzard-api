import { createBlizzardApiClient } from '@blizzard-api/client';
import * as wow from '@blizzard-api/wow';
import { describe, it } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import {
  guildAchievementsResponseSchema,
  guildActivityResponseSchema,
  guildResponseSchema,
  guildRosterResponseSchema,
} from '../../../generated/schemas/wow/guild';

describe('wow guild integration', () => {
  it('fetches guild endpoints for echoes on laughing-skull', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'eu',
      secret: environment.blizzardClientSecret,
    });

    const realm = 'laughing-skull';
    const guildSlug = 'echoes';

    const guildResp = await client.sendRequest(wow.guild(realm, guildSlug));
    const parsedGuild = guildResponseSchema.safeParse(guildResp);
    if (!parsedGuild.success) {
      console.error('Guild validation failed:', treeifyError(parsedGuild.error));
    }
    expect(parsedGuild.success).toBe(true);

    const achievementsResp = await client.sendRequest(wow.guildAchievements(realm, guildSlug));
    const parsedAchievements = guildAchievementsResponseSchema.safeParse(achievementsResp);
    if (!parsedAchievements.success) {
      console.error('Guild achievements validation failed:', treeifyError(parsedAchievements.error));
    }
    expect(parsedAchievements.success).toBe(true);

    const rosterResp = await client.sendRequest(wow.guildRoster(realm, guildSlug));
    const parsedRoster = guildRosterResponseSchema.safeParse(rosterResp);
    if (!parsedRoster.success) {
      console.error('Guild roster validation failed:', treeifyError(parsedRoster.error));
    }
    expect(parsedRoster.success).toBe(true);

    const activityResp = await client.sendRequest(wow.guildActivity(realm, guildSlug));
    const parsedActivity = guildActivityResponseSchema.safeParse(activityResp);
    if (!parsedActivity.success) {
      console.error('Guild activity validation failed:', treeifyError(parsedActivity.error));
    }
    expect(parsedActivity.success).toBe(true);
  });
});
