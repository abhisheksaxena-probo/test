const express = require("express");

const router = express.Router();

const contractController = require("../controllers/contractController");

router.get("/", contractController.getAllContracts);
router.get("/:id", contractController.getContract);
router.delete("/:id", contractController.deleteContract);
router.post("/", contractController.createContract);
router.patch("/:id", contractController.updateContract);
module.exports = router;
