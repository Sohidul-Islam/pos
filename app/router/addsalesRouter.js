const express = require("express");
const addsales = require("../controllers/addSalesController");
const router = express.Router();
router.route("/").get(addsales.addSales);
router.route("/").post(addsales.createsales);
// router.route("/").get(checksales.delete);

module.exports = router;
