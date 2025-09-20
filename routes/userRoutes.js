const express = require('express');
const { addUser, getUsers, getUserById, updateUserById, deleteUserById } = require('../controllers/userController.js');

const router = express.Router();

router.post('/users', addUser);
router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.put('/users/:id', updateUserById);
router.delete('/users/:id', deleteUserById);


module.exports = router;
