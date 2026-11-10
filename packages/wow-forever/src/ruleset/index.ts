import type { Resource } from '@blizzard-api/core';
import { wowBasePath } from '@blizzard-api/core';
import type { RulesetIndexResponse, RulesetResponse } from './types';

/**
 * Get a ruleset by ID.
 * @param rulesetId The ruleset ID.
 * @returns The ruleset. See {@link RulesetResponse}.
 */
export function ruleset(rulesetId: number): Resource<RulesetResponse> {
  return {
    namespace: 'dynamic-forever',
    path: `${wowBasePath}/ruleset/${rulesetId}`,
  };
}
/**
 * Get a ruleset index.
 * @returns The ruleset index. See {@link RulesetIndexResponse}.
 */
export function rulesetIndex(): Resource<RulesetIndexResponse> {
  return {
    namespace: 'dynamic-forever',
    path: `${wowBasePath}/ruleset/index`,
  };
}
