import { createBlizzardApiClient } from '@blizzard-api/client';
import * as wow from '@blizzard-api/wow';
import { describe, it } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import { titleIndexResponseSchema, titleResponseSchema } from '../../../generated/schemas/wow/title';

describe('wow title integration', () => {
  it('validates title index and fetches title detail', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'eu',
      secret: environment.blizzardClientSecret,
    });
    const index = await client.sendRequest(wow.titleIndex());
    const parsed = titleIndexResponseSchema.safeParse(index);
    if (!parsed.success) {
      console.error('Title index validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);

    // Pick up to 5 titles at random from the index to fetch details
    const titles = parsed.success ? parsed.data.titles : [];
    const sampleSize = Math.min(5, titles.length);
    const sampled =
      titles.length > sampleSize
        ? // eslint-disable-next-line sonarjs/pseudo-random
          titles.toSorted(() => 0.5 - Math.random()).slice(0, sampleSize)
        : titles.slice(0, sampleSize);

    for (const t of sampled) {
      const title = await client.sendRequest(wow.title(t.id));
      const parsedTitle = titleResponseSchema.safeParse(title);
      if (!parsedTitle.success) {
        console.error('Title detail validation failed for id', t.id, treeifyError(parsedTitle.error));
      }
      expect(parsedTitle.success).toBe(true);
    }
  }, 30_000);
});
