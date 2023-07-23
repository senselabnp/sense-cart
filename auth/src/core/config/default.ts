require('dotenv').config();

export default {
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
