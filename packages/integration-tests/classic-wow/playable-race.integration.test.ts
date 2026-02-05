import * as classicWow from '@blizzard-api/classic-wow';
import { createBlizzardApiClient } from '@blizzard-api/client';
import { describe, it } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import { playableRaceIndexResponseSchema, playableRaceResponseSchema } from '../../../generated/schemas/classic-wow';

describe.concurrent('classic-wow playable race integration', () => {
  it('validates playable races for classic era', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'us',
      secret: environment.blizzardClientSecret,
    });

    const resp = await client.sendRequest(classicWow.playableRaceIndex('static-classic1x'));
    const parsed = playableRaceIndexResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Playable race index validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);

    const requests = [];

    for (const race of resp.races) {
      requests.push(client.sendRequest(classicWow.playableRace('static-classic1x', race.id)));
    }

    const results = await Promise.all(requests);

    for (const result of results) {
      const parsedResult = playableRaceResponseSchema.safeParse(result);
      if (!parsedResult.success) {
        console.error('Race detail validation failed for id', result.id, treeifyError(parsedResult.error));
      }
      expect(parsedResult.success).toBe(true);
    }
  });
  it('validates playable races for classic progression', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'us',
      secret: environment.blizzardClientSecret,
    });

    const resp = await client.sendRequest(classicWow.playableRaceIndex('static-classic'));
    const parsed = playableRaceIndexResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Playable race index validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);

    const requests = [];

    for (const race of resp.races) {
      requests.push(client.sendRequest(classicWow.playableRace('static-classic', race.id)));
    }

    const results = await Promise.all(requests);

    for (const result of results) {
      const parsedResult = playableRaceResponseSchema.safeParse(result);
      if (!parsedResult.success) {
        console.error('Race detail validation failed for id', result.id, treeifyError(parsedResult.error));
        console.log('result', result);
        console.log('parsedResult.error', parsedResult.error);
      }
      expect(parsedResult.success).toBe(true);
    }
  });
});
