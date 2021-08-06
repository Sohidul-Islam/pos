const producttype = require("../models/addproducttypeModel");
const Producttype = require("../models/addproducttypeModel");
// exports.addproducttype = (req, res) => {
//   res.render("./pages/addproducttype");
// };

exports.allproductsTypes = (req, res) => {
  if(req.session.loggedin!=true){
    res.redirect("/");
  }
  producttype.getAllprodtype((err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occured in allproducts function",
      });
    } else
      res.render("./pages/addproducttype", {
        data,
        role: req.session.username
      });

    console.log(data);
  });
};

exports.createProdtype = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }
  // Create a product
  const producttype = new Producttype({
    prod_type: req.body.prod_type,
    des: req.body.des,
  });

  console.log("Added product type : ", producttype);
  //Save Customer in the database
  Producttype.createprodtype(producttype, (err, data) => {
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
