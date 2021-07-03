const sql = require("./db");
const topselling = function (payment) {
  this.prod_n = payment.product_n;
  this.prod_type = payment.product_type;
  this.brandid = payment.brandid;
  this.qty = payment.qty;
  this.stock = payment.stock;
  this.cost_p = payment.cost_p;
  this.selling_p = payment.selling_p;
  this.vendorid = payment.vendorid;
};
topselling.topselling = (result) => {
  sql.query(
    `select prod_n,prod_type,sum(qty) as qty,selling_p,status from sales,product,prodtype,brand 
    where product.pid = sales.pid and product.prodid = prodtype.prodid and product.brandid = brand.brandid and 1 >= all (SELECT WEEK(date(now()))-WEEK(sales.date) from sales) or 0>all 
    (SELECT WEEK(date(now()))-WEEK(sales.date) from sales)  group by prod_n order by qty desc
   ;`,
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
module.exports = topselling;
