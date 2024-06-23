import type { Resource } from '@blizzard-api/core';
import { base, mediaBase } from '../base';
import type { GuildCrestBorderEmblemResponse, GuildCrestComponentsIndexResponse } from './types';

/**
 * Get the guild crest components index.
 * @returns The guild crest components index. See {@link GuildCrestComponentsIndexResponse}.
 */
export function guildCrestComponentsIndex(): Resource<GuildCrestComponentsIndexResponse> {
  return {
    namespace: 'static',
    path: `${base}/guild-crest/index`,
  };
}
/**
 * Get a guild crest border by ID.
 * @param borderId The guild crest border ID.
 * @returns The guild crest border. See {@link GuildCrestBorderEmblemResponse}.
 */
export function guildCrestBorder(borderId: number): Resource<GuildCrestBorderEmblemResponse> {
  return {
    namespace: 'static',
    path: `${mediaBase}/guild-crest/border/${borderId}`,
  };
}
/**
 * Get a guild crest emblem by ID.
 * @param emblemId The guild crest emblem ID.
 * @returns The guild crest emblem. See {@link GuildCrestBorderEmblemResponse}.
 */
export function guildCrestEmblem(emblemId: number): Resource<GuildCrestBorderEmblemResponse> {
  return {
    namespace: 'static',
    path: `${mediaBase}/guild-crest/emblem/${emblemId}`,
  };
}
