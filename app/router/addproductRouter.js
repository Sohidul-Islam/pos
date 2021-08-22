const express = require("express");
const addProduct = require("../controllers/addproductsController");
const multer = require("../controllers/multerConfig");
const router = express.Router();
router.route("/").get(addProduct.addProductType);
router.route("/").post(multer.upload.single("img"), addProduct.createProduct);
// router.route("/").get(addProduct.getAllBrands);

module.exports = router;