const sql = require("./db");

const addproducttype = function (product) {
  this.prod_type = product.prod_type;
  this.des = product.des;
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

addproducttype.createprodtype = (newproduct, result) => {
  sql.query("INSERT INTO prodtype SET ?", newproduct, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created product: ", { id: res.insertId, ...newproduct });
    result(null, { id: res.insertId, ...newproduct });
  });
};

module.exports = addproducttype;
