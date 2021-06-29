const sql = require("./db");

const addbrand = function (product) {
  this.brandid = product.brandid;
  this.brand_n = product.brand_n;
};

addbrand.getAllbrand = (result) => {
  sql.query("select * from brand", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("brand: ", res);
    result(null, res);
  });
};

module.exports = addbrand;
