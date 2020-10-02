const express = require("express");
const userDb = require("./userDb");
const userDbFunctions = require("./userDb");

const router = express.Router();

router.post("/", validateUser, (req, res) => {
  // userDbFunctions.insert({ name: "austin" })
  console.log(req.body);
  userDbFunctions
    .insert(req.body)
    .then((postRes) => {
      res.status(201).json(postRes);
    })
    .catch((postErr) => {
      // res.status(500).json({ message: "server failed to save user" })
      res.status(500).json({ postErr });
    });
});

router.post("/:id/posts", (req, res) => {
  // do your magic!
});

router.get("/", (req, res) => {
  userDbFunctions
    .get()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => {
      res.status(500).json({ message: "error retrieving users " });
    });
});

router.get("/:id", validateUserId, (req, res) => {
  req.user
    ? res.status(200).json(req.user)
    : res.status(404).json({ message: "user not found" });
});

router.get("/:id/posts", (req, res) => {
  const id = req.params.id;
  userDbFunctions.getUserPosts(id)
  .then( getRes => {
    res.status(200).json(getRes)
  })
  .catch( getErr => {
    res.status(500).json(getErr)
  })
});

router.delete("/:id", (req, res) => {
  userDbFunctions.remove(req.params.id)
  .then( deleteRes => {
    res.status(200).json(deleteRes)
  })
  .catch( deleteErr => {
    res.status(500).json(deleteErr)
  })
});

router.put("/:id", (req, res) => {
  // do your magic!
});

//custom middleware

function validateUserId(req, res, next) {
  userDbFunctions
    .getById(req.params.id)
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => {
      console.log(err);
      // res.status(404).json({ message: "user not found" });
      res.send("404 not found");
    });
}

function validateUser(req, res, next) {
  console.log(req.body);
  if (req.body) {
    if (req.body.name) {
      next();
    } else {
      res.status(400).json({ message: "missing required name field" });
    }
  } else {
    res.status(400).json({ message: "missing user data" });
  }
}

function validatePost(req, res, next) {
  // do your magic!
}

module.exports = router;
