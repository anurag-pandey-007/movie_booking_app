const User = require('../models/user');


const ErrorResponse = require("../utils/error");
const ErrorCodes = require('../utils/status-code');

const getUserByEmail = async(email)=>{
    const user = await User.findOne({email});

    return user;
}
console.log("hello from node js");
const getUserById = async (userId) => {
    const user = await User.findById(userId);
    return user;
}

const signup = async(data)=>{
    const user = await User.create(data);
    
    return user;
}

const signin = async(data)=>{
    const userRecord = await getUserByEmail(data.email);
    
    if(!userRecord) {
        throw new ErrorResponse('User Not Found',
        ErrorCodes.NOT_FOUND);
    }
    if(!userRecord.comparePassword(data.password)) {
        throw new ErrorResponse('Incorrect Password',
        ErrorCodes.BAD_REQUESET);
    }
    const token = userRecord.genJWT();
    return token;
}

module.exports = {
    signin,
    signup,
    getUserById,
    getUserByEmail,
}

