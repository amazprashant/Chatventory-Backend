const express = require('express');
const { addUser } = require('../controllers/userController.js');

const router = express.Router();

router.post('/users', addUser);

module.exports = router;
