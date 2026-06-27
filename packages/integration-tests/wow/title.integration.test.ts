import { createBlizzardApiClient } from '@blizzard-api/client';
import { title, titleIndex } from '@blizzard-api/wow/title';
import { describe, test } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import { titleIndexResponseSchema, titleResponseSchema } from '../../../generated/schemas/wow/title';

describe('wow title integration', async () => {
  const client = await createBlizzardApiClient({
    key: environment.blizzardClientId,
    origin: 'eu',
    secret: environment.blizzardClientSecret,
  });
  test('validates title index and fetches title detail', async ({ expect }) => {
    const index = await client.sendRequest(titleIndex());
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

    const requests = Array.from(sampled, (t) => client.sendRequest(title(t.id)));
    const responses = await Promise.all(requests);
    for (const titleResp of responses) {
      const parsedTitle = titleResponseSchema.safeParse(titleResp);
      if (!parsedTitle.success) {
        console.error('Title detail validation failed for id', titleResp.id, treeifyError(parsedTitle.error));
      }
      expect(parsedTitle.success).toBe(true);
    }
  });
});
