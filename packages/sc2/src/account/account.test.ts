import { describe, expect, test } from 'vitest';
import { player } from './account';

describe('account', () => {
  test('should return the correct resource path for a given accountId', () => {
    const accountId = '12345';
    const result = player(accountId);
    expect(result).toEqual({
      path: `/sc2/player/12345`,
    });
  });
});
