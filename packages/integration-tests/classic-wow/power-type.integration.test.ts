import { powerType, powerTypeIndex } from '@blizzard-api/classic-wow/power-type';
import { createBlizzardApiClient } from '@blizzard-api/client';
import { describe, test } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import { powerTypeIndexResponseSchema, powerTypeResponseSchema } from '../../../generated/schemas/classic-wow';

describe('classic-wow power type integration', async () => {
  const client = await createBlizzardApiClient({
    key: environment.blizzardClientId,
    origin: 'eu',
    secret: environment.blizzardClientSecret,
  });
  test('validates power type index', async ({ expect }) => {
    const resp = await client.sendRequest(powerTypeIndex('static-classic1x'));
    const parsed = powerTypeIndexResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Power type index validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  });
  test('validates power type details for classic era', async ({ expect }) => {
    const resp = await client.sendRequest(powerType('static-classic1x', 0));
    const parsed = powerTypeResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Power type validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  });
  test('validates power type details for classic progression', async ({ expect }) => {
    const resp = await client.sendRequest(powerType('static-classic', 0));
    const parsed = powerTypeResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Power type validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  });
});
