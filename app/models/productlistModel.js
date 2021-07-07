const sql = require("./db");

const productlist = function (product) {
  this.prod_n = product.prod_n;
  this.prod_type = product.prod_type;
  this.cost_p = product.cost_p;
  this.selling_p = product.selling_p;
  this.stock = product.stock;
};

productlist.gettAllproduct = (result) => {
  sql.query(
    `select pid,prod_n,prod_type,brand_n,stock,cost_p,selling_p,stock*selling_p as worth,v_name
    from product,prodtype,brand,vendors
    where product.prodid = prodtype.prodid and product.brandid = brand.brandid and product.vendorid = vendors.vendorid;`,
    (err, res) => {
      if (err) {
        console.log("gett all product :", err);
        res.send(err);
        result(err, null);
      } else {
        result(null, res);
        console.log("gett all product :", res);
      }
    }
  );
};

productlist.findById = (pid, result) => {
  sql.query(
    `select pid,product.prodid,prod_type,prod_n,product.brandid,brand_n,product.vendorid,v_name,stock,cost_p,selling_p,product.des from product,prodtype,brand,vendors 
    where  product.brandid = brand.brandid and product.prodid = prodtype.prodid and product.vendorid = vendors.vendorid and pid = ${pid};`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      if (res.length) {
        console.log("found product: ", res[0]);
        result(null, res[0]);
        return;
      }
      result({ kind: "not_found" }, null);
    }
  );
};

productlist.updateById = (pid, product, result) => {
  sql.query(
    "UPDATE product SET pid = ?, prod_n = ?, prodid = ?,brandid = ?,vendorid = ? WHERE pid = ?",
    [
      product.pid,
      product.prod_n,
      product.prodid,
      product.brandid,
      product.vendorid,
      product.pid,
    ],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found product with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated product: ", { id: product.pid, ...product });
      result(null, { id: product.pid, ...product });
    }
  );
};

module.exports = productlist;
