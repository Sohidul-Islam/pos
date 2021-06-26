const express = require("express");
const checksales = require("../controllers/checksalesController");

const router = express.Router();

router.route("/").get(checksales.allsales);
// router.route("/").get(checksales.delete);

module.exports = router;
