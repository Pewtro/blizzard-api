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
 * };
 */
export interface SearchResponseWithoutResults {
  maxPageSize: number;
  page: number;
  pageCount: number;
  pageSize: number;
  resultCountCapped?: boolean;
}
