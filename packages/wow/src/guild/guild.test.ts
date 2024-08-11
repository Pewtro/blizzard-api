import { describe, expect, it } from 'vitest';
import { guild, guildAchievements, guildActivity, guildRoster } from './guild';

describe('guild', () => {
  it('should return the correct ProtectedResource for guild', () => {
    const realmSlug = 'realm';
    const nameSlug = 'name';

    const result = guild(realmSlug, nameSlug);

    expect(result.namespace).toBe('profile');
    expect(result.path).toBe(`/data/wow/guild/${realmSlug}/${nameSlug}`);
  });

  it('should return the correct ProtectedResource for guildActivity', () => {
    const realmSlug = 'realm';
    const nameSlug = 'name';

    const result = guildActivity(realmSlug, nameSlug);

    expect(result.namespace).toBe('profile');
    expect(result.path).toBe(`/data/wow/guild/${realmSlug}/${nameSlug}/activity`);
  });

  it('should return the correct ProtectedResource for guildAchievements', () => {
    const realmSlug = 'realm';
    const nameSlug = 'name';

    const result = guildAchievements(realmSlug, nameSlug);

    expect(result.namespace).toBe('profile');
    expect(result.path).toBe(`/data/wow/guild/${realmSlug}/${nameSlug}/achievements`);
  });

  it('should return the correct ProtectedResource for guildRoster', () => {
    const realmSlug = 'realm';
    const nameSlug = 'name';

    const result = guildRoster(realmSlug, nameSlug);

    expect(result.namespace).toBe('profile');
    expect(result.path).toBe(`/data/wow/guild/${realmSlug}/${nameSlug}/roster`);
  });
});
