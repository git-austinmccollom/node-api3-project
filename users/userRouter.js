const express = require('express');
const userDbFunctions = require('./userDb');

const router = express.Router();
  
router.post('/', (req, res) => {
  userDbFunctions.insert(req.body)
  .then( )
});

router.post('/:id/posts', (req, res) => {
  // do your magic!
});

router.get('/', (req, res) => {
  userDbFunctions.get()
  .then( users => {
    res.status(200).json(users)
  })
  .catch( err => {
    res.status(500).json({ message: "error retrieving users "})
  })
});

router.get('/:id', validateUserId, (req, res) => {
  req.user ? res.status(200).json(req.user) : res.status(404).json({ message: "user not found" });
});

router.get('/:id/posts', (req, res) => {
  // do your magic!
});

router.delete('/:id', (req, res) => {
  // do your magic!
});

router.put('/:id', (req, res) => {
  // do your magic!
});

//custom middleware

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

function validateUser(req, res, next) {
  // do your magic!
}

function validatePost(req, res, next) {
  // do your magic!
}

module.exports = router;
