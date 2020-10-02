const express = require("express");
const morgan = require("morgan");
const userRouter = require("./users/userRouter");
const userDbFunctions = require("./users/userDb");
const server = express();

const logger = morgan("combined");

//activate middleware
server.use(express.json());
server.use(logger);

//routers to endpoints
server.use("/api/users", userRouter);

//base enpoint for checking if server is live
server.get("/", (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

module.exports = server;
