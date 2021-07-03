const express = require("express");
const addvendors = require("../controllers/addvendorsController");

const router = express.Router();

router.route("/").get(addvendors.addvendors);
router.route("/").post(addvendors.addnewvendors);
// router.route("/").get(checksales.delete);

module.exports = router;
