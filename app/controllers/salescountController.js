const salesCounter = require("../models/salsecountModel");

exports.showsalescount = (req, res) => {
  salesCounter.allsalescount((err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || "Some error occured in inventoryReport function",
      });
    } else
      res.render("./pages/salescount", {
        result: data,
      });

    console.log(data);
  });
  // res.render("./pages/inventory-reports");
};
