import { describe, expect, test } from 'vitest';
import { characterProfileStatus, characterProfileSummary } from './character-profile';

describe('characterProfileSummary', () => {
  test('should return the correct protected resource object', () => {
    const realmSlug = 'example-realm';
    const characterName = 'example-character';

    const result = characterProfileSummary(realmSlug, characterName);

    expect(result).toEqual({
      namespace: 'profile',
      path: `/profile/wow/character/${realmSlug}/${characterName.toLowerCase()}`,
    });
  });
});

describe('characterProfileStatus', () => {
  test('should return the correct protected resource object', () => {
    const realmSlug = 'example-realm';
    const characterName = 'example-character';

    const result = characterProfileStatus(realmSlug, characterName);

    expect(result).toEqual({
      namespace: 'profile',
      path: `/profile/wow/character/${realmSlug}/${characterName.toLowerCase()}/status`,
    });
  });
});
