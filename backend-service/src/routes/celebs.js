const express = require('express');
const {checkValidUser} = require('../middleware/auth');
const celebController = require('../controller/celebs');

const router = express.Router();
router.post('/create',celebController.insertData);
router.get('/getAllCelebs',celebController.getAllCelebs);

module.exports = router;