import { describe, expect, it } from 'vitest';
import { characterMediaSummary } from './character-media';

describe('characterMediaSummary', () => {
  it('should return the correct ProtectedResource object', () => {
    const realmSlug = 'test-realm';
    const characterName = 'test-character';
    const token = 'test-token';

    const expectedResource = {
      namespace: 'profile',
      path: `/profile/wow/character/${realmSlug}/${characterName}/character-media`,
      token,
    };

    const result = characterMediaSummary(realmSlug, characterName, token);

    expect(result).toEqual(expectedResource);
  });
});
