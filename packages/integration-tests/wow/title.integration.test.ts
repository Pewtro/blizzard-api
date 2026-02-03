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

    const first = parsed.success ? parsed.data.titles[0] : undefined;
    if (first) {
      const title = await client.sendRequest(wow.title(first.id));
      const parsedTitle = titleResponseSchema.safeParse(title);
      if (!parsedTitle.success) {
        console.error('Title detail validation failed:', treeifyError(parsedTitle.error));
      }
      expect(parsedTitle.success).toBe(true);
    }
  }, 30_000);
});
