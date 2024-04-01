import type { Resource } from '@blizzard-api/core';
import { base, mediaBase } from '../base';

export const guildCrestApi = {
  guildCrestComponentsIndex: (): Resource<void> => {
    return {
      path: `${base}/guild-crest/index`,
      namespace: 'static',
    };
  },
  guildCrestBorder: (borderId: number): Resource<void> => {
    return {
      path: `${mediaBase}/guild-crest/border/${borderId}`,
      namespace: 'static',
    };
  },
  guildCrestEmblem: (emblemId: number): Resource<void> => {
    return {
      path: `${mediaBase}/guild-crest/emblem/${emblemId}`,
      namespace: 'static',
    };
  },
};
