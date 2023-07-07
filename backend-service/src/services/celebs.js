const Celebrity = require('../models/celebs');
const ErrorResponse = require('../utils/error');
const ErrorCodes = require('../utils/status-code');

const insertData = async(data)=>{
    const movieRecord = await Celebrity.create(data);

    return movieRecord;
}

const fetchcelebs = async()=>{
    const celebRecord = await Celebrity.find();

    return celebRecord;
}

module.exports = {
    insertData,
    fetchcelebs,
}