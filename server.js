const express = require("express");
const morgan = require("morgan");
const userRouter = require("./users/userRouter");
const userDbFunctions = require("./users/userDb");

const server = express();

//custom middleware

const logger = morgan("combined");

function validateUserId(req, res, next) {
  userDbFunctions
    .getById(req.params.id)
    .then((user) => {
      req.user = user
      next();
    })
    .catch((err) => {
      console.log(err)
      // res.status(404).json({ message: "user not found" });
      res.send("404 not found");
    });
}

//base enpoint for checking if server is live
server.get("/", (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

//activate middleware
server.use(express.json());
server.use(logger);
server.use("/api/users/:id", validateUserId);

//routers to endpoints
server.use("/api/users", userRouter);

module.exports = server;
