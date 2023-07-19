//importaciones
const express =  require('express');
const morgan = require('morgan');
const cors = require('cors')
const router = require('./routes/index.js')
const http = require('http');
const initialSocket = require('./socket.js')
// instancias
const app =  express();
const httpServer = http.createServer(app)
//inicio socket
initialSocket(httpServer);

app.name = 'Wellspring API';
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });
app.use('/',router);



  //export
  module.exports = app;