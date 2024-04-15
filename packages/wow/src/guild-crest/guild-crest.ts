import type { Resource } from '@blizzard-api/core';
import { base, mediaBase } from '../base';
import type { GuildCrestBorderEmblemResponse, GuildCrestComponentsIndexResponse } from './types';

export const guildCrestApi = {
  guildCrestComponentsIndex: (): Resource<GuildCrestComponentsIndexResponse> => {
    return {
      path: `${base}/guild-crest/index`,
      namespace: 'static',
    };
  },
  guildCrestBorder: (borderId: number): Resource<GuildCrestBorderEmblemResponse> => {
    return {
      path: `${mediaBase}/guild-crest/border/${borderId}`,
      namespace: 'static',
    };
  },
  guildCrestEmblem: (emblemId: number): Resource<GuildCrestBorderEmblemResponse> => {
    return {
      path: `${mediaBase}/guild-crest/emblem/${emblemId}`,
      namespace: 'static',
    };
  },
};
