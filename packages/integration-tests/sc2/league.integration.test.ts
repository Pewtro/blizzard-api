import { createBlizzardApiClient } from '@blizzard-api/client';
import { sc2 } from '@blizzard-api/sc2';
import { describe, test } from 'vitest';
import { environment } from '../../../environment';
import { leagueDataResponseSchema } from '../../../generated/schemas/sc2';

describe('sc2 league integration', async () => {
  const client = await createBlizzardApiClient({
    key: environment.blizzardClientId,
    origin: 'eu',
    secret: environment.blizzardClientSecret,
  });

  test('fetches league data', async ({ expect }) => {
    const response = await client.sendRequest(sc2.getLeagueData('42', 'lotv-1v1', 'arranged', 'grandmaster'));
    const parsedResponse = leagueDataResponseSchema.safeParse(response);
    if (!parsedResponse.success) {
      console.error('League Data failed', parsedResponse.error);
    }
    expect(parsedResponse.success).toBe(true);
  });
});
