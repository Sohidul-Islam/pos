const express = require("express");
const addProductType = require("../controllers/addproductTypeController");
const router = express.Router();
router.route("/").get(addProductType.addproducttype);

module.exports = router;
