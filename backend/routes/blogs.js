const express = require('express');
const { getEntries, createEntry } = require('../controllers/blogControllers');
const router = express.Router();

router.get('/', getEntries);
router.post('/', createEntry);

module.exports = router