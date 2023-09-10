// Import the Express.js framework into the application
const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');

app.use(cors());
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});
io.on('connection', (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on('message', (data) => {
    console.log(data);
    socket.broadcast.emit('chat-message', data);
  });

  socket.on('disconnect', () => {
    console.log(`User Disconnected: ${socket.id}`);
  });

  socket.on('feedback', (data) => {
    socket.broadcast.emit('feedback', data);
  });
});

server.listen(3001, () => console.log(`Server Runing `));
