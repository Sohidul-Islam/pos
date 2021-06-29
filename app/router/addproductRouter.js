const express = require("express");
const addProduct = require("../controllers/addproductsController");
const router = express.Router();
router.route("/").get(addProduct.addProductType);
// router.route("/").get(addProduct.getAllBrands);

module.exports = router;
