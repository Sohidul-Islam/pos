const sql = require("./db");

const productlist = function (product) {
  this.pid = product.pid;
  this.prodid = product.prodid;
  this.prod_n = product.prod_n;
  this.brandid = product.brandid;
  this.vendorid = product.vendorid;
  this.cost_p = product.cost_p;
  this.selling_p = product.selling_p;
  this.stock = product.stock;
  this.des = product.des;
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
        // console.log("gett all product :", res);
      }
    }
  );
};
productlist.productInfo = (result) => {
  sql.query(
    ` select * from prodtype;
    select * from brand;
    select * from vendors;`,
    (err, res) => {
      if (err) {
        console.log("gett all product :", err);
        res.send(err);
        result(err, null);
      } else {
        result(null, res);
        // console.log("gett all product :", res);
      }
    }
  );
};
var i = 0;
productlist.findById = (pid, result) => {
  console.log(`IN MODAL PID ${pid} and ${i++}`);
  
  sql.query(
    "select pid,product.prodid,prod_type,prod_n,product.brandid,brand_n,product.vendorid,v_name,stock,cost_p,selling_p,product.des from product,prodtype,brand,vendors where  product.brandid = brand.brandid and product.prodid = prodtype.prodid and product.vendorid = vendors.vendorid and pid =?",pid,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      if (res.length) {
        // console.log("found product: ", res);
        result(null, res);
        return;
      }
      result({ kind: "not_found" }, null);
    }
  );
};
var j = 0
productlist.findByIdforsales = (pid, result) => {
  console.log(`IN MODAL for sales --> PID ${pid} and ${j++}`);
  
  sql.query(
    "select pid,product.prodid,prod_type,prod_n,product.brandid,brand_n,product.vendorid,v_name,stock,cost_p,selling_p,product.des from product,prodtype,brand,vendors where  product.brandid = brand.brandid and product.prodid = prodtype.prodid and product.vendorid = vendors.vendorid and pid =?",pid,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      if (res.length) {
        // console.log("found product: ", res);
        result(null, res);
        return;
      }
      result({ kind: "not_found" }, null);
    }
  );
};

productlist.updateById = (product, result) => {
  console.log(
    `UPDATE product SET prod_n = ${product.prod_n} , prodid = ${product.prodid},brandid =${product.brandid} ,vendorid =${product.vendorid} ,des =${product.des},stock = ${product.stock},cost_p =${product.cost_p},selling_p = ${product.selling_p}  WHERE pid = ${product.pid}`
  );
  sql.query(
    "UPDATE product SET prod_n = ?, prodid = ?,brandid = ?,vendorid = ?,des = ?,stock = ?,cost_p = ?,selling_p = ? WHERE pid = ?",
    [
      product.prod_n,
      product.prodid,
      product.brandid,
      product.vendorid,
      product.des,
      product.stock,
      product.cost_p,
      product.selling_p,
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

     // console.log("updated product: ", { id: product.pid, ...product });
      result(null, { id: product.pid, ...product });
    }
  );
};

productlist.remove = (pid, result) => {
  // console.log(`DELETE FROM product WHERE pid = ${pid}`);
  sql.query("DELETE FROM product WHERE pid = ?", pid, (err, res) => {
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

    console.log("deleted customer with id: ", pid);
    result(null, res);
  });
};
module.exports = productlist;
