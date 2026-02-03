import { createBlizzardApiClient } from '@blizzard-api/client';
import * as wow from '@blizzard-api/wow';
import { describe, it } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import {
  journalEncounterIndexResponseSchema,
  journalEncounterResponseSchema,
  journalExpansionIndexResponseSchema,
  journalExpansionResponseSchema,
} from '../../../generated/schemas/wow/journal';

describe('wow journal integration', () => {
  it('validates journal encounter index and expansion index with details', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'eu',
      secret: environment.blizzardClientSecret,
    });
    const enc = await client.sendRequest(wow.journalEncounterIndex());
    const parsedEnc = journalEncounterIndexResponseSchema.safeParse(enc);
    if (!parsedEnc.success) {
      console.error('Journal encounter index validation failed:', treeifyError(parsedEnc.error));
    }
    expect(parsedEnc.success).toBe(true);

    const firstEnc = parsedEnc.success ? parsedEnc.data.encounters[0] : undefined;
    if (firstEnc) {
      const encDetail = await client.sendRequest(wow.journalEncounter(firstEnc.id));
      const parsedEncDetail = journalEncounterResponseSchema.safeParse(encDetail);
      if (!parsedEncDetail.success) {
        console.error('Journal encounter detail validation failed:', treeifyError(parsedEncDetail.error));
      }
      expect(parsedEncDetail.success).toBe(true);
    }

    const exp = await client.sendRequest(wow.journalExpansionIndex());
    const parsedExp = journalExpansionIndexResponseSchema.safeParse(exp);
    if (!parsedExp.success) {
      console.error('Journal expansion index validation failed:', treeifyError(parsedExp.error));
    }
    expect(parsedExp.success).toBe(true);

    const firstExp = parsedExp.success ? parsedExp.data.tiers[0] : undefined;
    if (firstExp) {
      const expDetail = await client.sendRequest(wow.journalExpansion(firstExp.id));
      const parsedExpDetail = journalExpansionResponseSchema.safeParse(expDetail);
      if (!parsedExpDetail.success) {
        console.error('Journal expansion detail validation failed:', treeifyError(parsedExpDetail.error));
      }
      expect(parsedExpDetail.success).toBe(true);
    }
  }, 30_000);
});
