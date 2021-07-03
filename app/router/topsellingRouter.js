const express = require("express");
const topselling = require("../controllers/topsellingController");

const router = express.Router();

router.route("/").get(topselling.FindAlltopSelling);

module.exports = router;
