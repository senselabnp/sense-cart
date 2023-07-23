"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
const routes_1 = require("./routes");
const notFoundHandler_1 = require("./core/middlewares/notFoundHandler");
const connectDB_1 = require("./core/utils/connectDB");
require('dotenv').config();
const express = require('express');
const cors = require('cors')({ origin: true });
const app = express();
app.use(cors);
app.use('/api', routes_1.default);
app.use(notFoundHandler_1.default);
(0, connectDB_1.default)();
exports.main = app;
//# sourceMappingURL=index.js.map