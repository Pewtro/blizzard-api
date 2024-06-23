/**
 * Base search parameters
 * @interface BaseSearchParameters
 * @property orderby The field to order results by.
 * @property _page The page number to return.
 * @example
 * const params: BaseSearchParameters = {
 *  orderby: 'name',
 *  _page: 1,
 * };
 */
export interface BaseSearchParameters {
  _page?: number;
  orderby?: Array<string> | string;
}

/**
 * Search response
 * @interface SearchResponse
 * @property page The current page number.
 * @property pageSize The number of results per page.
 * @property maxPageSize The maximum number of results per page.
 * @property pageCount The total number of pages.
 * @property results The search results.
 * @example
 * const response: SearchResponse = {
 *  page: 1,
 *  pageSize: 20,
 *  maxPageSize: 100,
 *  pageCount: 10,
 *  results: [],
 * };
 */
export interface SearchResponse<T> {
  maxPageSize: number;
  page: number;
  pageCount: number;
  pageSize: number;
  resultCountCapped?: boolean;
  results: Array<T>;
}
