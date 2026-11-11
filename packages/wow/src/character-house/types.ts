import type { ResponseBase } from '@blizzard-api/core';

/**
 * The response for a character's house.
 *
 * Blizzard disabled this endpoint in early 2026 over player privacy concerns, and it currently returns 404 even for
 * characters that own a house. The response type is unverified until the endpoint returns.
 * @see {@link https://us.forums.blizzard.com/en/blizzard/t/new-housing-apis/56815}
 */
export interface CharacterHouseResponse extends ResponseBase {
  id?: number;
}
