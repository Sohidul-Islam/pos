const sql = require("../models/db");

const paymentReport = function (payment) {
  this.t_type = payment.t_type;
  this.des = payment.des;
  this.account = payment.account;
  this.date = payment.date;
  this.price = payment.price;
};

paymentReport.paymentDetails = (result) => {
  sql.query(
    `select * 
    from expense
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
