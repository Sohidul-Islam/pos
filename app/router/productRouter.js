const express = require("express");
const productController = require("../controllers/productController");

const router = express.Router();

router.route("/").get(productController.allproducts);

module.exports = router;

// router.route("/").post(customer.creatCustomer);
// router.route("/:customerId").get(customer.findOne);
// router.route("/edit").post(customer.update);
// router.route("/edit/:customerId").get(customer.editone);
