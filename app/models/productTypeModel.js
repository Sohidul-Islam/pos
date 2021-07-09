const sql = require("./db");

const productType = function (product) {
  this.prodid = product.prodid;
  this.prod_type = product.prod_type;
  this.des = product.des;
};

productType.gettAllType = (result) => {
  sql.query(
    `select prodtype.prodid,count(prod_n) as variant,prod_type,sum(stock) as stock  from prodtype left join product
    on prodtype.prodid=product.prodid 
    left join brand
    on product.brandid = brand.brandid
    left join vendors
    on product.vendorid = vendors.vendorid
    group by prodid
    order by prodid
    ;`,
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

productType.findById = (prodid, result) => {
  // console.log(`select * from prodtype where prodid = ${prodid}`);
  sql.query(`select * from prodtype where prodid = ${prodid}`, (err, res) => {
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
  });
};

productType.updateById = (product, result) => {
  console.log(
    `UPDATE product SET prod_type = ${product.prod_type},des = ${product.des} WHERE pid = ${product.prodid}`
  );
  sql.query(
    "UPDATE product SET prod_type = ?,des = ? WHERE prodid = ?",
    [product.prod_type, product.des, product.prodid],
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

productType.remove = (pid, result) => {
  console.log(`DELETE FROM product WHERE pid = ${pid}`);
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
module.exports = productType;
