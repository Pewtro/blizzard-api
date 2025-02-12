/**
 * Base search parameters
 * orderby The field to order results by.
 * _page The page number to return.
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
 * page The current page number.
 * pageSize The number of results per page.
 * maxPageSize The maximum number of results per page.
 * pageCount The total number of pages.
 * results The search results.
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
