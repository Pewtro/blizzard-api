import { createBlizzardApiClient } from '@blizzard-api/client';
import * as wow from '@blizzard-api/wow';
import { describe, it } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import { connectedRealmIndexResponseSchema, connectedRealmSearchResponseSchema } from '../../../generated/schemas/wow';

describe('wow connected realm integration', () => {
  it('validates connected realm index', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'eu',
      secret: environment.blizzardClientSecret,
    });

    const resp = await client.sendRequest(wow.connectedRealmIndex());
    const parsed = connectedRealmIndexResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Connected realm index validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  });

  it('validates connected realm search', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'eu',
      secret: environment.blizzardClientSecret,
    });

    const search = await client.sendRequest(wow.connectedRealmSearch({ _page: 1 }));
    const parsed = connectedRealmSearchResponseSchema.safeParse(search);
    if (!parsed.success) {
      console.error('Connected realm search validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  });
}, 15_000);
