const express = require("express");
const login = require("../controllers/logincontroller");

const router = express.Router();

router.route("/").get(login.logininfo);
 router.route("/").post(login.checkItout);
// router.route("/").get(checksales.delete);

module.exports = router;