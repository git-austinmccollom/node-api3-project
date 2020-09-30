const express = require('express');
const userRouter = require('./users/userRouter')

const server = express();
server.use(express.json());
server.use('/api/users', userRouter)
//custom middleware

// function logger(req, res, next) {}

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});
module.exports = server;
