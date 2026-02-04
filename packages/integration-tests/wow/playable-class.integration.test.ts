import { createBlizzardApiClient } from '@blizzard-api/client';
import * as wow from '@blizzard-api/wow';
import { describe, it } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import {
  playableClassIndexResponseSchema,
  playableClassResponseSchema,
} from '../../../generated/schemas/wow/playable-class';

describe.concurrent('wow playable class integration', () => {
  it('fetches playable class and media by id', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'eu',
      secret: environment.blizzardClientSecret,
    });

    const index = await client.sendRequest(wow.playableClassIndex());
    const parsedIndex = playableClassIndexResponseSchema.safeParse(index);
    if (!parsedIndex.success) {
      console.error('Playable class index validation failed:', treeifyError(parsedIndex.error));
    }
    expect(parsedIndex.success).toBe(true);

    const first = parsedIndex.success ? parsedIndex.data.classes[0] : undefined;
    if (first) {
      const resp = await client.sendRequest(wow.playableClass(first.id));
      const parsed = playableClassResponseSchema.safeParse(resp);
      if (!parsed.success) {
        console.error('Playable class validation failed:', treeifyError(parsed.error));
      }
      expect(parsed.success).toBe(true);
    }
  }, 30_000);
});
