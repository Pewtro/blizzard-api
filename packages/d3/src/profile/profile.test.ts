import { describe, it } from 'vitest';
import { profileBase } from '../base';
import { account, accountHero, accountHeroFollowerItems, accountHeroItems } from './profile';

const battleTag = 'example#1234';
const heroId = 42;

describe.concurrent('profile', () => {
  it('account should return the correct resource', ({ expect }) => {
    const expectedPath = `${profileBase}/example#1234`;

    const resource = account(battleTag);

    expect(resource.path).toBe(expectedPath);
  });

  it('should return the correct resource path', ({ expect }) => {
    const expectedPath = `${profileBase}/example#1234/hero/42`;

    const resource = accountHero(battleTag, heroId);

    expect(resource.path).toBe(expectedPath);
  });

  it('should return the correct resource path', ({ expect }) => {
    const expectedPath = `${profileBase}/example#1234/hero/42/items`;

    const resource = accountHeroItems(battleTag, heroId);

    expect(resource.path).toBe(expectedPath);
  });

  it('accountHeroFollowerItems should return the correct resource', ({ expect }) => {
    const expectedPath = `${profileBase}/example#1234/hero/42/follower-items`;

    const resource = accountHeroFollowerItems(battleTag, heroId);

    expect(resource.path).toBe(expectedPath);
  });
});
