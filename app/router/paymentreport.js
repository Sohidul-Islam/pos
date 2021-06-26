const express = require("express");
const paymentReport = require("../controllers/paymentreport");

const router = express.Router();

router.route("/").get(paymentReport.paymentinfo);

module.exports = router;
