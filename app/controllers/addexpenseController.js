const addexpense = require("../models/addExpenseModel");
const Addexpense = require("../models/addExpenseModel");
exports.addexpense = (req, res) => {
  addexpense.getAllexpense((err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occured in allproducts function",
      });
    } else {
      res.render("./pages/addexpense", {
        data,
      });

      console.log("data View", data);
    }
  });
};
exports.addnewexpense = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  // Create a product
  const addexpense = new Addexpense({
    t_type: req.body.t_type,
    des: req.body.des,
    account: req.body.account,
    date: req.body.date,
    price: req.body.price,
  });
  console.log("vendors added: ", addexpense);
  // Save Customer in the database
  Addexpense.newexpense(addexpense, (err, data) => {
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
