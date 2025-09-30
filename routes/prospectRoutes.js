const express = require("express");
const { addProspect, getProspectById,getAllProspect, updateProspectById, deleteProspectById} = require("../controllers/prospectController.js");

const router = express.Router();

router.post("/prospects", addProspect);
router.get("/prospects/:id",getProspectById);
router.get("/prospects",getAllProspect);
router.get("/prospects/:id",updateProspectById);
router.get("/prospects/:id",deleteProspectById);

module.exports = router;