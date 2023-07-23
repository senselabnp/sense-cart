"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = exports.login = exports.register = void 0;
const userService = require("../services/user.service");
const statusCodes = require("../core/constants/statusCodes");
const paginate_1 = require("../core/utils/paginate");
/**
 * Create log
 *
 * @param _req object
 * @param res object
 * @param next function
 */
const register = async (_req, res) => {
    const data = await userService.create();
    res.status(statusCodes.OK).json({
        code: statusCodes.OK,
        data,
    });
};
exports.register = register;
/**
 * Get the list of logs
 *
 * @param _req object
 * @param res object
 * @param next function
 */
const login = async (req, res) => {
    const pageParams = (0, paginate_1.getPageParams)(req.query);
    const data = await userService.getUsersWithPage(pageParams);
    res.status(statusCodes.OK).json({
        code: statusCodes.OK,
        data,
    });
};
exports.login = login;
/**
 * Get the list of logs
 *
 * @param _req object
 * @param res object
 * @param next function
 */
const logout = async (req, res) => {
    const pageParams = (0, paginate_1.getPageParams)(req.query);
    const data = await userService.getUsersWithPage(pageParams);
    res.status(statusCodes.OK).json({
        code: statusCodes.OK,
        data,
    });
};
exports.logout = logout;
//# sourceMappingURL=auth.controller.js.map