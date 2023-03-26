const express = require('express');
const logger = require('./common/logger');

const app = express();

const metrics = require('./router/metrics');
app.use(metrics);

const router = require('./router');
app.use(router);

app.listen(8080, (err) => {
    if (err) logger.error(err);
    logger.info('Server has been started');
});
