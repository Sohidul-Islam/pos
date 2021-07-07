const productlist = require("../models/productlistModel");

exports.findAllproductlist = (req, res) => {
  productlist.gettAllproduct((err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occured in allproducts function",
      });
    } else {
      res.render("./pages/products", {
        data,
      });
    }
  });
};

exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  productlist.updateById(
    req.params.pid,
    new Customer(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Customer with id ${req.params.pid}.`,
          });
        } else {
          res.status(500).send({
            message: "Error updating Customer with id " + req.params.pid,
          });
        }
      } else res.send(data);
    }
  );
};

exports.findOne = (req, res) => {
  productlist.findById(req.params.pid, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Customer with id ${req.params.pid}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Customer with id " + req.params.pid,
        });
      }
    } else
      res.render("./pages/editproduct", {
        data,
      });
  });
};
