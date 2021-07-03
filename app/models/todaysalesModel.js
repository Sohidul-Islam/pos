const sql = require("../models/db");
//db.js imports here

// constructor
const todaysalss = function (product) {
  this.product_n = product.product_n;
  this.product_type = product.product_type;
  this.brandid = product.brandid;
  this.stock = product.stock;
  this.selling_p = product.selling_p;
};

todaysalss.getTodaysales = (result) => {
  sql.query(
    `select prod_n,prod_type,qty,selling_p, qty*selling_p as total,date from product join prodtype join brand join sales
    on sales.pid =product.pid and product.prodid = prodtype.prodid and product.brandid = brand.brandid
    where sales.date = CURDATE();`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      // console.log("product: ", res);
      result(null, res);
    }
  );
};

module.exports = todaysalss;
