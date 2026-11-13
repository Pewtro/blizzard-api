import type { Resource } from '@blizzard-api/core';
import { wowBasePath, wowSearchBasePath } from '@blizzard-api/core';
import type {
  ItemAppearanceResponse,
  ItemAppearanceSearchParameters,
  ItemAppearanceSearchResponse,
  ItemAppearanceSetIndexResponse,
  ItemAppearanceSetResponse,
  ItemAppearanceSlotIndexResponse,
  ItemAppearanceSlotResponse,
  ItemAppearanceSlotType,
} from './types';

/**
 * Get an item appearance by ID.
 * @param appearanceId The item appearance ID.
 * @returns The item appearance. See {@link ItemAppearanceResponse}.
 */
export function itemAppearance(appearanceId: number): Resource<ItemAppearanceResponse> {
  return {
    namespace: 'static',
    path: `${wowBasePath}/item-appearance/${encodeURIComponent(appearanceId)}`,
  };
}
/**
 * Search for item appearances.
 * @param options The search parameters. See {@link ItemAppearanceSearchParameters}.
 * @returns The search results. See {@link ItemAppearanceSearchResponse}.
 */
export function itemAppearanceSearch(
  options: ItemAppearanceSearchParameters,
): Resource<ItemAppearanceSearchResponse, ItemAppearanceSearchParameters> {
  return {
    namespace: 'static',
    parameters: {
      _page: options._page,
      id: options.id,
      orderby: Array.isArray(options.orderby) ? options.orderby.join(',') : options.orderby,
    },
    path: `${wowSearchBasePath}/item-appearance`,
  };
}
/**
 * Get an item appearance set by ID.
 * @param appearanceSetId The item appearance set ID.
 * @returns The item appearance set. See {@link ItemAppearanceSetResponse}.
 */
export function itemAppearanceSet(appearanceSetId: number): Resource<ItemAppearanceSetResponse> {
  return {
    namespace: 'static',
    path: `${wowBasePath}/item-appearance/set/${encodeURIComponent(appearanceSetId)}`,
  };
}
/**
 * Get an item appearance set index.
 * @returns The item appearance set index. See {@link ItemAppearanceSetIndexResponse}.
 */
export function itemAppearanceSetIndex(): Resource<ItemAppearanceSetIndexResponse> {
  return {
    namespace: 'static',
    path: `${wowBasePath}/item-appearance/set/index`,
  };
}
/**
 * Get an item appearance slot by slot type.
 * @param slotType The item appearance slot type.
 * @returns The item appearance slot. See {@link ItemAppearanceSlotResponse}.
 */
export function itemAppearanceSlot(slotType: ItemAppearanceSlotType): Resource<ItemAppearanceSlotResponse> {
  return {
    namespace: 'static',
    path: `${wowBasePath}/item-appearance/slot/${encodeURIComponent(slotType)}`,
  };
}
/**
 * Get an item appearance slot index.
 * @returns The item appearance slot index. See {@link ItemAppearanceSlotIndexResponse}.
 */
export function itemAppearanceSlotIndex(): Resource<ItemAppearanceSlotIndexResponse> {
  return {
    namespace: 'static',
    path: `${wowBasePath}/item-appearance/slot/index`,
  };
}
