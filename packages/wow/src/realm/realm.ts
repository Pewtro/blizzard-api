import type { Resource } from '@blizzard-api/core';
import { base } from '../base';

export const realmApi = {
  realm: (realmSlug: string): Resource<void> => {
    return {
      path: `${base}/realm/${realmSlug}`,
      namespace: 'dynamic',
    };
  },
  realmIndex: (): Resource<void> => {
    return {
      path: `${base}/realm/index`,
      namespace: 'dynamic',
    };
  },
  //TODO Improve search endpoints
  //realmSearch: (): Resource<void> => {
  //  return {
  //    path: `${base}/realm/search`,
  //    namespace: 'dynamic',
  //  };
  //},
};
