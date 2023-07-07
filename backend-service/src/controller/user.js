const userService = require('../services/user');
const asyncHandler = require('../utils/async-handler');

const signup = asyncHandler(async (req, res) => {
    const requestData = { ...req.body };
    console.log("Request is coming:", requestData);
    const responseRecord = await userService.signup({
        name: requestData.name,
        email: requestData.email,
        password: requestData.password,
    });

    return res.json(responseRecord);
});

const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    console.log("Request is coming");
    const token = await userService.signin({ email, password });
    return res.json(token);
});

const getUserById = asyncHandler(async (req, res) => {
    const userId = req.params.userId;
    const user = await userService.getUserById(userId);
    return res.json(user);
});


const healthCheck = asyncHandler(async (req, res) => {
    const response = {
        version: 'v3',
        note: "hello from node js"
    };
    console.log('response', response);

    return res.OK(response);
});

module.exports = {
    signup,
    login,
    getUserById,
    healthCheck,
}