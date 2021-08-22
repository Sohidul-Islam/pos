const sql = require("./db");

const addproduct = function (product) {
  this.prodid = product.prodid;
  this.brandid = product.brandid;
  this.vendorid = product.vendorid;
  this.prod_n = product.prod_n;
  this.cost_p = product.cost_p;
  this.selling_p = product.selling_p;
  this.stock = product.stock;
  this.des = product.des;
  this.img = product.img;
  // this.brandid = product.brandid;
  // this.brand_n = product.brand_n;
};

addproduct.getAllprodtype = (result) => {
  sql.query(
    "SELECT * FROM prodtype;select * from brand;SELECT * FROM vendors",
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      // console.log("product: ", res);
      result(null, res);
    }
  );
};

addproduct.createProduct = (newproduct, result) => {
  sql.query("INSERT INTO product SET ?", newproduct, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created product: ", {
      id: res.insertId,
      ...newproduct
    });
    result(null, {
      id: res.insertId,
      ...newproduct
    });
  });
};
module.exports = addproduct;