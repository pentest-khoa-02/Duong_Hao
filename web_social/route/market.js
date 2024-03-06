const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('market');
})

module.exports = router;