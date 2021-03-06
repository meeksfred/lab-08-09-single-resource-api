'use strict';

// node modules
const http = require('http');
// npm modules
// app modules
const Router = require('./lib/router.js');
// module constants
const PORT = process.env.PORT || 3000;
const router = new Router();
//module logic

const beerRoute = require('./route/beer-route.js');
beerRoute(router);

const server = http.createServer(router.route());

server.listen(PORT, function(){
  console.log('server up ::<>::', PORT);
});
