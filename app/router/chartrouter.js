const express = require("express");
const chart = require("../controllers/chart");

const router = express.Router();

router.route("/").get(chart.chartJs);

module.exports = router;
