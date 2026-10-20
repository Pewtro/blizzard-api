import { guildCrestBorder, guildCrestComponentsIndex, guildCrestEmblem } from '@blizzard-api/classic-wow/guild-crest';
import { createBlizzardApiClient } from '@blizzard-api/client';
import { describe, expect, test } from 'vitest';
import { prettifyError } from 'zod';
import { environment } from '../../../environment';
import {
  guildCrestBorderEmblemResponseSchema,
  guildCrestComponentsIndexResponseSchema,
} from '../../../generated/schemas/classic-wow';

describe('classic-wow guild crest integration', async () => {
  const client = await createBlizzardApiClient({
    key: environment.blizzardClientId,
    origin: 'eu',
    secret: environment.blizzardClientSecret,
  });
  test.each(['static-classic1x', 'static-classic', 'static-classicann'] as const)(
    'validates the guild crest components index and details for %s',
    async (namespace) => {
      const index = await client.sendRequest(guildCrestComponentsIndex(namespace));
      const parsedIndex = guildCrestComponentsIndexResponseSchema.safeParse(index);
      if (!parsedIndex.success) {
        console.error('Guild crest components index validation failed:', prettifyError(parsedIndex.error));
      }
      expect(parsedIndex.success).toBe(true);

      const borderId = parsedIndex.data!.borders[0]!.id;
      const border = await client.sendRequest(guildCrestBorder(namespace, borderId));
      const parsedBorder = guildCrestBorderEmblemResponseSchema.safeParse(border);
      if (!parsedBorder.success) {
        console.error('Guild crest border validation failed:', borderId, prettifyError(parsedBorder.error));
      }
      expect(parsedBorder.success).toBe(true);

      const emblemId = parsedIndex.data!.emblems[0]!.id;
      const emblem = await client.sendRequest(guildCrestEmblem(namespace, emblemId));
      const parsedEmblem = guildCrestBorderEmblemResponseSchema.safeParse(emblem);
      if (!parsedEmblem.success) {
        console.error('Guild crest emblem validation failed:', emblemId, prettifyError(parsedEmblem.error));
      }
      expect(parsedEmblem.success).toBe(true);
    },
  );
});
