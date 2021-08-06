const productType = require("../models/productTypeModel");
const ProductType = require("../models/productTypeModel");

exports.findAllproductType = (req, res) => {
  if(req.session.loggedin!=true){
    res.redirect("/");
  }
  productType.gettAllType((err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occured in allproducts function",
      });
    } else {
      for (let i = 0; i < data.length; i++) {
        if (data[i].stock == null) {
          data[i].stock = 0;
        }
      }
      console.log(data);
      res.render("./pages/product-types", {
        data,
        role: req.session.username
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

  const productType = new ProductType({
    prodid: req.body.prodid,
    prod_type: req.body.prod_type,
    des: req.body.des,
  });

  ProductType.updateById(productType, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Customer with id ${req.params.prodid}.`,
        });
      } else {
        res.status(500).send({
          message: "Error updating Customer with id " + req.params.prodid,
        });
      }
    } else res.send(data);
  });
};

exports.findOne = (req, res) => {
  productType.findById(req.params.prodid, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Customer with id ${req.params.prodid}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Customer with prodid " + req.params.prodid,
        });
      }
    } else {
      res.render("./pages/editprodtype", {
        data,
      });
    }
  });
};

exports.delete = (req, res) => {
  productType.remove(req.params.prodid, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found prodtype with id ${req.params.prodid}.`,
        });
      } else {
        res.status(500).send({
          message: "Could not delete prodtype with id " + req.params.prodid,
        });
      }
    } else res.send({ message: `product Type was deleted successfully!` });
  });
};
// <%for(let i = 0 ; i<prodType.length;i++)%>
//                       <%%>
