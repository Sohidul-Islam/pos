const sql = require("./db");

const shortitems = function (item) {
  this.pid = item.pid;
  this.prodid = item.prodid;
  this.prod_n = item.prod_n;
  this.prod_type = item.prod_type;
  this.stock = item.stock;
  this.selling_p = item.selling_p;
};

shortitems.allshortitems = (result) => {
  sql.query(
    `select prod_n,prod_type,stock,selling_p, stock*selling_p as worth from product join prodtype join brand
    on product.prodid = prodtype.prodid and product.brandid = brand.brandid
    where product.stock <=10;`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        console.log("Short Items : ", res);
        result(null, res);
      }
    }
  );
};

module.exports = shortitems;
