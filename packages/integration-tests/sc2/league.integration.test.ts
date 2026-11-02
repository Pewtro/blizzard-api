import { sc2 } from '@blizzard-api/sc2';
import { describe, test } from 'vitest';
import { prettifyError } from 'zod';
import { leagueDataResponseSchema } from '../../../generated/schemas/sc2';
import { getIntegrationTestClient } from '../utils/client';

describe('sc2 league integration', async () => {
  const client = await getIntegrationTestClient();

  test('fetches league data', async ({ expect }) => {
    const response = await client.sendRequest(sc2.getLeagueData('42', 'lotv-1v1', 'arranged', 'grandmaster'));
    const parsedResponse = leagueDataResponseSchema.safeParse(response);
    if (!parsedResponse.success) {
      console.error('League Data failed', prettifyError(parsedResponse.error));
    }
    expect(parsedResponse.success).toBe(true);
  });
});
