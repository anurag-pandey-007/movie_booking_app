const express = require('express');
const userControllers = require('../controller/user');
const {AuthValidator,checkValidUser} = require('../middleware/auth');

const router = express.Router();

router.post('/signup',AuthValidator,userControllers.signup);
router.post('/login',userControllers.login);
router.get('/me/:userId', userControllers.getUserById);
// router.get('/me',(req,res)=>{
//     const userId = req.query.userId; // Access the value of the 'userId' parameter in the query string
//     console.log('userId:', userId);
// })
module.exports = router;