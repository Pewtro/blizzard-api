import type { Resource } from '@blizzard-api/core';
import { base, mediaBase } from '../base';
import type { GuildCrestBorderEmblemResponse, GuildCrestComponentsIndexResponse } from './types';

export const guildCrestApi = {
  /**
   * Get the guild crest components index.
   * @returns The guild crest components index. See {@link GuildCrestComponentsIndexResponse}.
   */
  guildCrestComponentsIndex: (): Resource<GuildCrestComponentsIndexResponse> => {
    return {
      path: `${base}/guild-crest/index`,
      namespace: 'static',
    };
  },
  /**
   * Get a guild crest border by ID.
   * @param borderId The guild crest border ID.
   * @returns The guild crest border. See {@link GuildCrestBorderEmblemResponse}.
   */
  guildCrestBorder: (borderId: number): Resource<GuildCrestBorderEmblemResponse> => {
    return {
      path: `${mediaBase}/guild-crest/border/${borderId}`,
      namespace: 'static',
    };
  },
  /**
   * Get a guild crest emblem by ID.
   * @param emblemId The guild crest emblem ID.
   * @returns The guild crest emblem. See {@link GuildCrestBorderEmblemResponse}.
   */
  guildCrestEmblem: (emblemId: number): Resource<GuildCrestBorderEmblemResponse> => {
    return {
      path: `${mediaBase}/guild-crest/emblem/${emblemId}`,
      namespace: 'static',
    };
  },
};
