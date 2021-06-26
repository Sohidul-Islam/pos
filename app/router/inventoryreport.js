const express = require("express");
const inventoryreport = require("../controllers/inventorycontroller");

const router = express.Router();

router.route("/").get(inventoryreport.allinventory);
router.route("/").get(inventoryreport.delete);

module.exports = router;
