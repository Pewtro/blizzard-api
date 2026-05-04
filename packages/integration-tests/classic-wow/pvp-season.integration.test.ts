import { pvpSeason, pvpSeasonIndex } from '@blizzard-api/classic-wow/pvp-season';
import { createBlizzardApiClient } from '@blizzard-api/client';
import { describe, test } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import { pvpSeasonIndexResponseSchema, pvpSeasonResponseSchema } from '../../../generated/schemas/classic-wow';

describe('classic-wow pvp season integration', async () => {
  const client = await createBlizzardApiClient({
    key: environment.blizzardClientId,
    origin: 'eu',
    secret: environment.blizzardClientSecret,
  });
  test('validates pvp season index and season details', async ({ expect }) => {
    const season = await client.sendRequest(pvpSeasonIndex('dynamic-classic'));
    const parsed = pvpSeasonIndexResponseSchema.safeParse(season);
    if (!parsed.success) {
      console.error('PvP season index validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);

    const seasonId = season.current_season.id;
    const seasonDetail = await client.sendRequest(pvpSeason('dynamic-classic', seasonId));
    const parsedSeasonDetail = pvpSeasonResponseSchema.safeParse(seasonDetail);
    if (!parsedSeasonDetail.success) {
      console.log('seasonDetail', seasonDetail);
      console.log('parsedSeasonDetail.error', parsedSeasonDetail.error);
      console.error('PVP season detail validation failed:', seasonId, treeifyError(parsedSeasonDetail.error));
    }
    expect(parsedSeasonDetail.success).toBe(true);
  });
});
