import { describe, expect, it } from 'vitest';
import { characterMediaSummary } from './character-media';

describe('characterMediaSummary', () => {
  it('should return the correct ProtectedResource object', () => {
    const realmSlug = 'test-realm';
    const characterName = 'test-character';

    const expectedResource = {
      namespace: 'profile',
      path: `/profile/wow/character/${realmSlug}/${characterName}/character-media`,
    };

    const result = characterMediaSummary(realmSlug, characterName);

    expect(result).toEqual(expectedResource);
  });
});
