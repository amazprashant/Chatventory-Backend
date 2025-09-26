const express = require("express");
const { addCustomer, fetchALlCustomer, getCustomerById, updateCustomerById, fetchAllCustomer } = require("../controllers/customerController.js");

const router = express.Router();

router.post("/customers",addCustomer);
router.get("/customers",fetchAllCustomer);
router.get("/customers/:id",getCustomerById);
router.put("customers/:id", updateCustomerById);

module.exports = router;