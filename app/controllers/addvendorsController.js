const vendors = require("../models/addvendorsModel");
const Vendors = require("../models/addvendorsModel");
exports.addvendors = (req, res) => {
  Vendors.allvendors((err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occured in allproducts function",
      });
    } else {
      res.render("./pages/addvendors", {
        data,
      });

      console.log("data View", data);
    }
  });
};

exports.addnewvendors = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  // Create a product
  const vendors = new Vendors({
    v_name: req.body.v_name,
    phone: req.body.phone,
    des: req.body.des,
  });
  console.log("vendors added: ", vendors);
  // Save Customer in the database
  Vendors.createvendor(vendors, (err, data) => {
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
