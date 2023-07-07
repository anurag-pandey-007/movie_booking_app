const asyncHandler = require('../utils/async-handler');
const celebsService = require('../services/celebs');

const insertData = asyncHandler(async(req,res) => {
    const requestData = {...req.body};
    const response = await celebsService.insertData(requestData);

    return res.json(response);
});

const getAllCelebs = asyncHandler(async(req,res) => {
    const response = await celebsService.fetchcelebs();

    return res.json(response);
})
module.exports = {
    insertData,
    getAllCelebs,
}