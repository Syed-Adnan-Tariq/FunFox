// server.js
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const port = 5000;

let tasks = [
  // Your initial tasks data here...
];

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('joinGroup', (groupId) => {
    console.log('User joined group:', groupId);
    socket.join(groupId);
  });

  socket.on('addTask', (task) => {
    task.id = Date.now();
    tasks.push(task);
    io.to(task.group).emit('taskAdded', task);
  });

  socket.on('updateTask', (task) => {
    tasks = tasks.map((t) => (t.id === task.id ? task : t));
    io.to(task.group).emit('taskUpdated', task);
  });

  socket.on('deleteTask', (taskId) => {
    tasks = tasks.filter((task) => task.id !== taskId);
    io.emit('taskDeleted', taskId);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
