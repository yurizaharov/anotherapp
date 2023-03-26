const axios = require('axios');
const logger = require('../common/logger');

const functions = {

    async getBackend (backendUrl, method) {
        let result;
        try {
            const response = await axios.get(backendUrl + '/' + method);
            result = response.data;
        } catch (err) {
            if (!err.response) {
                logger.error('Error getting data from backend %s, method %s. Reason: %s',
                    backendUrl,
                    method,
                    err.code);
            } else {
                logger.error('Error getting data from backend %s, method %s. Reason: %d %s',
                    backendUrl,
                    method,
                    err.response.status,
                    err.response.statusText);
            }
        }
        return result;
    }

}

module.exports = functions;
