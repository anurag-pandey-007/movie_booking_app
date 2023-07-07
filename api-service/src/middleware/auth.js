const jwt = require("jsonwebtoken");
const { JWT_KEY } = require('../config/serverconfig');
const logger = require("../utils/logger");
const ErrorResponse = require("../utils/error");
const ErrorCodes = require('../utils/status-code');
const asyncHandler = require("../utils/async-handler");
const { getRequest } = require('../utils/request');
const phin = require('phin');

const AuthValidator = (req, res, next) => {
    if (!req.body.email || !req.body.password || !req.body.name) {
        console.log(`The Rquest body data is: ${req.body.email} and ${req.body.password} also ${req.body.name}`)
        logger.log('error', 'missing required parameters');
        throw new ErrorResponse("missing required parameters", ErrorCodes.BAD_REQUESET);
    }

    next();
}

const checkValidUser = asyncHandler(async (req, res, next) => {
    const token = req.headers['x-access-token'];
    console.log("The token is:", token);
    if (!token) {
        logger.log('error', 'Token is missing');
        throw new ErrorResponse("Token is missing", ErrorCodes.BAD_REQUESET);
    }
    const object = jwt.verify(token, JWT_KEY);
    const userId = object.id;
    const user = await getRequest(`user/me/${userId}`);
    if (!user) {
        logger.log('error', 'No user Exist for corresponding Token');
        throw new ErrorResponse("No user Exist for corresponding Token", ErrorCodes.BAD_REQUESET);
    }
    console.log("Logged in user is:", user.body._id);
    req.user = user.body;
    req.userId = user.body._id;
    next();
});

module.exports = {
    AuthValidator,
    checkValidUser,
}

