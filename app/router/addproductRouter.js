const express = require("express");
const addProduct = require("../controllers/addproductsController");
const router = express.Router();
router.route("/").get(addProduct.addProductType);
router.route("/").post(addProduct.createProduct);
// router.route("/").get(addProduct.getAllBrands);

module.exports = router;
