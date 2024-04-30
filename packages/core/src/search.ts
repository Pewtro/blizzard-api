export interface BaseSearchParameters {
  orderby?: string | Array<string>;
  _page?: number;
}

export interface SearchResponse<T> {
  page: number;
  pageSize: number;
  maxPageSize: number;
  pageCount: number;
  results: Array<T>;
}
