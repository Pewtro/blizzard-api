import { createBlizzardApiClient } from '@blizzard-api/client';
import * as wow from '@blizzard-api/wow';
import { describe, it } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import { mountIndexResponseSchema, mountResponseSchema } from '../../../generated/schemas/wow/mount';

describe('wow mount integration', () => {
  it('validates mount index and fetches mount detail', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'eu',
      secret: environment.blizzardClientSecret,
    });
    const index = await client.sendRequest(wow.mountIndex());
    const parsed = mountIndexResponseSchema.safeParse(index);
    if (!parsed.success) {
      console.error('Mount index validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);

    const first = parsed.success ? parsed.data.mounts[0] : undefined;
    if (first) {
      const mount = await client.sendRequest(wow.mount(first.id));
      const parsedMount = mountResponseSchema.safeParse(mount);
      if (!parsedMount.success) {
        console.error('Mount detail validation failed:', treeifyError(parsedMount.error));
      }
      expect(parsedMount.success).toBe(true);
    }
  }, 30_000);
});
