import { guildCrestBorder, guildCrestComponentsIndex, guildCrestEmblem } from '@blizzard-api/wow-forever';
import { describe, test } from 'vitest';
import { prettifyError } from 'zod';
import {
  guildCrestBorderEmblemResponseSchema,
  guildCrestComponentsIndexResponseSchema,
} from '../../../generated/schemas/wow-forever';
import { getIntegrationTestClient } from '../utils/client';

describe('wow-forever guild crest integration', async () => {
  const client = await getIntegrationTestClient();

  test('validates the guild crest components index', async ({ expect }) => {
    const resp = await client.sendRequest(guildCrestComponentsIndex());
    const parsed = guildCrestComponentsIndexResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Guild crest components index validation failed:', prettifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  });

  test('validates guild crest border media', async ({ expect }) => {
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
      console.error('Guild crest border media validation failed:', borderId, prettifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  });

  test('validates guild crest emblem media', async ({ expect }) => {
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
      console.error('Guild crest emblem media validation failed:', emblemId, prettifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  });
});
