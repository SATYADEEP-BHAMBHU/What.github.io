// Require the http and socket.io modules
const http = require('http');
const io = require('socket.io');

// Create a new http server
const server = http.createServer();

// Create a new socket.io instance and attach it to the server
const socket = io(server);

// Listen for the connection event from the clients
socket.on('connection', (client) => {
  // Log the connection
  console.log('A client connected');

  // Listen for the message event from the client
  client.on('message', (data) => {
    // Log the message
    console.log('Received message: ' + data);

    // Send the message to all the connected clients
    socket.emit('message', data);
  });

  // Listen for the disconnect event from the client
  client.on('disconnect', () => {
    // Log the disconnection
    console.log('A client disconnected');
  });
});

// Start the server on port 3000
server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
