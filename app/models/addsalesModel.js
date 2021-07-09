const sql = require("./db");

var curdate = new Date();

const addsales = function (product) {
  this.pid = product.pid;
  this.price = product.price;
  this.des = product.des;
  this.customername = product.customername;
  this.address = product.address;
  this.status = product.status;
  this.email = product.email;
  this.date = product.date;
  // this.date = handleDate(curdate);
  this.issuetime = handleDate(curdate);
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
              `INSERT INTO Customers (customerid,name, address, email)
            SELECT salesid,customername,address,email FROM sales ORDER BY salesid DESC LIMIT 1;SELECT * FROM customers`,
              (err, res) => {
                if (err) {
                  console.log("error: ", err);
                  result(null, err);
                  return;
                } else {
                  sql.query(
                    `insert into expense(t_type,des,account,date,price)
                  select "Income",CONCAT(product.prod_n, ' sold'),customername,issuetime,qty*price
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
                          `insert into due(dueid,name,address,email,due,issuetime,paytime,product,status)
                          select salesid,customername,address,email,price*qty,issuetime,date,sales.pid,'not_sent'
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

const handleDate = (dataD) => {
  let data = new Date(dataD);
  let month = data.getMonth() + 1;
  let day = data.getDate();
  let year = data.getFullYear();
  const postDate = year + "-" + month + "-" + day;
  return postDate;
};

module.exports = addsales;
