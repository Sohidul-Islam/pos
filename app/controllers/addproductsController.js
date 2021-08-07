const addproducts = require("../models/addproductModel");
const Addproducts = require("../models/addproductModel");
// const addproductBrand = require("../models/addproductbrandModel");

exports.addProductType = (req, res) => {
  if(req.session.loggedin!=true){
    res.redirect("/");
  }
  addproducts.getAllprodtype((err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occured in allproducts function",
      });
    } else {
      var prodtype = data[0];
      var brand = data[1];
      var vendor = data[2];
      // console.log("Prodtyep ", typeof prodtype);
      // console.log("Prodtyep", prodtype.prod_type);

      res.render("./pages/addproduct", {
        brand: brand,
        prodtype: prodtype,
        vendor: vendor,
        role: req.session.username
      });

      // console.log("data View", data);
    }
  });
};

exports.createProduct = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  // Create a product
  const addproducts = new Addproducts({
    prod_n: req.body.prod_n,
    prodid: req.body.prodid,
    brandid: req.body.brandid,
    stock: req.body.stock,
    cost_p: req.body.cost_p,
    selling_p: req.body.selling_p,
    vendorid: req.body.vendorid,
    des: req.body.des,
  });

  // console.log("Added Product : ", addproducts);
  //Save Customer in the database
  Addproducts.createProduct(addproducts, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Customer.",
      });
    else {
      res.redirect("back");
    }
  });
};
