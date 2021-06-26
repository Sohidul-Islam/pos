const productBrands = require("../models/productBrandsModel");

exports.showbrands = (req, res) => {
  productBrands.allbrands((err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || "Some error occured in inventoryReport function",
      });
    } else
      res.render("./pages/product-brands", {
        result: data,
      });

    console.log(data);
  });
  // res.render("./pages/inventory-reports");
};
