const express = require('express');
const bodyParser = require('body-parser');
const {PORT} = require('./config/serverconfig');
const errorhandler = require('./middleware/errorhandler');
const response = require('./middleware/response');

const app = express();
const appRoutes = require('./routes/index');

const startServer = () => {
    app.use(bodyParser.urlencoded({extended:true}));
    app.use(bodyParser.json());

    app.use('/',response);
    app.use('/',appRoutes);
    app.use('/',errorhandler);
    
    app.listen(PORT,async()=>{
        console.log(`Server listining on port NO:${PORT}`);
    });
}

startServer();