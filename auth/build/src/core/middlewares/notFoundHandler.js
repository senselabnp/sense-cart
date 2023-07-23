"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const statusCodes = require("../constants/statusCodes");
/**
 * Error response middleware for 404 not found.
 *
 * @param  {Request} req
 * @param  {Response} res
 * @param  {NextFunction} next
 * @returns <void>
 */
function notFoundHandler(_, res) {
    res.status(statusCodes.NOT_FOUND).json({
        error: {
            code: statusCodes.NOT_FOUND,
            message: 'Not found',
        },
    });
}
exports.default = notFoundHandler;
//# sourceMappingURL=notFoundHandler.js.map