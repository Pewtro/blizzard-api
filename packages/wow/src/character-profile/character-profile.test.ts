import { describe, expect, it } from 'vitest';
import { characterProfileStatus, characterProfileSummary } from './character-profile';

describe('characterProfileSummary', () => {
  it('should return the correct protected resource object', () => {
    const realmSlug = 'example-realm';
    const characterName = 'example-character';
    const token = 'example-token';

    const result = characterProfileSummary(realmSlug, characterName, token);

    expect(result).toEqual({
      namespace: 'profile',
      path: `/profile/wow/character/${realmSlug}/${characterName.toLowerCase()}`,
      token,
    });
  });
});

describe('characterProfileStatus', () => {
  it('should return the correct protected resource object', () => {
    const realmSlug = 'example-realm';
    const characterName = 'example-character';
    const token = 'example-token';

    const result = characterProfileStatus(realmSlug, characterName, token);

    expect(result).toEqual({
      namespace: 'profile',
      path: `/profile/wow/character/${realmSlug}/${characterName.toLowerCase()}/status`,
      token,
    });
  });
});
