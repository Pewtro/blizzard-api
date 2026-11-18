import { characterHouse } from '@blizzard-api/wow/character-house';
import { characterProfileStatus, characterProfileSummary } from '@blizzard-api/wow/character-profile';
import { guildRoster } from '@blizzard-api/wow/guild';
import { describe, test } from 'vitest';
import { prettifyError } from 'zod';
import {
  characterProfileStatusResponseSchema,
  characterProfileSummaryResponseSchema,
} from '../../../generated/schemas/wow';
import { guildRosterResponseSchema } from '../../../generated/schemas/wow/guild';
import { getIntegrationTestClient } from '../utils/client';
import { getRandomSample } from '../utils/random';

describe('wow character-profile integration', async () => {
  const client = await getIntegrationTestClient();
  test('validates profile summaries for random guild members', async ({ expect }) => {
    const roster = await client.sendRequest(guildRoster('laughing-skull', 'echoes'));
    const parsedRoster = guildRosterResponseSchema.safeParse(roster);
    if (!parsedRoster.success) {
      console.error('Guild roster validation failed:', prettifyError(parsedRoster.error));
    }
    expect(parsedRoster.success).toBe(true);
    if (!parsedRoster.success) {
      return;
    }

    const randomizedMembers = getRandomSample(parsedRoster.data.members, 10);

    for (const { character } of randomizedMembers) {
      let summary;
      try {
        summary = await client.sendRequest(characterProfileSummary(character.realm.slug, character.name));
      } catch {
        continue;
      }

      const parsedSummary = characterProfileSummaryResponseSchema.safeParse(summary);
      if (!parsedSummary.success) {
        console.error(
          `Character profile summary validation failed for ${character.realm.slug}/${character.name}:`,
          prettifyError(parsedSummary.error),
        );
      }
      expect(parsedSummary.success).toBe(true);
    }
  });

  test('validates character profile status', async ({ expect }) => {
    const status = await client.sendRequest(characterProfileStatus('laughing-skull', 'putro'));
    const parsedStatus = characterProfileStatusResponseSchema.safeParse(status);
    if (!parsedStatus.success) {
      console.error('Character profile status validation failed:', prettifyError(parsedStatus.error));
    }
    expect(parsedStatus.success).toBe(true);
  });

  test('confirms the currently disabled character house endpoint returns 404', async ({ expect }) => {
    await expect(client.sendRequest(characterHouse('laughing-skull', 'putro', 1))).rejects.toMatchObject({
      response: { status: 404 },
    });
  });
});
