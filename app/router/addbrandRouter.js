const express = require("express");
const addbrands = require("../controllers/addbrandcontroller");
const router = express.Router();
// router.route("/").get(addbrands.addbrand);
router.route("/").get(addbrands.allBrand);
router.route("/").post(addbrands.createBrand);
// router.route("/").get(checksales.delete);

module.exports = router;
