import { describe, expect, it } from 'vitest';
import { characterTitlesSummary } from './character-titles';

describe('characterTitlesSummary', () => {
  it('should return the correct ProtectedResource object', () => {
    const realmSlug = 'test-realm';
    const characterName = 'test-character';

    const expectedResource = {
      namespace: 'profile',
      path: `/profile/wow/character/${realmSlug}/${characterName}/titles`,
    };

    const result = characterTitlesSummary(realmSlug, characterName);

    expect(result).toEqual(expectedResource);
  });
});
