const salesCount = require("../models/salescountModel");
exports.allsalesCount = (req, res) => {
  salesCount.salesCount((err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occured in allproducts function",
      });
    } else
      res.render("./pages/salescount", {
        result: data,
      });

    console.log(data);
  });
};
