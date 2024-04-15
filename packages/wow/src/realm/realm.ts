import type { Resource } from '@blizzard-api/core';
import { base } from '../base';
import type { RealmIndexResponse, RealmResponse } from './types';

export const realmApi = {
  realm: (realmSlug: string): Resource<RealmResponse> => {
    return {
      path: `${base}/realm/${realmSlug}`,
      namespace: 'dynamic',
    };
  },
  realmIndex: (): Resource<RealmIndexResponse> => {
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
