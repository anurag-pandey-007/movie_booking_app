const express = require('express');
const bodyParser = require('body-parser');
const { PORT, connect } = require('./config/serverConfig');
// const errorhandler = require('./middleware/errorhandler');
// const response = require('./middleware/response');

const app = express();
const appRoutes = require('./routes/index');

const startServer = () => {
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    // app.use('/',response);
    app.use('/', appRoutes);
    // app.use('/',errorhandler);

    app.listen(PORT, async () => {
        console.log(`Server running on port NO:${PORT}`);
        await connect();
        console.log("Mongodb is connected");
    });
}

startServer();