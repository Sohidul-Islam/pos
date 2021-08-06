const productBrands = require("../models/productBrandsModel");

exports.showbrands = (req, res) => {
  if(req.session.loggedin!=true){
    res.redirect("/");
  }
  productBrands.allbrands((err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || "Some error occured in inventoryReport function",
      });
    } else {
      for (let i = 0; i < data.length; i++) {
        if (data[i].products == null) {
          data[i].products = 0;
          data[i].worth = 0;
        }
        console.log("data products", data[i].products);
      }
      res.render("./pages/product-brands", {
        result: data,
        role: req.session.username
      });
    }

    console.log(data);
  });
  // res.render("./pages/inventory-reports");
};
