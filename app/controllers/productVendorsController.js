const productVendors = require("../models/productVendorsModel");

exports.showVendors = (req, res) => {
  productVendors.allvendors((err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || "Some error occured in inventoryReport function",
      });
    } else
      res.render("./pages/product-vendors", {
        result: data,
      });

    console.log(data);
  });
  // res.render("./pages/inventory-reports");
};
