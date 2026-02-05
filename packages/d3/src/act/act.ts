import type { Resource } from '@blizzard-api/core';
import { d3BasePath } from '@blizzard-api/core';
import type { ActIndexResponse, ActResponse } from './types';

/**
 * Returns the act information for the specified act ID.
 * @param actId The ID of the act.
 * @returns The act resource. See {@link ActResponse}.
 */
export function act(actId: number): Resource<ActResponse> {
  return {
    path: `${d3BasePath}/act/${actId}`,
  };
}

/**
 * Returns the index of acts.
 * @returns The act index resource. See {@link ActIndexResponse}.
 */
export function actIndex(): Resource<ActIndexResponse> {
  return {
    path: `${d3BasePath}/act`,
  };
}
