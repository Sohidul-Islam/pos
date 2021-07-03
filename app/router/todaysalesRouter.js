const express = require("express");
const todaysales = require("../controllers/todaysalesController");

const router = express.Router();

router.route("/").get(todaysales.findTodaysales);

module.exports = router;
