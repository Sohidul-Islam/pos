const product = require("../models/productModel");

exports.allproducts = (req, res) => {
  product.getAll((err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occured in allproducts function",
      });
    } else
      res.render("./pages/home", {
        data,
      });

    console.log(data);
  });
};
