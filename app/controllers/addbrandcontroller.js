const brand = require("../models/addproductbrandModel");
const Brand = require("../models/addproductbrandModel");

// exports.addbrand = (req, res) => {
//   res.render("./pages/addbrands");
// };

exports.allBrand = (req, res) => {
  if(req.session.loggedin!=true){
    res.redirect("/");
  }
  brand.getAllbrand((err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occured in allproducts function",
      });
    } else
      res.render("./pages/addbrands", {
        result: data,
        role: req.session.username
      });

    // console.log("Brand: ", data);
  });
};

exports.createBrand = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }
  // Create a product
  const brand = new Brand({
    brand_n: req.body.brand_n,
    des: req.body.des,
  });

  // console.log("Added Product : ", brand);
  //Save Customer in the database
  Brand.createbrand(brand, (err, data) => {
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
