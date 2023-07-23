"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
process.env.NODE_CONFIG_DIR = './src/core/config';
const config = require('config');
const dbUrl = `mongodb+srv://${config.get('connection.user')}:${config.get('connection.password')}@${config.get('connection.host')}/${config.get('connection.database')}?retryWrites=true&w=majority`;
const connectDB = async () => {
    try {
        await mongoose_1.default.connect(dbUrl);
        console.log('Database connected...');
    }
    catch (error) {
        console.log(error.message);
        setTimeout(connectDB, 5000);
    }
};
exports.default = connectDB;
//# sourceMappingURL=connectDB.js.map