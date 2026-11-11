import { describe, expect, test } from 'vitest';
import { guild, guildAchievements, guildActivity, guildRoster } from './index';

describe('guildApi', () => {
  test('guild should return a resource object with the correct path and namespace', () => {
    const resource = guild('skademaskinen');

    expect(resource.path).toBe('/data/wow/guild/skademaskinen');
    expect(resource.namespace).toBe('profile-forever');
  });

  test('guildAchievements should return a resource object with the correct path and namespace', () => {
    const resource = guildAchievements('skademaskinen');

    expect(resource.path).toBe('/data/wow/guild/skademaskinen/achievements');
    expect(resource.namespace).toBe('profile-forever');
  });

  test('guildActivity should return a resource object with the correct path and namespace', () => {
    const resource = guildActivity('skademaskinen');

    expect(resource.path).toBe('/data/wow/guild/skademaskinen/activity');
    expect(resource.namespace).toBe('profile-forever');
  });

  test('guildRoster should return a resource object with the correct path and namespace', () => {
    const resource = guildRoster('skademaskinen');

    expect(resource.path).toBe('/data/wow/guild/skademaskinen/roster');
    expect(resource.namespace).toBe('profile-forever');
  });
});
