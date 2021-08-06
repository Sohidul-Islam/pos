const addsales = require("../models/addsalesModel");
const Addsales = require("../models/addsalesModel");

exports.addSales = (req, res) => {
  if(req.session.loggedin!=true){
    res.redirect("/");
  }
  addsales.getAllprodtype((err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occured in allproducts function",
      });
    } else {
      var product = data;
      // console.log("customer ", typeof customers);
      res.render("./pages/addsales", {
        product: product,
        role: req.session.username
      });
      // console.log("add sales", data);
    }
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
        message:
          err.message || "Some error occurred while creating the Customer.",
      });
    else if (data !== null && data !== "") {
      res.redirect("back");
    }
  });
};
