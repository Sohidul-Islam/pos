const express = require("express");
const inventoryreport = require("../controllers/inventoryController");

const router = express.Router();

router.route("/").get(inventoryreport.allinventory);
router.route("/").get(inventoryreport.delete);

module.exports = router;
