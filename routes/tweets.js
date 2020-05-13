const express = require('express');

const router = express.Router();

const tweetsController = require('../controllers/tweets');

//GET /feed/posts
router.get('/posts', tweetsController.getTweets);

//POST /feed/post
router.post('/post', tweetsController.createTweets);

module.exports = router;