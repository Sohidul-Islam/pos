const sql = require("./db");
const addsales = function (product) {
  this.pid = product.pid;
  this.price = product.price;
  this.des = product.des;
  this.customername = product.customername;
  this.address = product.address;
  this.status = product.status;
  this.phone = product.phone;
  this.date = product.date;
  this.qty = product.qty;
};

addsales.getAllprodtype = (result) => {
  sql.query(`SELECT * FROM product`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    // console.log("product: ", res);
    result(null, res);
  });
};

addsales.createsales = (newproduct, result) => {
  sql.query(`INSERT INTO sales SET ?`, newproduct, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    } else if (res.insertId !== null && res.insertId !== "") {
      sql.query(
        `UPDATE product,sales
          SET product.stock = product.stock-sales.qty
          WHERE product.pid = sales.pid and sales.salesid =${res.insertId} `,
        (err, res) => {
          if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
          } else {
            sql.query(
              `INSERT INTO Customers (name, address, phone)
            SELECT customername,address,phone FROM sales ORDER BY salesid DESC LIMIT 1;SELECT * FROM customers`,
              (err, res) => {
                if (err) {
                  console.log("error: ", err);
                  result(null, err);
                  return;
                } else {
                  sql.query(
                    `insert into expense(t_type,des,account,date,price)
                  select "Income",CONCAT(product.prod_n, ' sold'),customername,date,qty*price
                  from sales,product
                  where product.pid = sales.pid and status = "Payment"
                  order by salesid desc limit 1`,
                    (err, res) => {
                      if (err) {
                        console.log("error: ", err);
                        result(null, err);
                        return;
                      } else {
                        sql.query(
                          `insert into due(name,address,phone,due,paytime)
                          select customername,address,phone,price*qty,date
                          from sales,product
                          where product.pid = sales.pid and status = "Due"
                          order by salesid desc limit 1;`,
                          (err, res) => {
                            if (err) {
                              console.log("error: ", err);
                              result(null, err);
                              return;
                            }
                          }
                        );
                      }
                    }
                  );
                }
              }
            );
          }
          // console.log("product: ", res);
        }
      );
    }

    // console.log("created sales: ", { id: res.insertId, ...newproduct });
    result(null, { id: res.insertId, ...newproduct });
  });
};
module.exports = addsales;
