const express = require('express');
const app = express();
const path = require('path');
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 3001;

server.listen(port, () => {
    console.log('Server listening at port %d', port);
});

// Routing
app.use(express.static(path.join(__dirname, 'public')));


io.on('connection', (socket) => {

    console.log("Connected")

    // when the client emits 'new message', this listens and executes
    socket.on('data', (data) => {
        console.log(data)
    });
});
