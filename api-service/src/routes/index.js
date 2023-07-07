const express = require('express');
const userRoutes = require('./user');
const movieRoutes = require('./movie');
const celebRoutes = require('./celebs');

const router = express.Router();

router.use('/user',userRoutes);
router.use('/movie',movieRoutes);
router.use('/celebs',celebRoutes);

module.exports = router;