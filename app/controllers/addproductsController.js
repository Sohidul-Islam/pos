const addproducts = require("../models/addproductModel");
// const addproductBrand = require("../models/addproductbrandModel");

exports.addProductType = (req, res) => {
  addproducts.getAllprodtype((err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occured in allproducts function",
      });
    } else {
      var prodtype = data[0];
      var brand = data[1];
      var vendor = data[2];
      console.log("Prodtyep ", typeof prodtype);
      console.log("Prodtyep", prodtype.prod_type);

      res.render("./pages/addproduct", {
        brand: brand,
        prodtype: prodtype,
        vendor: vendor,
      });

      console.log("data View", data);
    }
  });
};
