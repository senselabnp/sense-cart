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
export declare const DEFAULT_PAGE = 1;
export declare const DEFAULT_SIZE = 5;
/**
 * Page params.
 *
 * @param query any
 */
export declare function getPageParams(query: QueryParams): PageParams;
/**
 * Paginate Data
 *
 * @param data any
 * @param pageParams any
 * @param total number
 */
export declare function paginateData<Data>(data: Data[], total: number, pageParams: PageParams): PaginateInterface<Data>;
