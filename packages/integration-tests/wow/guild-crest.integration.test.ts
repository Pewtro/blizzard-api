import { createBlizzardApiClient } from '@blizzard-api/client';
import { guildCrestBorder, guildCrestComponentsIndex, guildCrestEmblem } from '@blizzard-api/wow/guild-crest';
import { describe, expect, test } from 'vitest';
import { prettifyError } from 'zod';
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
  test('validates guild crest components index', async () => {
    const resp = await client.sendRequest(guildCrestComponentsIndex());
    const parsed = guildCrestComponentsIndexResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Guild crest components index validation failed:', prettifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  });

  test('validates guild crest border', async () => {
    const index = await client.sendRequest(guildCrestComponentsIndex());
    const parsedIndex = guildCrestComponentsIndexResponseSchema.safeParse(index);
    if (!parsedIndex.success) {
      console.error('Guild crest components index validation failed:', prettifyError(parsedIndex.error));
    }
    expect(parsedIndex.success).toBe(true);

    const borderId = parsedIndex.data!.borders[0]!.id;
    const resp = await client.sendRequest(guildCrestBorder(borderId));
    const parsed = guildCrestBorderEmblemResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Guild crest border validation failed:', borderId, prettifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  });

  test('validates guild crest emblem', async () => {
    const index = await client.sendRequest(guildCrestComponentsIndex());
    const parsedIndex = guildCrestComponentsIndexResponseSchema.safeParse(index);
    if (!parsedIndex.success) {
      console.error('Guild crest components index validation failed:', prettifyError(parsedIndex.error));
    }
    expect(parsedIndex.success).toBe(true);

    const emblemId = parsedIndex.data!.emblems[0]!.id;
    const resp = await client.sendRequest(guildCrestEmblem(emblemId));
    const parsed = guildCrestBorderEmblemResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Guild crest emblem validation failed:', emblemId, prettifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  });
});
