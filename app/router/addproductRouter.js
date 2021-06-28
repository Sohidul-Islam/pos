const express = require("express");
const addProduct = require("../controllers/addproductsController");
const router = express.Router();
router.route("/").get(addProduct.addProducts);

module.exports = router;
