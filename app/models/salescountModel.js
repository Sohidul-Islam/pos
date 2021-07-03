const sql = require("./db");
//here we import database connection
const salescount = function (payment) {
  this.prod_n = payment.product_n;
  this.prod_type = payment.product_type;
  this.brandid = payment.brandid;
  this.qty = payment.qty;
  this.stock = payment.stock;
  this.cost_p = payment.cost_p;
  this.selling_p = payment.selling_p;
  this.vendorid = payment.vendorid;
};
salescount.salesCount = (result) => {
  sql.query(
    `select prod_n,prod_type,qty,qty*sales.price as total,status from sales,product,prodtype,brand 
    where product.pid = sales.pid and product.prodid = prodtype.prodid and product.brandid = brand.brandid and 1 >= all (SELECT WEEK(date(now()))-WEEK(sales.date) from sales) or 0>all 
    (SELECT WEEK(date(now()))-WEEK(sales.date) from sales);`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      console.log("salescount: ", res);
      result(null, res);
    }
  );
};

module.exports = salescount;
