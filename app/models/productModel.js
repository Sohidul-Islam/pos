const sql = require("../models/db");

const Products = function (product) {
  this.product_n = product.product_n;
  this.product_type = product.product_type;
  this.brandid = product.brandid;
  this.stock = product.stock;
  this.cost_id = product.cost_id;
  this.worth = product.worth;
  this.vendorid = product.vendorid;
};
//1 query : top product
//2 query : sales count
//3 query : due list
//4 query : count top selling products
Products.getAll = (result) => {
  sql.query(
    `select customername,address,phone,(qty*price) as total from sales where status<>'Due' order by qty*price desc; 
    
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
   
   select sum(price) as total,issuetime from sales group by issuetime;
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

module.exports = Products;
