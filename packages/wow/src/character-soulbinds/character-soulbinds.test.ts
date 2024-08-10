import { describe, expect, it } from 'vitest';
import { characterSoulbinds } from './character-soulbinds';

describe('characterSoulbinds', () => {
  it('returns the correct ProtectedResource object', () => {
    const realmSlug = 'example-realm';
    const characterName = 'example-character';
    const token = 'example-token';

    const expectedResource = {
      namespace: 'profile',
      path: '/profile/wow/character/example-realm/example-character/soulbinds',
      token: 'example-token',
    };

    const result = characterSoulbinds(realmSlug, characterName, token);

    expect(result).toEqual(expectedResource);
  });
});
