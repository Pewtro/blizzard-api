import { describe, expect, test } from 'vitest';
import { characterProfileStatus, characterProfileSummary } from './index';

describe('characterProfileSummary', () => {
  test('should return the correct resource object', () => {
    const realmSlug = 'example-realm';
    const characterName = 'example-character';

    const result = characterProfileSummary(realmSlug, characterName);

    expect(result).toEqual({
      namespace: 'profile',
      path: `/profile/wow/character/${encodeURIComponent(realmSlug)}/${encodeURIComponent(characterName.toLowerCase())}`,
    });
  });
});

describe('characterProfileStatus', () => {
  test('should return the correct resource object', () => {
    const realmSlug = 'example-realm';
    const characterName = 'example-character';

    const result = characterProfileStatus(realmSlug, characterName);

    expect(result).toEqual({
      namespace: 'profile',
      path: `/profile/wow/character/${encodeURIComponent(realmSlug)}/${encodeURIComponent(characterName.toLowerCase())}/status`,
    });
  });
});
