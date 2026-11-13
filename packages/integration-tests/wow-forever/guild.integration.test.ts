import {
  characterProfileSummary,
  guild,
  guildAchievements,
  guildActivity,
  guildRoster,
} from '@blizzard-api/wow-forever';
import { describe, test } from 'vitest';
import { prettifyError } from 'zod';
import {
  characterProfileSummaryResponseSchema,
  guildAchievementsResponseSchema,
  guildActivityResponseSchema,
  guildResponseSchema,
  guildRosterResponseSchema,
} from '../../../generated/schemas/wow-forever';
import { getIntegrationTestClient } from '../utils/client';
import { getRandomSample } from '../utils/random';

const guildSlugs = ['skademaskinen', 'teamraiddrømmen'] as const;

describe('wow-forever guild integration', async () => {
  const client = await getIntegrationTestClient();

  test('validates the guild profiles', async ({ expect }) => {
    for (const guildSlug of guildSlugs) {
      const response = await client.sendRequest(guild(guildSlug));
      const parsedGuild = guildResponseSchema.safeParse(response);
      if (!parsedGuild.success) {
        console.error('Guild validation failed for', guildSlug, prettifyError(parsedGuild.error));
      }
      expect(parsedGuild.success).toBe(true);
    }
  });

  test('validates the guild rosters and sampled member profiles', async ({ expect }) => {
    for (const guildSlug of guildSlugs) {
      const roster = await client.sendRequest(guildRoster(guildSlug));
      const parsedRoster = guildRosterResponseSchema.safeParse(roster);
      if (!parsedRoster.success) {
        console.error('Guild roster validation failed for', guildSlug, prettifyError(parsedRoster.error));
      }
      expect(parsedRoster.success).toBe(true);

      const sampledMembers = getRandomSample(parsedRoster.data?.members, 5);
      const memberProfiles = await Promise.allSettled(
        sampledMembers.map((member) =>
          client.sendRequest(characterProfileSummary(member.character.name, member.character.surname)),
        ),
      );

      for (const result of memberProfiles) {
        if (result.status !== 'fulfilled') {
          continue;
        }

        const parsedProfile = characterProfileSummaryResponseSchema.safeParse(result.value);
        if (!parsedProfile.success) {
          console.error('Guild member profile validation failed:', prettifyError(parsedProfile.error));
        }
        expect(parsedProfile.success).toBe(true);
      }
    }
  });

  test('validates the guild achievements and activity', async ({ expect }) => {
    for (const guildSlug of guildSlugs) {
      const achievements = await client.sendRequest(guildAchievements(guildSlug));
      const parsedAchievements = guildAchievementsResponseSchema.safeParse(achievements);
      if (!parsedAchievements.success) {
        console.error('Guild achievements validation failed for', guildSlug, prettifyError(parsedAchievements.error));
      }
      expect(parsedAchievements.success).toBe(true);

      const activity = await client.sendRequest(guildActivity(guildSlug));
      const parsedActivity = guildActivityResponseSchema.safeParse(activity);
      if (!parsedActivity.success) {
        console.error('Guild activity validation failed for', guildSlug, prettifyError(parsedActivity.error));
      }
      expect(parsedActivity.success).toBe(true);
    }
  });
});
