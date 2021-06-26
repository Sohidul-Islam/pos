const sql = require("../models/db");

const paymentReport = function (payment) {
  this.product_n = payment.product_n;
  this.product_type = payment.product_type;
  this.brandid = payment.brandid;
  this.stock = payment.stock;
  this.cost_id = payment.cost_id;
  this.worth = payment.worth;
  this.vendorid = payment.vendorid;
};

paymentReport.paymentDetails = (result) => {
  sql.query(
    `select * 
    from customers,payment
    where customerid = payment.customerid;
    `,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      console.log("product: ", res);
      result(null, res);
    }
  );
};

module.exports = paymentReport;
