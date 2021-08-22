const productlist = require("../models/productlistModel");
const Productlist = require("../models/productlistModel");
// const addsales = require("../models/addsalesModel");
const Addsales = require("../models/addsalesModel");
const fs = require("fs");

exports.findAllproductlist = (req, res) => {
  if (req.session.loggedin != true) {
    res.redirect("/");
  }
  productlist.gettAllproduct((err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occured in allproducts function",
      });
    } else {
      res.render("./pages/products", {
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
    img: req.file.filename,
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
var j = 0;
exports.findOne = (req, res) => {
  if (req.session.loggedin != true) {
    res.redirect("/");
  }
  console.log(`IN Controller PID ${req.params.pid} and ${j++}`);
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

      productlist.productInfo((err, DATA) => {
        if (err) {

          res.status(404).send({
            message: `Not found product info`,
          });
        } else {

          let findbyid = data[0];
          let prodType = DATA[0];
          let brand = DATA[1];
          let vendor = DATA[2];
          console.log("Findby id ", findbyid);
          console.log("ProdType  ", prodType);
          console.log("Brand  ", brand);
          console.log("Vendor ", vendor);
          res.render("./pages/editproduct", {
            findbyid: findbyid,
            prodType: prodType,
            brand: brand,
            vendor: vendor,
            role: req.session.username
          });
        }
      })

    }
  });
};
exports.salesone = (req, res) => {
  if (req.session.loggedin != true) {
    res.redirect("/");
  }
  console.log(req.params, "Not fount");
  productlist.findByIdforsales(req.params.pid, (err, data) => {
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
      let findbyid = data[0];
      // ./pages/salesindividual
      // console.log("findbyid ", findbyid.selling_p);
      res.render(`./pages/salesindividual`, {
        findbyid,
        role: req.session.username
      });
    }
  });
};

exports.delete = (req, res) => {
  // fs.unlink('mynewfile2.txt', function (err) {
  //   if (err) throw err;
  //   console.log('File deleted!');
  // });
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
      console.log("Deleted data", data[0].img);
      let fileLoc = `\public\\assets\\${data[0].img}`;
      console.log(fileLoc);
      fs.unlink(fileLoc, function (err) {
        if (err) throw err;
        console.log('File deleted!');
      });
    }
  })

  productlist.remove(req.params.pid, (err, data) => {
    console.log("delete-->", data);
    // console.log("res delete-->", res);
    // console.log("res delete-->", req);
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

exports.createsales = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  // Create a product
  const addsales = new Addsales({
    pid: req.body.pid,
    customername: req.body.customername,
    address: req.body.address,
    email: req.body.email,
    qty: req.body.qty,
    status: req.body.status,
    price: req.body.price,
    date: req.body.date,
    des: req.body.des,
  });

  // console.log("Added Product : ", addsales);
  //Save Customer in the database
  Addsales.createsales(addsales, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Customer.",
      });
    else if (data !== null && data !== "") {
      res.redirect("http://localhost:3000/sales");

    }
  });
};