const productlist = require("../models/productlistModel");
const Productlist = require("../models/productlistModel");

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

  const productlist = new Productlist({
    pid: req.body.pid,
    prod_n: req.body.prod_n,
    prodid: req.body.prodid,
    brandid: req.body.brandid,
    vendorid: req.body.vendorid,
    stock: req.body.stock,
    cost_p: req.body.cost_p,
    selling_p: req.body.selling_p,
    des: req.body.des,
  });
  // console.log("productlist: ", productlist);
  // console.log("description: ", req.body.des);

  Productlist.updateById(productlist, (err, data) => {
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
    } else res.redirect("back");
  });
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
          message: "Error retrieving Customer with pid " + req.params.pid,
        });
      }
    } else {
      let findbyid = data[0][0];
      let prodType = data[1];
      let brand = data[2];
      let vendor = data[3];
      // console.log("length, ", prodType.length);
      // console.log("Type, ", findbyid);
      // console.log("find by id: ", prodType.length);
      // console.log("find by id: ", brand);
      // console.log("find by id: ", vendor.length);
      res.render("./pages/editproduct", {
        findbyid: findbyid,
        prodType: prodType,
        brand: brand,
        vendor: vendor,
      });
    }
  });
};

exports.delete = (req, res) => {
  productlist.remove(req.params.pid, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Customer with id ${req.params.pid}.`,
        });
      } else {
        res.status(500).send({
          message: "Could not delete Customer with id " + req.params.pid,
        });
      }
    } else res.redirect("back");
  });
};
// <%for(let i = 0 ; i<prodType.length;i++)%>
//                       <%%>
