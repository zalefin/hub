const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const port = 80

app.use('/', express.static(__dirname + '/static'));

app.use('/chat', express.static(__dirname + '/chat'))

io.on('connection', function(socket) {
    console.log('connected');
    socket.on('chat', function(msg) {
	io.emit('chat', msg);
    });
});

http.listen(port, () => {
    console.log('Listening at http://localhost:' + port)
});
