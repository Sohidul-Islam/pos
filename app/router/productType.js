const express = require("express");

const productType = require("../controllers/productTypeController");

const router = express.Router();

router.route("/").get(productType.findAllproductType);
router.route("/delete/:prodid").get(productType.delete);
router.route("/edit").post(productType.update);
router.route("/edit/:prodid").get(productType.findOne);

module.exports = router;
