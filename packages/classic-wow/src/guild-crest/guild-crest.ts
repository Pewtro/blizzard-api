import type { BlizzardNamespaces, Resource } from '@blizzard-api/core';
import { base, mediaBase } from '../../../wow/src/base';
import type { GuildCrestBorderEmblemResponse, GuildCrestComponentsIndexResponse } from './types';

export const classicGuildCrestApi = {
  /**
   * Returns an index of guild crest media.
   * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
   * @returns The guild crest components index. See {@link GuildCrestComponentsIndexResponse}.
   */
  guildCrestComponentsIndex: (
    namespace: Extract<BlizzardNamespaces, 'static-classic' | 'static-classic1x'>,
  ): Resource<GuildCrestComponentsIndexResponse> => {
    return {
      path: `${base}/guild-crest/index`,
      namespace,
    };
  },
  /**
   * Returns media for a guild crest border by ID.
   * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
   * @param borderId The guild crest border ID.
   * @returns The guild crest border. See {@link GuildCrestBorderEmblemResponse}.
   */
  guildCrestBorder: (
    namespace: Extract<BlizzardNamespaces, 'static-classic' | 'static-classic1x'>,
    borderId: number,
  ): Resource<GuildCrestBorderEmblemResponse> => {
    return {
      path: `${mediaBase}/guild-crest/border/${borderId}`,
      namespace,
    };
  },
  /**
   * Returns media for a guild crest emblem by ID.
   * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
   * @param emblemId The guild crest emblem ID.
   * @returns The guild crest emblem. See {@link GuildCrestBorderEmblemResponse}.
   */
  guildCrestEmblem: (
    namespace: Extract<BlizzardNamespaces, 'static-classic' | 'static-classic1x'>,
    emblemId: number,
  ): Resource<GuildCrestBorderEmblemResponse> => {
    return {
      path: `${mediaBase}/guild-crest/emblem/${emblemId}`,
      namespace,
    };
  },
};
