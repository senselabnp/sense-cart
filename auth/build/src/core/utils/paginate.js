"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateData = exports.getPageParams = exports.DEFAULT_SIZE = exports.DEFAULT_PAGE = void 0;
exports.DEFAULT_PAGE = 1;
exports.DEFAULT_SIZE = 5;
/**
 * Page params.
 *
 * @param query any
 */
function getPageParams(query) {
    const page = query.page ? Number(query.page) : exports.DEFAULT_PAGE;
    const pageSize = query.pageSize
        ? Number(query.pageSize)
        : exports.DEFAULT_SIZE;
    return {
        page,
        pageSize,
        offset: (page - 1) * pageSize,
    };
}
exports.getPageParams = getPageParams;
/**
 * Paginate Data
 *
 * @param data any
 * @param pageParams any
 * @param total number
 */
function paginateData(data, total, pageParams) {
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
exports.paginateData = paginateData;
//# sourceMappingURL=paginate.js.map