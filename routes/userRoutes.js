const express = require('express');
const { addUser, getUsers, getUserById, updateUserById, deleteUserById } = require('../controllers/userController.js');
import { createUserValidation } from "../validations/userValidation.js";
import { validateRequest } from "../middlewares/validateRequest.js";

const router = express.Router();

router.post('/users',createUserValidation, validateRequest, addUser);
router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.put('/users/:id', updateUserById);
router.delete('/users/:id', deleteUserById);


module.exports = router;
