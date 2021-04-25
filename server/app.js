const { Socket } = require("socket.io");

const express = require("express");
const http = require("http");

const app = express();
app.use(express.static('public'));
app.set('port','3000');

const server = http.createServer(app);


server.on('listening', () => {
   
    console.log("Listening on Port: 3000");
});


//Websocket
const io =  require('socket.io')(server);


io.sockets.on('connection', (socket) => {

    console.log("Client connected: " +socket.id);

    socket.on('draw',(data)=> {
        console.log(data)
        socket.broadcast.emit('draw', data)
    });
    socket.on('disconnect', () => console.log("Client has disconnected"));
});

server.listen('3000');





