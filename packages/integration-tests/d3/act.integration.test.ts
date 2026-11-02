import { d3 } from '@blizzard-api/d3';
import { describe, test } from 'vitest';
import { prettifyError } from 'zod';
import { actIndexResponseSchema, actResponseSchema } from '../../../generated/schemas/d3';
import { getIntegrationTestClient } from '../utils/client';

describe('d3 act integration', async () => {
  const client = await getIntegrationTestClient();

  test('fetches the act index and validates act details', async ({ expect }) => {
    const response = await client.sendRequest(d3.actIndex());
    const parsedResponse = actIndexResponseSchema.safeParse(response);
    if (!parsedResponse.success) {
      console.error('Act index response validation failed:', prettifyError(parsedResponse.error));
    }
    expect(parsedResponse.success).toBe(true);

    const actDetailsPromises = response!.acts.map(async (act) => client.sendRequest(d3.act(act.number)));
    const actDetailsResponses = await Promise.all(actDetailsPromises);

    for (const actDetails of actDetailsResponses) {
      const parsedActDetails = actResponseSchema.safeParse(actDetails);
      if (!parsedActDetails.success) {
        console.error(
          'Act details validation failed for act id',
          actDetails?.number,
          prettifyError(parsedActDetails.error),
        );
      }
      expect(parsedActDetails.success).toBe(true);
    }
  });
});
