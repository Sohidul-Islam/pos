const checksales = require("../models/checksalesModel");
exports.allsales = (req, res) => {
  checksales.checkallsales((err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occured in allproducts function",
      });
    } else {
      for (let i = 0; i < data.length; i++) {
        if (data[i].stock <= 0) data[i].stock = "out of stock";
        else if (data[i].status == "Due") data[i].profit = "Pending";
        console.log("Stock ", data[i].stock);
        console.log("Stock ", data[i].profit);
      }
      res.render("./pages/sales", {
        result: data,
      });
    }
  });
};
