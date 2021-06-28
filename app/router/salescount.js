const express = require("express");
const salesCounter = require("../controllers/salescountController");

const router = express.Router();

router.route("/").get(salesCounter.showsalescount);

module.exports = router;
