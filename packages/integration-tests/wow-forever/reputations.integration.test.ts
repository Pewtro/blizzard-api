import {
  reputationFaction,
  reputationFactionIndex,
  reputationTiers,
  reputationTiersIndex,
} from '@blizzard-api/wow-forever';
import { describe, test } from 'vitest';
import { prettifyError } from 'zod';
import {
  reputationFactionIndexResponseSchema,
  reputationFactionResponseSchema,
  reputationTiersIndexResponseSchema,
  reputationTiersResponseSchema,
} from '../../../generated/schemas/wow-forever';
import { getIntegrationTestClient } from '../utils/client';
import { getRandomSample } from '../utils/random';

describe('wow-forever reputations integration', async () => {
  const client = await getIntegrationTestClient();

  test('validates the reputation faction index and sampled factions', async ({ expect }) => {
    const index = await client.sendRequest(reputationFactionIndex());
    const parsedIndex = reputationFactionIndexResponseSchema.safeParse(index);
    if (!parsedIndex.success) {
      console.error('Reputation faction index validation failed:', prettifyError(parsedIndex.error));
    }
    expect(parsedIndex.success).toBe(true);

    const factions = parsedIndex.success ? [...parsedIndex.data.root_factions, ...parsedIndex.data.factions] : [];
    const sampledIds = [...new Set(getRandomSample(factions, 5).map((faction) => faction.id))];
    const responses = await Promise.all(sampledIds.map((id) => client.sendRequest(reputationFaction(id))));

    for (const response of responses) {
      const parsedFaction = reputationFactionResponseSchema.safeParse(response);
      if (!parsedFaction.success) {
        console.error('Reputation faction validation failed for id', response?.id, prettifyError(parsedFaction.error));
      }
      expect(parsedFaction.success).toBe(true);
    }
  });

  test('validates the reputation tiers index and details', async ({ expect }) => {
    const index = await client.sendRequest(reputationTiersIndex());
    const parsedIndex = reputationTiersIndexResponseSchema.safeParse(index);
    if (!parsedIndex.success) {
      console.error('Reputation tiers index validation failed:', prettifyError(parsedIndex.error));
    }
    expect(parsedIndex.success).toBe(true);

    const tiers = parsedIndex.success ? parsedIndex.data.reputation_tiers : [];
    for (const tierEntry of tiers) {
      const tierResponse = await client.sendRequest(reputationTiers(tierEntry.id));
      const parsedTier = reputationTiersResponseSchema.safeParse(tierResponse);
      if (!parsedTier.success) {
        console.error('Reputation tiers validation failed for id', tierEntry.id, prettifyError(parsedTier.error));
      }
      expect(parsedTier.success).toBe(true);
    }
  });
});
