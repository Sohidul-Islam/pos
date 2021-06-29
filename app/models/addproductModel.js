const sql = require("./db");

const addproducttype = function (product) {
  this.prodid = product.prodid;
  this.prod_type = product.prod_type;
  // this.brandid = product.brandid;
  // this.brand_n = product.brand_n;
};

addproducttype.getAllprodtype = (result) => {
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

module.exports = addproducttype;
