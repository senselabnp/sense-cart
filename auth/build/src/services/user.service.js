"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = exports.getUsersWithPage = void 0;
const paginate_1 = require("../core/utils/paginate");
const getUsersWithPage = async (pageParams) => {
    // const data = await Log.getLogsWithPage(pageParams);
    // const totalLogs = await Log.getTotalLogsCount();
    return (0, paginate_1.paginateData)([{ id: '' }], 10, pageParams);
};
exports.getUsersWithPage = getUsersWithPage;
const create = async () => {
    //
};
exports.create = create;
//# sourceMappingURL=user.service.js.map