import * as classicWow from '@blizzard-api/classic-wow';
import { createBlizzardApiClient } from '@blizzard-api/client';
import { describe, it } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import { playableClassMediaResponseSchema, playableClassResponseSchema } from '../../../generated/schemas/classic-wow';

describe.concurrent('classic-wow playable class integration', () => {
  it('fetches playable class and media by id for classic era', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'us',
      secret: environment.blizzardClientSecret,
    });

    const indices = await client.sendRequest(classicWow.playableClassIndex('static-classic1x'));

    const classRequests = [];
    const mediaRequests = [];
    for (const playerClass of indices.classes) {
      classRequests.push(client.sendRequest(classicWow.playableClass('static-classic1x', playerClass.id)));
      mediaRequests.push(client.sendRequest(classicWow.playableClassMedia('static-classic1x', playerClass.id)));
    }
    const responses = await Promise.all(classRequests);
    for (const resp of responses) {
      const parsed = playableClassResponseSchema.safeParse(resp);
      if (!parsed.success) {
        console.error('Playable class validation failed:', treeifyError(parsed.error));
      }
      expect(parsed.success).toBe(true);
    }
    const mediaResponses = await Promise.all(mediaRequests);
    for (const mediaResp of mediaResponses) {
      const mediaParsed = playableClassMediaResponseSchema.safeParse(mediaResp);

      if (!mediaParsed.success) {
        console.error('Playable class media validation failed:', treeifyError(mediaParsed.error));
      }
      expect(mediaParsed.success).toBe(true);
    }
  }, 30_000);
  it('fetches playable class and media by id for classic', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'us',
      secret: environment.blizzardClientSecret,
    });

    const indices = await client.sendRequest(classicWow.playableClassIndex('static-classic'));

    const classRequests = [];
    const mediaRequests = [];
    for (const playerClass of indices.classes) {
      classRequests.push(client.sendRequest(classicWow.playableClass('static-classic', playerClass.id)));
      mediaRequests.push(client.sendRequest(classicWow.playableClassMedia('static-classic', playerClass.id)));
    }
    const responses = await Promise.all(classRequests);
    for (const resp of responses) {
      const parsed = playableClassResponseSchema.safeParse(resp);
      if (!parsed.success) {
        console.error('Playable class validation failed:', treeifyError(parsed.error));
      }
      expect(parsed.success).toBe(true);
    }
    const mediaResponses = await Promise.all(mediaRequests);
    for (const mediaResp of mediaResponses) {
      const mediaParsed = playableClassMediaResponseSchema.safeParse(mediaResp);

      if (!mediaParsed.success) {
        console.error('Playable class media validation failed:', treeifyError(mediaParsed.error));
      }
      expect(mediaParsed.success).toBe(true);
    }
  }, 30_000);
});
