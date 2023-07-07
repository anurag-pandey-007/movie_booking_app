const express = require('express');
const {checkValidUser} = require('../middleware/auth');
const celebController = require('../controller/celebs');

const router = express.Router();
router.post('/create',checkValidUser,celebController.insertData);
router.get('/getAllCelebs',checkValidUser,celebController.getAllCelebs);

module.exports = router;