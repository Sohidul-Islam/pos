const sql = require("../models/db");
//db.js imports here

// constructor
const Products = function (product) {
  this.product_n = product.product_n;
  this.product_type = product.product_type;
  this.brandid = product.brandid;
  this.stock = product.stock;
  this.cost_id = product.cost_id;
  this.worth = product.worth;
  this.vendorid = product.vendorid;
};
//1 query : top customer
//2 query : sales count
//3 query : due list
//4 query : count top selling products
Products.getAll = (result) => {
  sql.query(
    `select customername,address,phone,(qty*price) as total from sales where status<>'Due' order by qty*price desc; 
    select count(salesid) as salescount from sales,product,prodtype,brand 
    where product.pid = sales.pid and product.prodid = prodtype.prodid and product.brandid = brand.brandid and 1 >= all 
    (SELECT WEEK(date(now()))-WEEK(sales.date) from sales) or 0>all 
    (SELECT WEEK(date(now()))-WEEK(sales.date) from sales);
    select * from due order by due desc;select prod_n,prod_type,sum(qty) as qty,selling_p,status from sales,product,prodtype,brand 
    where product.pid = sales.pid and product.prodid = prodtype.prodid and product.brandid = brand.brandid and 1 >= all (SELECT WEEK(date(now()))-WEEK(sales.date) from sales) or 0>all 
    (SELECT WEEK(date(now()))-WEEK(sales.date) from sales)  group by prod_n order by qty desc
   ;`,
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

module.exports = Products;
