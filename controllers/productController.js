const express = require("express");

const Product = require("../models/productModel");

exports.findAll = (req, res) => {
  console.log(req.body);
  Product.getAll((err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customers.",
      });
    }
    res.render("products", {
      title: "specialization List",
    });
  });
};
