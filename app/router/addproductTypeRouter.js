const express = require("express");
const addProductType = require("../controllers/addproductTypeController");
const router = express.Router();
// router.route("/").get(addProductType.addproducttype);
router.route("/").get(addProductType.allproductsTypes);

module.exports = router;
