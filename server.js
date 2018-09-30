const express = require('express');
const app = express();
const socketIO = require('socket.io');
const http = require("http");
const cors = require("cors");
app.use(cors());
app.use(express.static('dist'));

const server = http.createServer(app);

const io = socketIO(server);

io.on('connection', socket => {
    console.log('User connected');

    socket.on("change color", (color)=>{
        console.log("change color to:", color);
        io.sockets.emit("change color", color);
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});



server.listen(3000, () => {
    console.log("tune to port 3000");
});