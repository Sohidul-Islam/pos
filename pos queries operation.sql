select * from brand;
select * from product;
select * from sales;
select * from expense;
select * from vendors;
select * from due;

delete from due
where dueid = 1;

update product
set stock = 20
where stock < 10;

truncate table sales;
truncate table expense;
truncate table customers;
truncate table due;

select salesid,prod_n,prod_type,brand_n,sales.qty,product.stock,selling_p,(selling_p*qty)as total, qty*(selling_p-cost_p) as profit from product,sales,brand,prodtype
where product.pid = sales.pid and product.brandid= brand.brandid and product.prodid = prodtype.prodid;

UPDATE product,sales
SET product.stock = product.stock-sales.qty
WHERE product.pid = sales.pid;

SET SQL_SAFE_UPDATES = 0;

select product.pid,prod_n,prod_type,brand_n,stock,selling_p,(stock*selling_p) as worth,v_name
from product,prodtype,brand,vendors
where product.prodid = prodtype.prodid and product.brandid = brand.brandid and product.vendorid = vendors.vendorid;

insert into due(name,address,phone,due,paytime)
select customername,address,phone,price*qty,date
from sales,product
where product.pid = sales.pid and status = "Due"
order by salesid desc limit 1;

select * 
from expense;

select brand.brandid,brand.brand_n,sum(stock) as products,sum(stock*selling_p) as worth,v_name
from product,vendors,brand
where product.brandid = brand.brandid and product.vendorid = vendors.vendorid 
group by v_name;

select salesid,prod_n,customername,prod_type,brand_n,sales.qty,product.stock,selling_p,(selling_p*qty)as total, (price-cost_p) as profit,status,expense from product,sales,brand,prodtype
    where product.pid = sales.pid and product.brandid= brand.brandid and product.prodid = prodtype.prodid;

select customername,address,phone,(qty*price) as total from sales where status = "Due" order by qty*price desc;

select date(now());

select prod_n,prod_type,sales.price,status from sales,product,prodtype,brand where product.pid = sales.pid and product.prodid = prodtype.prodid and product.brandid = brand.brandid and 1 >= all (SELECT ABS(WEEK(date(now()))-WEEK(sales.date)) from sales);

SELECT ABS(WEEK(date(now()))-WEEK("2021/07/30")) from sales;

select product.pid,prod_n,prod_type,brand_n,stock,selling_p,(stock*selling_p) as worth,v_name
    from product,prodtype,brand,vendors
    where product.prodid = prodtype.prodid and product.brandid = brand.brandid and product.vendorid = vendors.vendorid;
    
    select count(salesid) as salescount from sales,product,prodtype,brand where product.pid = sales.pid and product.prodid = prodtype.prodid and product.brandid = brand.brandid and 1 >= all 
    (SELECT WEEK(date(now()))-WEEK(sales.date) from sales) or 0>all 
    (SELECT WEEK(date(now()))-WEEK(sales.date) from sales);
    
    select prod_n,prod_type,qty,qty*sales.price as total,status from sales,product,prodtype,brand 
    where product.pid = sales.pid and product.prodid = prodtype.prodid and product.brandid = brand.brandid and 1 >= all (SELECT WEEK(date(now()))-WEEK(sales.date) from sales) or 0>all 
    (SELECT WEEK(date(now()))-WEEK(sales.date) from sales);
    
    
    select count(salesid) from sales,product,prodtype,brand 
    where product.pid = sales.pid and product.prodid = prodtype.prodid and product.brandid = brand.brandid and 1 >= all (SELECT WEEK(date(now()))-WEEK(sales.date) from sales) or 0>all 
    (SELECT WEEK(date(now()))-WEEK(sales.date) from sales) order by qty desc
   ;