const sql = require("./db");

const addexpense = function (payment) {
  this.t_type = "Expense";
  this.des = payment.des;
  this.account = payment.account;
  this.date = new Date();
  this.price = payment.price;
};

addexpense.getAllexpense = (result) => {
  sql.query("select * from expense", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("brand: ", res);
    result(null, res);
  });
};

addexpense.newexpense = (newproduct, result) => {
  sql.query("INSERT INTO expense SET ?", newproduct, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created product: ", { id: res.insertId, ...newproduct });
    result(null, { id: res.insertId, ...newproduct });
  });
};

module.exports = addexpense;
