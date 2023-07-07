const asyncHandler = require('../utils/async-handler');
const {getRequest,postRequest,patchRequest,deleteRequest} = require('../utils/request');

const insertData = asyncHandler(async(req,res) => {
    const requestData = {...req.body,createdBy:req.user.id};
    console.log("",requestData.createdBy);
    const responseRecord = await postRequest('celebs/create',requestData)
    return res.CREATED(responseRecord.body);
});

const getAllCelebs = asyncHandler(async (req, res) => {
    const response = await getRequest('celebs/getAllCelebs');
    const obj = {
        body:response.body,
    }
    
    return res.OK(obj.body);
});

module.exports = {
    insertData,
    getAllCelebs,
}