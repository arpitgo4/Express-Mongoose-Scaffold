
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import logger from 'morgan';
import favicon from 'serve-favicon';
import cors from 'cors';
import cluster from 'cluster';

import devMiddleware from './src/middlewares/dev-middleware';

const app = express();

if(process.env.NODE_ENV === 'development') {
    app.use(devMiddleware);
}
    
app.use('/', (req, res) => res.send('hello world!!'));

function startServer() {
    app.listen(process.env.PORT || 8080, function(err) {
        if (err) {
          return console.error(err);
        }
  
        console.log('Listening at http://localhost:' + (process.env.PORT || 8080));
    });
}

startServer();