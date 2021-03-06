const sql = require("./db");

const addbrand = function (product) {
  this.brand_n = product.brand_n;
  this.des = product.des;
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

addbrand.createbrand = (newproduct, result) => {
  sql.query("INSERT INTO brand SET ?", newproduct, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created product: ", { id: res.insertId, ...newproduct });
    result(null, { id: res.insertId, ...newproduct });
  });
};

module.exports = addbrand;
