import type { HttpFunction } from '@google-cloud/functions-framework/build/src/functions';

import routes from './routes';
import notFoundHandler from './core/middlewares/notFoundHandler';
import connectDB from './core/utils/connectDB';
require('dotenv').config();
const express = require('express');
const cors = require('cors')({ origin: true });

const app = express();

app.use(cors);


app.use('/api', routes);

app.use(notFoundHandler);

connectDB();

export const main: HttpFunction = app;
