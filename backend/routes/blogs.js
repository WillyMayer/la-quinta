const express = require('express');
const { getHello } = require('../controllers/blogControllers');
const router = express.Router();

router.get('/', getHello);

module.exports = router