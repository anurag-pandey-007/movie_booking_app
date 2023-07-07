const asyncHandler = require('../utils/async-handler');
const { getRequest, postRequest, patchRequest, deleteRequest } = require('../utils/request')
const phin = require('phin');

const signup = asyncHandler(async (req, res) => {
    const requestData = { ...req.body };
    console.log("Requst data is:", requestData);
    const response = await postRequest('user/signup', requestData);
    return res.OK(response.body);
});

const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);
    const response = await postRequest('user/login', { email, password });
    return res.OK(response.body);
});

module.exports = {
    signup,
    login,
    // getUserByEmail,
}

