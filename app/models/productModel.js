const sql = require("../models/db");

const Products = function (product) {
  this.product_n = product.product_n;
  this.product_type = product.product_type;
  this.brandid = product.brandid;
  this.stock = product.stock;
  this.cost_id = product.cost_id;
  this.worth = product.worth;
  this.vendorid = product.vendorid;
  this.dueid = product.dueid;
};
//1 query : top product
//2 query : sales count
//3 query : due list
//4 query : count top selling products
Products.getAll = (result) => {
  sql.query(
    `select customername,address,email,(qty*price) as total from sales where status<>'Due' order by qty*price desc; 
    
    select prod_n,prod_type,qty,qty*sales.price as total,status,issuetime from sales,product,prodtype,brand 
    where product.pid = sales.pid and product.prodid = prodtype.prodid and product.brandid = brand.brandid;

    select * from due order by issuetime desc;

    select prod_n,prod_type,sum(qty) as qty,selling_p,status,issuetime from sales,product,prodtype,brand 
    where product.pid = sales.pid and product.prodid = prodtype.prodid and product.brandid = brand.brandid group by prod_n order by qty desc
   ;
   
   select prod_n,prod_type,stock,selling_p, stock*selling_p as worth from product join prodtype join brand
   on product.prodid = prodtype.prodid and product.brandid = brand.brandid
   where product.stock <=10;

   select prod_n,prod_type,qty,selling_p, qty*selling_p as total,date,issuetime from product join prodtype join brand join sales
   on sales.pid =product.pid and product.prodid = prodtype.prodid and product.brandid = brand.brandid
   where sales.issuetime = CURDATE();
   
   select sum(price) as total,date from expense where t_type<>'Expense' group by date;

   select sum(qty*(price-product.cost_p)) as profit,issuetime from sales,product where sales.pid = product.pid group by issuetime;
   `,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      // console.log("product: ", res);
      result(null, res);
    }
  );
};

Products.getbyStatus = (result) => {
  sql.query(
    `select dueid,name,email,due,paytime,prod_n from due,product where due.product = product.pid and status = 'not_sent'`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      // console.log("product: ", res);
      result(null, res);
    }
  );
};
Products.getbyDuid = (dueid, result) => {
  sql.query(
    `select dueid,name,email,due,paytime,prod_n from due,product where due.product = product.pid and dueid = ?`,
    dueid,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      // console.log("product: ", res);
      result(null, res);
    }
  );
};

Products.updateStatusbyid = (dueid, result) => {
  sql.query(
    `update due set status ='sent' where dueid = ?`,
    dueid,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      // console.log("product: ", res);
      result(null, res);
    }
  );
};
Products.updatepaymentbyid = (dueid, result) => {
  console.log(`update sales set status = 'Payment' where  = ${dueid}`);
  sql.query(
    `update sales set status = 'Payment',date =CURDATE() where salesid = ${dueid}`,
    dueid,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      } else {
        console.log(`delete from due where dueid = ${dueid}`);
        sql.query(
          `delete from due where dueid = ${dueid}`,
          dueid,
          (err, res) => {
            if (err) {
              console.log("error: ", err);
              result(err, null);
              return;
            }
          }
        );
      }

      // console.log("product: ", res);
      result(null, res);
    }
  );
};

module.exports = Products;
