import { createBlizzardApiClient } from '@blizzard-api/client';
import { guildCrestBorder, guildCrestComponentsIndex, guildCrestEmblem } from '@blizzard-api/wow/guild-crest';
import { describe, test } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import {
  guildCrestBorderEmblemResponseSchema,
  guildCrestComponentsIndexResponseSchema,
} from '../../../generated/schemas/wow';

describe('wow guild crest integration', async () => {
  const client = await createBlizzardApiClient({
    key: environment.blizzardClientId,
    origin: 'eu',
    secret: environment.blizzardClientSecret,
  });
  test('validates guild crest components index', async ({ expect }) => {
    const resp = await client.sendRequest(guildCrestComponentsIndex());
    const parsed = guildCrestComponentsIndexResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Guild crest components index validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  });

  test('validates guild crest border', async ({ expect }) => {
    const resp = await client.sendRequest(guildCrestBorder(1));
    const parsed = guildCrestBorderEmblemResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Guild crest border validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  });

  test('validates guild crest emblem', async ({ expect }) => {
    const resp = await client.sendRequest(guildCrestEmblem(1));
    const parsed = guildCrestBorderEmblemResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Guild crest emblem validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  });
});
