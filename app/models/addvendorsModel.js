const sql = require("./db");

const addvendors = function (vendors) {
  this.vendorid = vendors.vendorid;
  this.v_name = vendors.v_name;
  this.phone = vendors.phone;
  this.des = vendors.des;
};

addvendors.createvendor = (newproduct, result) => {
  sql.query("INSERT INTO vendors SET ?", newproduct, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created product: ", { id: res.insertId, ...newproduct });
    result(null, { id: res.insertId, ...newproduct });
  });
};

addvendors.allvendors = (result) => {
  sql.query("SELECT * FROM vendors", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    // console.log("product: ", res);
    result(null, res);
  });
};
module.exports = addvendors;
