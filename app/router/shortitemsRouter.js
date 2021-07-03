const express = require("express");
const shortitems = require("../controllers/shortitemsController");

const router = express.Router();

router.route("/").get(shortitems.getshortitems);

module.exports = router;
