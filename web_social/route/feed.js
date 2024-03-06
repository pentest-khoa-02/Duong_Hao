const express = require('express');
const feedControllers = require('../controllers/FeedControllers');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('feed');
})

module.exports = router;