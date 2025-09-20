import { Server } from 'socket.io'

const server = new Server(8001, {
  cors: {
    origin: '*',
  },
})

server.on('connection', (clientSocket) => {
  clientSocket.on('cart-seting', payload =>
    clientSocket.broadcast.emit('cart-seting', payload)
  );

  clientSocket.on('cart-getting', () => {
  });
});

console.log('WS Server is up')