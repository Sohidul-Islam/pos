const express = require("express");
const productlist = require("../controllers/productlistController");

const router = express.Router();

router.route("/").get(productlist.findAllproductlist);
router.route("/edit/:pid").get(productlist.findOne);
router.route("/edit").post(productlist.update);
router.route("/delete/:pid").get(productlist.delete);

module.exports = router;
