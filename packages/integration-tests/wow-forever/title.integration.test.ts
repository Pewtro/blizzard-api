import { title, titleIndex } from '@blizzard-api/wow-forever';
import { describe, test } from 'vitest';
import { prettifyError } from 'zod';
import { titleIndexResponseSchema, titleResponseSchema } from '../../../generated/schemas/wow-forever';
import { getIntegrationTestClient } from '../utils/client';
import { getRandomSample } from '../utils/random';

describe('wow-forever title integration', async () => {
  const client = await getIntegrationTestClient();

  test('validates the title index and sampled titles', async ({ expect }) => {
    const index = await client.sendRequest(titleIndex());
    const parsedIndex = titleIndexResponseSchema.safeParse(index);
    if (!parsedIndex.success) {
      console.error('Title index validation failed:', prettifyError(parsedIndex.error));
    }
    expect(parsedIndex.success).toBe(true);

    const titles = parsedIndex.success ? parsedIndex.data.titles : [];
    const sampled = getRandomSample(titles, 5);
    const responses = await Promise.all(Array.from(sampled, (titleEntry) => client.sendRequest(title(titleEntry.id))));

    for (const response of responses) {
      const parsedTitle = titleResponseSchema.safeParse(response);
      if (!parsedTitle.success) {
        console.error('Title validation failed for id', response?.id, prettifyError(parsedTitle.error));
      }
      expect(parsedTitle.success).toBe(true);
    }
  });
});
