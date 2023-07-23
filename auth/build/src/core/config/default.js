"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
exports.default = {
    connection: {
        charset: 'utf8',
        timezone: 'UTC',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        database: process.env.DB_DATABASE,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        dateStrings: true,
    }
};
//# sourceMappingURL=default.js.map