import { createBlizzardApiClient } from '@blizzard-api/client';
import { d3 } from '@blizzard-api/d3';
import { describe, test } from 'vitest';
import { environment } from '../../../environment';
import { actIndexResponseSchema, actResponseSchema } from '../../../generated/schemas/d3';

describe('d3 act integration', async () => {
  const client = await createBlizzardApiClient({
    key: environment.blizzardClientId,
    origin: 'eu',
    secret: environment.blizzardClientSecret,
  });

  test('fetches the act index and validates act details', async ({ expect }) => {
    const response = await client.sendRequest(d3.actIndex());
    const parsedResponse = actIndexResponseSchema.safeParse(response);
    if (!parsedResponse.success) {
      console.error('Act index response validation failed:', parsedResponse.error);
    }
    expect(parsedResponse.success).toBe(true);

    const actDetailsPromises = response!.acts.map(async (act) => await client.sendRequest(d3.act(act.number)));
    const actDetailsResponses = await Promise.all(actDetailsPromises);

    for (const actDetails of actDetailsResponses) {
      const parsedActDetails = actResponseSchema.safeParse(actDetails);
      if (!parsedActDetails.success) {
        console.error('Act details validation failed for act id', actDetails?.number, parsedActDetails.error);
      }
      expect(parsedActDetails.success).toBe(true);
    }
  });
});
