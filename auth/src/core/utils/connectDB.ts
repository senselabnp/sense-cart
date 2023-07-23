import mongoose from 'mongoose';

process.env.NODE_CONFIG_DIR = './src/core/config';
const config = require('config') as typeof import('config');

const dbUrl = `mongodb+srv://${config.get('connection.user')}:${config.get(
    'connection.password'
)}@${config.get('connection.host')}/${config.get('connection.database')}?retryWrites=true&w=majority`;

const connectDB = async () => {
    try {
        await mongoose.connect(dbUrl);
        console.log('Database connected...');
    } catch (error: any) {
        console.log(error.message);
        setTimeout(connectDB, 5000);
    }
};

export default connectDB;