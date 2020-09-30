const express = require('express');
const userDbFunctions = require('./userDb');
// import * as dbFunctions from './userDb';
// import {
  //   get,
  //   getById,
  //   getUserPosts,
  //   insert,
  //   update,
  //   remove,
  // } from './userDb';
  
  const router = express.Router();
  
router.post('/', (req, res) => {
  // do your magic!
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

router.get('/:id', (req, res) => {
  // do your magic!
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
  // do your magic!
}

function validateUser(req, res, next) {
  // do your magic!
}

function validatePost(req, res, next) {
  // do your magic!
}

module.exports = router;
