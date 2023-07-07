const express = require('express');
const userController = require('../controller/user')
const {AuthValidator} = require('../middleware/auth');

const router = express.Router();

router.post('/signup',AuthValidator,userController.signup);
router.post('/login',userController.login);

module.exports = router;