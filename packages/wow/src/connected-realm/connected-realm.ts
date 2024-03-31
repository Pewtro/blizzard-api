import type { Resource } from '@blizzard-api/core';
import { base } from '../base';
import type { ConnectedRealmIndexResponse, ConnectedRealmResponse } from './types';

export const connectedRealmApi = {
  connectedRealmIndex: (): Resource<ConnectedRealmIndexResponse> => {
    return {
      path: `${base}/connected-realm/index`,
      namespace: 'dynamic',
    };
  },
  connectedRealm: (connectedRealmId: number): Resource<ConnectedRealmResponse> => {
    return {
      path: `${base}/connected-realm/${connectedRealmId}`,
      namespace: 'dynamic',
    };
  },
  // TODO Improve search endpoints
  /**
   * connectedRealmSearch: (): Resource<void> => {
   *  return {
   *    path: `${base}/search/connected-realm`,
   *    namespace: 'dynamic',
   *  };
   * },
   */
};
