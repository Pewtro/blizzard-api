import { powerType, powerTypeIndex } from '@blizzard-api/wow/power-type';
import { describe, test } from 'vitest';
import { prettifyError } from 'zod';
import { powerTypeIndexResponseSchema, powerTypeResponseSchema } from '../../../generated/schemas/wow';
import { getIntegrationTestClient } from '../utils/client';
import { getRandomItem } from '../utils/random';

describe('wow power type integration', async () => {
  const client = await getIntegrationTestClient();
  test('validates power type index', async ({ expect }) => {
    const resp = await client.sendRequest(powerTypeIndex());
    const parsed = powerTypeIndexResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Power type index validation failed:', prettifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);

    const powerTypeEntry = getRandomItem(parsed.data!.power_types);
    expect(powerTypeEntry).toBeDefined();
    const type = await client.sendRequest(powerType(powerTypeEntry!.id));
    const parsedType = powerTypeResponseSchema.safeParse(type);
    if (!parsedType.success) {
      console.error('Power type detail validation failed:', prettifyError(parsedType.error));
    }
    expect(parsedType.success).toBe(true);
  });
});
