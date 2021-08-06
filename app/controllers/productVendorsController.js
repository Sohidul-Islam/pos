const productVendors = require("../models/productVendorsModel");

exports.showVendors = (req, res) => {
  if(req.session.loggedin!=true){
    res.redirect("/");
  }
  productVendors.allvendors((err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || "Some error occured in inventoryReport function",
      });
    } else{
      for (let i = 0; i < data.length; i++) {
        if (data[i].products==null) {
          data[i].products = 0;
        }
      
        
      }
      res.render("./pages/product-vendors", {
        result: data,
        role: req.session.username
      });
    }
      

    console.log(data);
  });
  // res.render("./pages/inventory-reports");
};
