import { createBlizzardApiClient } from '@blizzard-api/client';
import * as wow from '@blizzard-api/wow';
import { describe, it } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import { powerTypeIndexResponseSchema, powerTypeResponseSchema } from '../../../generated/schemas/wow';

describe('wow power type integration', () => {
  it('validates power type index', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'us',
      secret: environment.blizzardClientSecret,
    });

    const resp = await client.sendRequest(wow.powerTypeIndex());
    const parsed = powerTypeIndexResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Power type index validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);

    const first = parsed.success ? parsed.data.power_types[0] : undefined;
    if (first) {
      const type = await client.sendRequest(wow.powerType(first.id));
      const parsedType = powerTypeResponseSchema.safeParse(type);
      if (!parsedType.success) {
        console.error('Power type detail validation failed:', treeifyError(parsedType.error));
      }
      expect(parsedType.success).toBe(true);
    }
  });
});
