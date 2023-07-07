const dotenv = require('dotenv');
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

dotenv.config();

const connect = async () => {
    await mongoose.connect('mongodb://mongodb:27017/Movie_booking');
    // await mongoose.connect('mongodb://localhost:27018/Movie_booking');
}

module.exports = {
    connect,
    PORT: process.env.PORT,
    JWT_KEY: process.env.JWT_KEY,
    CONTAINER_NAME: process.env.CONTAINER_NAME,
    CONTAINER_PORT: process.env.CONTAINER_PORT,
}