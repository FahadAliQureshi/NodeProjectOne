// server.js
const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const socketIO = require('socket.io');
const Message = require('./Message'); // Import the Mongoose model

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/chatDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Socket.io connection handling
io.on('connection', (socket) => {
  console.log('A user connected');

  // When a user sends a message
  socket.on('chat message', async (data) => {
    const { sender, receiver, message } = data;

    // Save the message to MongoDB
    const newMessage = new Message({ sender, receiver, message });
    await newMessage.save();

    // Broadcast the message to the respective users
    io.emit('chat message', newMessage);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
