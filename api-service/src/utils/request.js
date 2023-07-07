const phin = require("phin");
const { CONTAINER_NAME, CONTAINER_PORT } = require('../config/serverconfig');

const baseUrl = `http://${CONTAINER_NAME}:${CONTAINER_PORT}/`;
// const baseUrl = `http://localhost:3012/`;

module.exports = {
    getRequest: async (path, headers) => {
        let reqData = {
            url: baseUrl + path,
            method: 'GET',
            headers,
            parse: 'json',
        }
        const response = await phin(reqData);
        return { body: response.body, statusCode: response.statusCode };
    },

    postRequest: async (path, data,) => {
        let reqData = {
            url: baseUrl + path,
            method: 'POST',
            data,
            parse: 'json',
        }
        const response = await phin(reqData);
        return { body: response.body, statusCode: response.statusCode };
    },

    patchRequest: async (path, data, headers) => {
        let reqData = {
            url: baseUrl + path,
            method: 'PATCH',
            headers,
            data,
            parse: 'json',
        }
        const response = await phin(reqData);
        return { body: response.body, statusCode: response.statusCode };
    },

    deleteRequest: async (path) => {
        let reqData = {
            url: baseUrl + path,
            method: 'DELETE',
            parse: 'json',
            headers,
        }
        const response = await phin(reqData);
        return { body: response.body, statusCode: response.statusCode };
    }
};
