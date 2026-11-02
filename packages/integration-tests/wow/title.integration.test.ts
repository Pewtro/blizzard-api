import { title, titleIndex } from '@blizzard-api/wow/title';
import { describe, test } from 'vitest';
import { prettifyError } from 'zod';
import { titleIndexResponseSchema, titleResponseSchema } from '../../../generated/schemas/wow/title';
import { getIntegrationTestClient } from '../utils/client';
import { getRandomSample } from '../utils/random';

describe('wow title integration', async () => {
  const client = await getIntegrationTestClient();
  test('validates title index and fetches title detail', async ({ expect }) => {
    const index = await client.sendRequest(titleIndex());
    const parsed = titleIndexResponseSchema.safeParse(index);
    if (!parsed.success) {
      console.error('Title index validation failed:', prettifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);

    // Pick up to 5 titles at random from the index to fetch details
    const titles = parsed.success ? parsed.data.titles : [];
    const sampled = getRandomSample(titles, 5);

    const requests = Array.from(sampled, (t) => client.sendRequest(title(t.id)));
    const responses = await Promise.all(requests);
    for (const titleResp of responses) {
      const parsedTitle = titleResponseSchema.safeParse(titleResp);
      if (!parsedTitle.success) {
        console.error('Title detail validation failed for id', titleResp?.id, prettifyError(parsedTitle.error));
      }
      expect(parsedTitle.success).toBe(true);
    }
  });
});
