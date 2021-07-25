const express = require("express");
const productlist = require("../controllers/productlistController");

const router = express.Router();

router.route("/").get(productlist.findAllproductlist);
router.route("/edit/:pid").get(productlist.findOne);
router.route("/edit").post(productlist.update);
router.route("/delete/:pid").get(productlist.delete);
router.route("/sales/:pid").get(productlist.salesone);
router.route("/sales/:pid").post(productlist.createsales);

module.exports = router;
