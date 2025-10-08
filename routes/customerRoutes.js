const express = require("express");
const { addCustomer, getCustomerById, updateCustomerById, fetchAllCustomer, deleteCustomerById } = require("../controllers/customerController.js");

const router = express.Router();

router.post("/customers",addCustomer);
router.get("/customers",fetchAllCustomer);
router.get("/customers/:id",getCustomerById);
router.put("/customers/:id", updateCustomerById);
router.put("/delete/customers/:id", deleteCustomerById);

module.exports = router;