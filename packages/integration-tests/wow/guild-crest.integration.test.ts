import { createBlizzardApiClient } from '@blizzard-api/client';
import * as wow from '@blizzard-api/wow';
import { describe, it } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import { guildCrestComponentsIndexResponseSchema } from '../../../generated/schemas/wow';

describe('wow guild crest integration', () => {
  it('validates guild crest components index', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'eu',
      secret: environment.blizzardClientSecret,
    });

    const resp = await client.sendRequest(wow.guildCrestComponentsIndex());
    const parsed = guildCrestComponentsIndexResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Guild crest components index validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  });
});
