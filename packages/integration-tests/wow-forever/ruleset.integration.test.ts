import { ruleset, rulesetIndex } from '@blizzard-api/wow-forever';
import { describe, test } from 'vitest';
import { prettifyError } from 'zod';
import { rulesetIndexResponseSchema, rulesetResponseSchema } from '../../../generated/schemas/wow-forever';
import { getIntegrationTestClient } from '../utils/client';
import { getRandomSample } from '../utils/random';

describe('wow-forever ruleset integration', async () => {
  const client = await getIntegrationTestClient();

  test('validates the ruleset index and sampled rulesets', async ({ expect }) => {
    const indexResponse = await client.sendRequest(rulesetIndex());
    const parsedIndex = rulesetIndexResponseSchema.safeParse(indexResponse);
    if (!parsedIndex.success) {
      console.error('Ruleset index validation failed:', prettifyError(parsedIndex.error));
    }
    expect(parsedIndex.success).toBe(true);

    const sampledRulesets = getRandomSample(parsedIndex.data?.rulesets, 2);
    for (const rulesetEntry of sampledRulesets) {
      const rulesetResponse = await client.sendRequest(ruleset(rulesetEntry.id));
      const parsedRuleset = rulesetResponseSchema.safeParse(rulesetResponse);
      if (!parsedRuleset.success) {
        console.error('Ruleset validation failed for id', rulesetEntry.id, prettifyError(parsedRuleset.error));
      }
      expect(parsedRuleset.success).toBe(true);
    }
  });
});
