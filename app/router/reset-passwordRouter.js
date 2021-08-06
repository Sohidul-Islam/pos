const express = require("express");
const reset = require("../controllers/reset-password");

const router = express.Router();

router.route("/").get(reset.resetdata).post(reset.resetpassword);

module.exports = router;