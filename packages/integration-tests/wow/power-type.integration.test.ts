import { createBlizzardApiClient } from '@blizzard-api/client';
import { powerType, powerTypeIndex } from '@blizzard-api/wow/power-type';
import { describe, test } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import { powerTypeIndexResponseSchema, powerTypeResponseSchema } from '../../../generated/schemas/wow';

describe('wow power type integration', async () => {
  const client = await createBlizzardApiClient({
    key: environment.blizzardClientId,
    origin: 'eu',
    secret: environment.blizzardClientSecret,
  });
  test('validates power type index', async ({ expect }) => {
    const resp = await client.sendRequest(powerTypeIndex());
    const parsed = powerTypeIndexResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Power type index validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);

    const first = parsed.success ? parsed.data.power_types[0] : undefined;
    if (first) {
      const type = await client.sendRequest(powerType(first.id));
      const parsedType = powerTypeResponseSchema.safeParse(type);
      if (!parsedType.success) {
        console.error('Power type detail validation failed:', treeifyError(parsedType.error));
      }
      expect(parsedType.success).toBe(true);
    }
  });
});
