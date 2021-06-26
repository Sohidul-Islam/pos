const express = require("express");
const productBrands = require("../controllers/productBrandsController");

const router = express.Router();

router.route("/").get(productBrands.showbrands);

module.exports = router;
