import { describe, expect, test } from 'vitest';
import { characterTitlesSummary } from './index';

describe('characterTitlesSummary', () => {
  test('should return the correct resource object', () => {
    const realmSlug = 'test-realm';
    const characterName = 'test-character';

    const expectedResource = {
      namespace: 'profile',
      path: `/profile/wow/character/${encodeURIComponent(realmSlug)}/${encodeURIComponent(characterName)}/titles`,
    };

    const result = characterTitlesSummary(realmSlug, characterName);

    expect(result).toEqual(expectedResource);
  });
});
