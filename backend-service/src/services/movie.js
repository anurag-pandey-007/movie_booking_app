const Movie = require('../models/movie');
const ErrorResponse = require('../utils/error');
const ErrorCodes = require('../utils/status-code');

const createMovie = async (data) => {
  const movieRecord = await Movie.create(data);

  return movieRecord;
}


const userReview = async (reviewData, userId) => {
  const movieRecord = await Movie.findById(reviewData.movieId);
  if (!movieRecord)
    throw ErrorResponse('Movie not found', ErrorCodes.BAD_REQUESET);
  movieRecord.review.push({
    comment: reviewData.comment,
    rating: reviewData.rating,
    respondTime: new Date(),
    userId: userId,
  });

  await movieRecord.save();
  console.log(movieRecord.review);
  return movieRecord.review;
};

const fetchMovies = async () => {
  const movieRecord = await Movie.find().populate('MovieCasts');
  console.log("Movie Record is:", movieRecord);
  return movieRecord;
}

const fetchOwnMovie = async (createdBy) => {
  const movieRecord = await Movie.find({ createdBy }).populate('MovieCasts');

  return movieRecord;
}
module.exports = {
  createMovie,
  userReview,
  fetchMovies,
  fetchOwnMovie,
}