import { describe, expect, it } from 'vitest';
import { characterProfileStatus, characterProfileSummary } from './character-profile';

describe('characterProfileSummary', () => {
  it('should return the correct protected resource object', () => {
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
  it('should return the correct protected resource object', () => {
    const realmSlug = 'example-realm';
    const characterName = 'example-character';

    const result = characterProfileStatus(realmSlug, characterName);

    expect(result).toEqual({
      namespace: 'profile',
      path: `/profile/wow/character/${realmSlug}/${characterName.toLowerCase()}/status`,
    });
  });
});
