const express = require("express");
const productVendors = require("../controllers/productVendorsController");

const router = express.Router();

router.route("/").get(productVendors.showVendors);

module.exports = router;
