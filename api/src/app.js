const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const router = require('./routes/index');
require('dotenv').config();

require('./db');


const server = express();

// server.name = 'API';

//Seccion de middlewares:

server.use(bodyParser.urlencoded({extended: true, limit: '50mb'})); //analiza la url entrante.
server.use(bodyParser.json({limit: '50mb'}));
server.use(cookieParser());
server.use(express.json());
server.use(morgan('dev'));
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });

// rutas

server.get('/', function (req, res) {
  res.send('Hello World')
})

server.get('/videogames', router);
server.get('/videogames/:idVideogame', router);
server.get('/videogames/:name', router);
server.get('/genres', router);

//manejo de errores en solicitudes

server.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;