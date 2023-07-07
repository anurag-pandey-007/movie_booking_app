const asyncHandler = require('../utils/async-handler');
const { getRequest, postRequest, patchRequest, deleteRequest } = require('../utils/request');
const logger = require('../utils/logger')

const createMovie = asyncHandler(async (req, res) => {
    const requestData = {
        ...req.body,
        createdBy: req.user,
    };
    const response = await postRequest('movie/create', requestData);

    return res.CREATED(response.body);
});

const userReview = asyncHandler(async (req, res) => {
    const requestData = { ...req.body };
    const headers = { 'x-user-id': req.user._id };
    const response = await patchRequest('movie/review', requestData, headers);
    return res.OK(response.body);
});

const fetchMovies = asyncHandler(async (req, res) => {
    // const requestData = {createdBy: req.user._id };
    const response = await getRequest('movie/getAll');

    return res.OK(response.body);
});

const getMyMovie = asyncHandler(async (req, res) => {
    const headers = { 'x-user-id': req.user._id };
    const response = await getRequest('movie/mymovies', headers);

    return res.OK(response.body);
});

module.exports = {
    createMovie,
    userReview,
    fetchMovies,
    getMyMovie,
}