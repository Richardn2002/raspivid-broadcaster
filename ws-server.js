const Broadcaster = require('./raspivid-broadcaster');
new Broadcaster({width: 640, height: 480, framerate: 20, port: 8080});
