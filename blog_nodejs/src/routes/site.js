const express = require('express');
const router = express.Router();

const siteControllers = require('../app/controllers/SiteController');

// cac tuyen duong khop tu tren xuong

router.use('/search', siteControllers.search);
router.use('/', siteControllers.index);

module.exports = router;