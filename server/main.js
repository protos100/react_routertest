import express from 'express';
import expressWs from 'express-ws';
import path from 'path';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import session from 'express-session'; 
import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';
import api from './routes';
import ws from './ws';

const app = express();
const port = 3500;
const devPort = 4500;
expressWs(app);

/* mongodb connection */
const db = mongoose.connection;
db.on('error', console.error);
db.once('open', () => { 
  console.log('Connected to mongodb server'); 
});
mongoose.connect('mongodb://username:password@host:port/database');

/* use session */
app.use(session({
  secret: 'session_secret',
  resave: false,
  saveUninitialized: true
}));

app.use('/', express.static(path.join(__dirname, './../public')));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/api', api);
app.use('/ws', ws);
app.get('*', (rec, res)=>{
  res.sendFile(path.resolve(__dirname, './../public/index.html'));
 });
if(process.env.NODE_ENV == 'development') {
    console.log('Server is running on development mode');
    const config = require('../webpack.dev.config');
    const compiler = webpack(config);
    const devServer = new WebpackDevServer(compiler, config.devServer);
    devServer.listen(
        devPort, () => {
            console.log('webpack-dev-server is listening on port', devPort);
        }
    );
}

app.listen(port, () => {
  console.log('Express is listening on port', port);
});
