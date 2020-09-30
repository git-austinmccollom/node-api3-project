const express = require("express");
const morgan = require("morgan");
const userRouter = require("./users/userRouter");

const server = express();

//custom middleware

const logger = morgan("combined");
// function logger(req, res, next) {

// }

//base enpoint for checking if server is live
server.get("/", (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

//activate middleware
server.use(express.json());
server.use(logger);

//routers to endpoints
server.use("/api/users", userRouter);

module.exports = server;
