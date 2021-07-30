const express = require("express");
const chart = require("../controllers/chartfilterController");
const router = express.Router();
router.route("/").get(chart.chartFilter);
router.route("/get-year-data").post(chart.chartFilterYear);
router.route("/get-year-month-data").post(chart.chartFilterYearMonth);
// router.route("/get-year-month-pie").post(chart.piechartProduct);
module.exports = router;
