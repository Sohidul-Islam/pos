const sql = require("./db");

const addproducttype = function (product) {
  this.prodid = product.prodid;
  this.prod_type = product.prod_type;
};

addproducttype.getAllprodtype = (result) => {
  sql.query("SELECT * FROM prodtype", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("product: ", res);
    result(null, res);
  });
};

module.exports = addproducttype;
