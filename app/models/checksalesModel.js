const sql = require("./db");
//here we import database connection
const checksales = function (payment) {
  this.prod_n = payment.product_n;
  this.prod_type = payment.product_type;
  this.brandid = payment.brandid;
  this.qty = payment.qty;
  this.stock = payment.stock;
  this.cost_p = payment.cost_p;
  this.selling_p = payment.selling_p;
  this.vendorid = payment.vendorid;
};
checksales.checkallsales = (result) => {
  sql.query(
    `select salesid,prod_n,customername,prod_type,brand_n,sales.qty,product.stock,price,(price*qty)as total, 
    qty*(price-cost_p) as profit,issuetime,status,date from product,sales,brand,prodtype
    where product.pid = sales.pid and product.brandid= brand.brandid and product.prodid = prodtype.prodid`,
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
