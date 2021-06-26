const sql = require("./db");
//here we import database connection
const checksales = function (payment) {
  this.product_n = payment.product_n;
  this.product_type = payment.product_type;
  this.brandid = payment.brandid;
  this.stock = payment.stock;
  this.cost_id = payment.cost_id;
  this.worth = payment.worth;
  this.vendorid = payment.vendorid;
};
checksales.checkallsales = (result) => {
  sql.query(
    `select *
    from sales,customers,product
    where sales.pid = product.pid and sales.customerid=customers.id ;`,
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

module.exports = checksales;
