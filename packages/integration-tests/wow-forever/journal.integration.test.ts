import {
  journalEncounter,
  journalEncounterIndex,
  journalEncounterSearch,
  journalExpansion,
  journalExpansionIndex,
  journalInstance,
  journalInstanceIndex,
  journalInstanceMedia,
} from '@blizzard-api/wow-forever/journal';
import { describe, test } from 'vitest';
import { prettifyError } from 'zod';
import {
  journalEncounterIndexResponseSchema,
  journalEncounterResponseSchema,
  journalEncounterSearchResponseSchema,
  journalExpansionIndexResponseSchema,
  journalExpansionResponseSchema,
  journalInstanceIndexResponseSchema,
  journalInstanceMediaResponseSchema,
  journalInstanceResponseSchema,
} from '../../../generated/schemas/wow-forever';
import { getIntegrationTestClient } from '../utils/client';
import { getRandomSample } from '../utils/random';

describe('wow-forever journal integration', async () => {
  const client = await getIntegrationTestClient();

  test('validates the encounter index and sampled encounters', async ({ expect }) => {
    const indexResponse = await client.sendRequest(journalEncounterIndex());
    const parsedIndex = journalEncounterIndexResponseSchema.safeParse(indexResponse);
    if (!parsedIndex.success) {
      console.error('Forever journal encounter index validation failed:', prettifyError(parsedIndex.error));
    }
    expect(parsedIndex.success).toBe(true);

    // Forever currently returns an empty encounter index, so there are no detail IDs to request.
    const sample = getRandomSample(parsedIndex.data!.encounters, 3);
    const responses = await Promise.all(sample.map((encounter) => client.sendRequest(journalEncounter(encounter.id))));
    for (const response of responses) {
      const parsed = journalEncounterResponseSchema.safeParse(response);
      if (!parsed.success) {
        console.error('Forever journal encounter validation failed:', response?.id, prettifyError(parsed.error));
      }
      expect(parsed.success).toBe(true);
    }
  });

  test('validates journal encounter search', async ({ expect }) => {
    const response = await client.sendRequest(
      journalEncounterSearch({ _page: 1, instanceName: 'Onyxia', locale: 'en_GB' }),
    );
    const parsed = journalEncounterSearchResponseSchema.safeParse(response);
    if (!parsed.success) {
      console.error('Forever journal encounter search validation failed:', prettifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  });

  test('validates the expansion index and sampled expansions', async ({ expect }) => {
    const indexResponse = await client.sendRequest(journalExpansionIndex());
    const parsedIndex = journalExpansionIndexResponseSchema.safeParse(indexResponse);
    if (!parsedIndex.success) {
      console.error('Forever journal expansion index validation failed:', prettifyError(parsedIndex.error));
    }
    expect(parsedIndex.success).toBe(true);

    // Forever currently returns an empty expansion index, so there are no detail IDs to request.
    const sample = getRandomSample(parsedIndex.data!.tiers, 3);
    const responses = await Promise.all(sample.map((expansion) => client.sendRequest(journalExpansion(expansion.id))));
    for (const response of responses) {
      const parsed = journalExpansionResponseSchema.safeParse(response);
      if (!parsed.success) {
        console.error('Forever journal expansion validation failed:', response?.id, prettifyError(parsed.error));
      }
      expect(parsed.success).toBe(true);
    }
  });

  test('validates the instance index, sampled instances, and instance media', async ({ expect }) => {
    const indexResponse = await client.sendRequest(journalInstanceIndex());
    const parsedIndex = journalInstanceIndexResponseSchema.safeParse(indexResponse);
    if (!parsedIndex.success) {
      console.error('Forever journal instance index validation failed:', prettifyError(parsedIndex.error));
    }
    expect(parsedIndex.success).toBe(true);

    // Forever currently returns an empty instance index, so there are no detail or media IDs to request.
    const sample = getRandomSample(parsedIndex.data!.instances, 3);
    const responses = await Promise.all(sample.map((instance) => client.sendRequest(journalInstance(instance.id))));
    for (const response of responses) {
      const parsed = journalInstanceResponseSchema.safeParse(response);
      if (!parsed.success) {
        console.error('Forever journal instance validation failed:', response?.id, prettifyError(parsed.error));
      }
      expect(parsed.success).toBe(true);
    }

    const firstInstance = parsedIndex.data!.instances?.[0];
    if (!firstInstance) return;
    const mediaResponse = await client.sendRequest(journalInstanceMedia(firstInstance.id));
    const parsedMedia = journalInstanceMediaResponseSchema.safeParse(mediaResponse);
    if (!parsedMedia.success) {
      console.error(
        'Forever journal instance media validation failed:',
        firstInstance.id,
        prettifyError(parsedMedia.error),
      );
    }
    expect(parsedMedia.success).toBe(true);
  });
});
