const brand = require("../models/addproductbrandModel");

// exports.addbrand = (req, res) => {
//   res.render("./pages/addbrands");
// };

exports.allBrand = (req, res) => {
  brand.getAllbrand((err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occured in allproducts function",
      });
    } else
      res.render("./pages/addbrands", {
        result: data,
      });

    console.log("Brand: ", data);
  });
};
