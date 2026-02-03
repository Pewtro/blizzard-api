import { createBlizzardApiClient } from '@blizzard-api/client';
import * as wow from '@blizzard-api/wow';
import { describe, it } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import { playableRaceIndexResponseSchema } from '../../../generated/schemas/wow';

describe('wow playable race integration', () => {
  it('validates playable race index', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'us',
      secret: environment.blizzardClientSecret,
    });

    const resp = await client.sendRequest(wow.playableRaceIndex());
    const parsed = playableRaceIndexResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Playable race index validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  }, 30_000);
});
