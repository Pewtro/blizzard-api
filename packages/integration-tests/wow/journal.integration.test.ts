import { createBlizzardApiClient } from '@blizzard-api/client';
import * as wow from '@blizzard-api/wow';
import { describe, it } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import {
  journalEncounterIndexResponseSchema,
  journalEncounterResponseSchema,
  journalEncounterSearchResponseSchema,
  journalExpansionIndexResponseSchema,
  journalExpansionResponseSchema,
  journalInstanceIndexResponseSchema,
  journalInstanceMediaResponseSchema,
  journalInstanceResponseSchema,
} from '../../../generated/schemas/wow/journal';

describe.concurrent('wow journal integration', () => {
  it('validates journal encounter index and details', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'eu',
      secret: environment.blizzardClientSecret,
    });
    const enc = await client.sendRequest(wow.journalEncounterIndex());
    const parsedEnc = journalEncounterIndexResponseSchema.safeParse(enc);
    if (!parsedEnc.success) {
      console.error('Journal encounter index validation failed:', treeifyError(parsedEnc.error));
    }
    expect(parsedEnc.success).toBe(true);

    // Pick up to 5 encounters at random from the index to fetch details
    const encounters = parsedEnc.success ? parsedEnc.data.encounters : [];
    const sampleSize = Math.min(5, encounters.length);
    const sampledEncounters =
      encounters.length > sampleSize
        ? // eslint-disable-next-line sonarjs/pseudo-random
          encounters.toSorted(() => 0.5 - Math.random()).slice(0, sampleSize)
        : encounters.slice(0, sampleSize);

    const encounterRequests = [];

    for (const encounter of sampledEncounters) {
      encounterRequests.push(client.sendRequest(wow.journalEncounter(encounter.id)));
    }
    const encounterResponses = await Promise.all(encounterRequests);
    for (const encounter of encounterResponses) {
      const parsedEncounter = journalEncounterResponseSchema.safeParse(encounter);
      if (!parsedEncounter.success) {
        console.error(
          'Journal encounter detail validation failed for id',
          encounter.id,
          treeifyError(parsedEncounter.error),
        );
      }
      expect(parsedEncounter.success).toBe(true);
    }
  });
  it('validates journal expansion index and details', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'eu',
      secret: environment.blizzardClientSecret,
    });

    const exp = await client.sendRequest(wow.journalExpansionIndex());
    const parsedExp = journalExpansionIndexResponseSchema.safeParse(exp);
    if (!parsedExp.success) {
      console.error('Journal expansion index validation failed:', treeifyError(parsedExp.error));
    }
    expect(parsedExp.success).toBe(true);

    // Pick up to 5 expansions at random from the index to fetch details
    const expansions = parsedExp.success ? parsedExp.data.tiers : [];
    const sampleSize = Math.min(5, expansions.length);
    const sampledExpansions =
      expansions.length > sampleSize
        ? // eslint-disable-next-line sonarjs/pseudo-random
          expansions.toSorted(() => 0.5 - Math.random()).slice(0, sampleSize)
        : expansions.slice(0, sampleSize);

    const expansionRequests = [];

    for (const expansion of sampledExpansions) {
      expansionRequests.push(client.sendRequest(wow.journalExpansion(expansion.id)));
    }
    const expansionResponses = await Promise.all(expansionRequests);
    for (const expansion of expansionResponses) {
      const parsedExpansion = journalExpansionResponseSchema.safeParse(expansion);
      if (!parsedExpansion.success) {
        console.error(
          'Journal expansion detail validation failed for id',
          expansion.id,
          treeifyError(parsedExpansion.error),
        );
      }
      expect(parsedExpansion.success).toBe(true);
    }
  });

  it('validates journal instance index and details', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'eu',
      secret: environment.blizzardClientSecret,
    });

    const instanceResp = await client.sendRequest(wow.journalInstanceIndex());
    const parsedExp = journalInstanceIndexResponseSchema.safeParse(instanceResp);
    if (!parsedExp.success) {
      console.error('Journal instance index validation failed:', treeifyError(parsedExp.error));
    }
    expect(parsedExp.success).toBe(true);

    // Pick up to 5 instances at random from the index to fetch details
    const instances = parsedExp.success ? parsedExp.data.instances : [];
    const sampleSize = Math.min(5, instances.length);
    const sampledInstances =
      instances.length > sampleSize
        ? // eslint-disable-next-line sonarjs/pseudo-random
          instances.toSorted(() => 0.5 - Math.random()).slice(0, sampleSize)
        : instances.slice(0, sampleSize);

    const instanceRequests = [];

    for (const instance of sampledInstances) {
      instanceRequests.push(client.sendRequest(wow.journalInstance(instance.id)));
    }
    const instanceResponses = await Promise.all(instanceRequests);
    for (const instance of instanceResponses) {
      const parsedInstance = journalInstanceResponseSchema.safeParse(instance);
      if (!parsedInstance.success) {
        console.error(
          'Journal instance detail validation failed for id',
          instance.id,
          treeifyError(parsedInstance.error),
        );
      }
      expect(parsedInstance.success).toBe(true);
    }
  });

  it('validates journal encounter search', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'eu',
      secret: environment.blizzardClientSecret,
    });

    const search = await client.sendRequest(
      wow.journalEncounterSearch({ _page: 1, instanceName: 'raid', locale: 'en_GB' }),
    );
    const parsed = journalEncounterSearchResponseSchema.safeParse(search);
    if (!parsed.success) {
      console.error('Journal encounter search validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  });

  it('validates journal instance media', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'eu',
      secret: environment.blizzardClientSecret,
    });

    const instanceResp = await client.sendRequest(wow.journalInstanceIndex());
    const parsedExp = journalInstanceIndexResponseSchema.safeParse(instanceResp);
    if (!parsedExp.success) {
      console.error('Journal instance index validation failed:', treeifyError(parsedExp.error));
    }
    expect(parsedExp.success).toBe(true);

    const instances = parsedExp.success ? parsedExp.data.instances : [];
    if (instances.length > 0) {
      const media = await client.sendRequest(wow.journalInstanceMedia(instances[0]!.id));
      const parsedMedia = journalInstanceMediaResponseSchema.safeParse(media);
      if (!parsedMedia.success) {
        console.error('Journal instance media validation failed:', treeifyError(parsedMedia.error));
      }
      expect(parsedMedia.success).toBe(true);
    }
  });
});
