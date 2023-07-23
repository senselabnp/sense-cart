"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.index = void 0;
const statusCodes = require("../core/constants/statusCodes");
/**
 * Open Welcome Page
 *
 * @param _req
 * @param res
 */
const index = async (_req, res) => {
    res.status(statusCodes.OK).json({
        code: statusCodes.OK,
        data: {
            name: 'Welcome to the sense cart backend API',
            description: 'This is a open-source platform for ecommerce.',
        },
    });
};
exports.index = index;
//# sourceMappingURL=welcome.controller.js.map