const paymentinfo = require("../models/paymentreportModel");

exports.paymentinfo = (req, res) => {
  paymentinfo.paymentDetails((err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || "Some error occured in inventoryReport function",
      });
    } else {
      res.render("./pages/payment-reports", {
        data,
      });
    }
    console.log("Payment: ", data);
  });
};
