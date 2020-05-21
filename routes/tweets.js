const express = require('express');

const router = express.Router();

const tweetsController = require('../controllers/tweets');

//GET /api/search-tweets
router.get('/posts', tweetsController.getTweets);

//POST /feed/post
router.post('/post', tweetsController.createTweets);

module.exports = router;