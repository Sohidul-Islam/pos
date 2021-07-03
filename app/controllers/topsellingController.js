const topSeller = require("../models/topsellingModel");
exports.FindAlltopSelling = (req, res) => {
  topSeller.topselling((err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occured in allproducts function",
      });
    } else
      res.render("./pages/topselling", {
        result: data,
      });

    console.log(data);
  });
};
