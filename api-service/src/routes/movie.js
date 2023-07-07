const express = require('express');
const {checkValidUser} = require('../middleware/auth');
const movieController = require('../controller/movie');

const router = express.Router();

router.post('/create',checkValidUser,movieController.createMovie);
router.patch('/review',checkValidUser,movieController.userReview);
router.get('/getAll',checkValidUser,movieController.fetchMovies);
router.get('/mymovies',checkValidUser,movieController.getMyMovie);

module.exports = router;