import { describe, expect, it } from 'vitest';
import { guild, guildAchievements, guildActivity, guildRoster } from './guild';

describe('guild', () => {
  it('should return the correct ProtectedResource for guild', () => {
    const realmSlug = 'realm';
    const nameSlug = 'name';
    const token = 'token';

    const result = guild(realmSlug, nameSlug, token);

    expect(result.namespace).toBe('profile');
    expect(result.path).toBe(`/data/wow/guild/${realmSlug}/${nameSlug}`);
    expect(result.token).toBe(token);
  });

  it('should return the correct ProtectedResource for guildActivity', () => {
    const realmSlug = 'realm';
    const nameSlug = 'name';
    const token = 'token';

    const result = guildActivity(realmSlug, nameSlug, token);

    expect(result.namespace).toBe('profile');
    expect(result.path).toBe(`/data/wow/guild/${realmSlug}/${nameSlug}/activity`);
    expect(result.token).toBe(token);
  });

  it('should return the correct ProtectedResource for guildAchievements', () => {
    const realmSlug = 'realm';
    const nameSlug = 'name';
    const token = 'token';

    const result = guildAchievements(realmSlug, nameSlug, token);

    expect(result.namespace).toBe('profile');
    expect(result.path).toBe(`/data/wow/guild/${realmSlug}/${nameSlug}/achievements`);
    expect(result.token).toBe(token);
  });

  it('should return the correct ProtectedResource for guildRoster', () => {
    const realmSlug = 'realm';
    const nameSlug = 'name';
    const token = 'token';

    const result = guildRoster(realmSlug, nameSlug, token);

    expect(result.namespace).toBe('profile');
    expect(result.path).toBe(`/data/wow/guild/${realmSlug}/${nameSlug}/roster`);
    expect(result.token).toBe(token);
  });
});
