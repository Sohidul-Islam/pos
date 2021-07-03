const sql = require("../models/db");

const inventory = function (product) {
  this.pid = product.pid;
  this.prod_n = product.prod_n;
  this.prod_type = product.prod_type;
  this.brand_n = product.brand_n;
  this.stock = product.stock;
  this.selling_p = product.selling_p;
  this.worth = product.worth;
  this.vendorid = product.vendorid;
  this.v_name = product.v_name;
};

inventory.inventoryReport = (result) => {
  sql.query(
    `select product.pid,prod_n,prod_type,brand_n,stock,selling_p,(stock*selling_p) as worth,v_name
    from product,prodtype,brand,vendors
    where product.prodid = prodtype.prodid and product.brandid = brand.brandid and product.vendorid = vendors.vendorid`,
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

inventory.remove = (id, result) => {
  sql.query("DELETE FROM product WHERE pid = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Customer with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted customer with id: ", id);
    result(null, res);
  });
};

module.exports = inventory;
