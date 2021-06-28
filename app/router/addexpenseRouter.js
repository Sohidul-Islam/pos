const express = require("express");
const addexpense = require("../controllers/addexpenseController");
const router = express.Router();
router.route("/").get(addexpense.addexpense);

module.exports = router;
