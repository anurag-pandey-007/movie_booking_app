const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    PORT:process.env.PORT,
    JWT_KEY:process.env.JWT_KEY,
    CONTAINER_NAME:process.env.CONTAINER_NAME,
    CONTAINER_PORT:process.env.CONTAINER_PORT,
}