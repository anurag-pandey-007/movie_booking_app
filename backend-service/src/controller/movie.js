const asyncHandler = require('../utils/async-handler');
const movieService = require('../services/movie');

const createMovie = asyncHandler(async (req, res) => {
    const requestData = { ...req.body };
    const response = await movieService.createMovie(requestData);

    return res.json(response);
});

const userReview = asyncHandler(async (req, res) => {
    const requestData = { ...req.body };
    const userId = req.header('x-user-id');
    const response = await movieService.userReview(requestData, userId);
    console.log("response is in backend service controller: ", response);
    return res.json(response);
});

const fetchMovies = asyncHandler(async (req, res) => {
    const movieRecords = await movieService.fetchMovies();

    return res.json(movieRecords);
});

const getMyMovie = asyncHandler(async (req, res) => {
    const userId = req.header('x-user-id');
    console.log("userId is in controller is: ", userId);
    const movieRecords = await movieService.fetchOwnMovie(userId);

    return res.json(movieRecords);
});

module.exports = {
    createMovie,
    userReview,
    fetchMovies,
    getMyMovie,
}