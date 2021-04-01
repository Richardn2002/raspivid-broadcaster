const http    = require('http');
const express = require('express');

const Broadcaster = require('./raspivid-broadcaster');

const app = express();
app.use(express.static(__dirname + '/site'));
const httpServer = http.createServer(app);
httpServer.listen(2050);

new Broadcaster({width: 640, height: 480, framerate: 20, port: 8080});
