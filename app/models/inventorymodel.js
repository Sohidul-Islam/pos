const sql = require("../models/db");

const inventory = function (product) {
  this.product_n = product.product_n;
  this.product_type = product.product_type;
  this.brandid = product.brandid;
  this.stock = product.stock;
  this.cost_id = product.cost_id;
  this.worth = product.worth;
  this.vendorid = product.vendorid;
};

inventory.inventoryReport = (result) => {
  sql.query(
    `select pid, product_n, product_type,brand_n,product.stock as qty,cost_p,(product.stock*product.cost_p) as total,vendors.v_name
    from product,brand,vendors
    where  brand.brandid = product.brandid and vendors.vendorid = product.vendorid;`,
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
