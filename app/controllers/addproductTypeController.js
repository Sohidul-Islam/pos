const producttype = require("../models/addproducttypeModel");
// exports.addproducttype = (req, res) => {
//   res.render("./pages/addproducttype");
// };

exports.allproductsTypes = (req, res) => {
  producttype.getAllprodtype((err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occured in allproducts function",
      });
    } else
      res.render("./pages/addproducttype", {
        data,
      });

    console.log(data);
  });
};
