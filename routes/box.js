const express = require('express');
const { createBox, getBoxes } = require('../controllers/boxController');

const router = express.Router();

router.post('/create', createBox); 
router.get('/get', getBoxes);      

module.exports = router;
