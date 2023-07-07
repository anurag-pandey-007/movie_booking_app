const express = require('express');
const userRoutes = require('./user');
const movieRoutes = require('./movie');
const celebRoutes = require('./celebs');
const healthCheck = require('./healthcheck');

const router = express.Router();

router.use('/user',userRoutes);
router.use('/movie',movieRoutes);
router.use('/celebs',celebRoutes);
router.use('/api',healthCheck);

module.exports = router;