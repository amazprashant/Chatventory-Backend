const express = require("express");
const { addUser } = require("../controllers/userController.js");
const { createUserValidation } = require("../validations/userValidation.js");
const { validateRequest } = require("../middleware/validateRequest.js");

const router = express.Router();

router.post("/users", createUserValidation, validateRequest, addUser);

module.exports = router;