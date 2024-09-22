import { describe, expect, it } from 'vitest';
import { player } from './account';

describe('account', () => {
  it('should return the correct resource path for a given accountId', () => {
    const accountId = '12345';
    const result = player(accountId);
    expect(result).toEqual({
      path: `/sc2/player/12345`,
    });
  });
});
