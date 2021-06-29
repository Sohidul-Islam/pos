const checksales = require("../models/checksalesModel");
exports.allsales = (req, res) => {
  checksales.checkallsales((err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occured in allproducts function",
      });
    } else
      res.render("./pages/sales", {
        data,
      });

    console.log(data);
  });
};
