const express = require('express');
const {checkValidUser} = require('../middleware/auth');
const movieController = require('../controller/movie');

const router = express.Router();

router.post('/create',movieController.createMovie);
router.patch('/review/',movieController.userReview);
router.get('/getAll',movieController.fetchMovies);
router.get('/mymovies',movieController.getMyMovie);

module.exports = router;