const express = require('express');
const userControllers = require('../controller/user');


const router = express.Router();

router.get('/healthcheck', userControllers.healthCheck)

module.exports = router;