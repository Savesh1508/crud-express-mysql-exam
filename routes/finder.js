const express = require('express');
const router = express.Router();
const finderControllers = require('../controllers/finder.js');

router.get('/', finderControllers.buyurtmalarInfos);

module.exports = router