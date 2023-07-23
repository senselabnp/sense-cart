export interface QueryParams {
  page?: string;
  pageSize?: string;
}

export interface PageParams {
  page: number;
  pageSize: number;
  offset: number;
}

export interface PaginateInterface<Data> {
  data: Data[];
  total: number;
  hasNextPage: boolean;
  page: number;
  pageSize: number;
  totalPages: number;
}

export const DEFAULT_PAGE = 1;

export const DEFAULT_SIZE = 5;

/**
 * Page params.
 *
 * @param query any
 */
export function getPageParams(query: QueryParams): PageParams {
  const page: number = query.page ? Number(query.page) : DEFAULT_PAGE;
  const pageSize: number = query.pageSize
    ? Number(query.pageSize)
    : DEFAULT_SIZE;

  return {
    page,
    pageSize,
    offset: (page - 1) * pageSize,
  };
}

/**
 * Paginate Data
 *
 * @param data any
 * @param pageParams any
 * @param total number
 */
export function paginateData<Data>(
  data: Data[],
  total: number,
  pageParams: PageParams
): PaginateInterface<Data> {
  const lastPage = Math.max(Math.ceil(total / pageParams.pageSize), 1);
  const hasNextPage = pageParams.page < lastPage;

  return {
    data,
    totalPages: Math.ceil(total / pageParams.pageSize),
    total: Number(total),
    hasNextPage,
    page: pageParams.page,
    pageSize: pageParams.pageSize,
  };
}
