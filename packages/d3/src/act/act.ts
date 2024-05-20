import type { Resource } from '@blizzard-api/core';
import { base } from '../base';
import type { ActIndexResponse, ActResponse } from './types';

export function act(actId: number): Resource<ActResponse> {
  return {
    path: `${base}/act/${actId}`,
  };
}

export function actIndex(): Resource<ActIndexResponse> {
  return {
    path: `${base}/act`,
  };
}
