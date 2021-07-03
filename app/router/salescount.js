const express = require("express");
const salesCounter = require("../controllers/salecountController");

const router = express.Router();

router.route("/").get(salesCounter.allsalesCount);

module.exports = router;
