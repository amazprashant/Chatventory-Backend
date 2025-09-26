const express = require("express");
const { addUser, fetchAllUser,getUserById,updateUserById } = require("../controllers/userController.js");
const { createUserValidation } = require("../validations/userValidation.js");
const { validateRequest } = require("../middleware/validateRequest.js");


const router = express.Router();

router.post("/users", createUserValidation, validateRequest, addUser);
router.get("/users", fetchAllUser);
router.get("/users/:id", getUserById);
router.put("/users/:id", updateUserById);


module.exports = router;
