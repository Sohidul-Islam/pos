select * from brand;
select * from product;
select * from sales;
select * from expense;
select * from vendors;
select * from due;

truncate table due;
truncate table sales;
truncate table expense;
truncate table customers;

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
   
   SELECT abs(WEEK(date(now()))-WEEK('2021-06-08'));
   SELECT abs(WEEK(date(now()))-WEEK('2021-06-16'));
   SELECT abs(WEEK(date(now()))-WEEK('2021-06-23'));
   SELECT abs(WEEK(date(now()))-WEEK('2021-06-24'));
   
   
   #last week data.
   select prod_n,prod_type,qty,qty*sales.price as total,status from sales,product,prodtype,brand 
    where product.pid = sales.pid and product.prodid = prodtype.prodid and product.brandid = brand.brandid and
    1 >= all (SELECT abs(WEEK(date(now()))-WEEK(sales.issuetime)) from sales);
   
   SELECT abs(WEEK(date(now()))-WEEK(sales.issuetime)) from sales;
   
   #short items
   select prod_n,prod_type,stock,selling_p, stock*selling_p as worth from product join prodtype join brand
   on product.prodid = prodtype.prodid and product.brandid = brand.brandid
   where product.stock <=10;
   
      select prod_n,prod_type,qty,selling_p, qty*selling_p as total,date from product join prodtype join brand join sales
   on sales.pid =product.pid and product.prodid = prodtype.prodid and product.brandid = brand.brandid
   where sales.date = CURDATE();

select prod_n,prod_type,qty,qty*sales.price as total,status from sales,product,prodtype,brand 
    where product.pid = sales.pid and product.prodid = prodtype.prodid and product.brandid = brand.brandid and 1 >= all (SELECT abs(WEEK(date(now()))-WEEK(sales.issuetime)) from sales);
    
    select count(salesid) as salescount from sales,product,prodtype,brand 
    where product.pid = sales.pid and product.prodid = prodtype.prodid and product.brandid = brand.brandid and 1 >= all (SELECT abs(WEEK(date(now()))-WEEK(sales.issuetime)) from sales);
    
    select prod_n,prod_type,qty,selling_p, qty*selling_p as total,date from product join prodtype join brand join sales
   on sales.pid =product.pid and product.prodid = prodtype.prodid and product.brandid = brand.brandid
   where sales.date = CURDATE();
   
select sum(qty*(price-product.cost_p)) as profit,issuetime from sales,product where sales.pid = product.pid group by issuetime;

select pid,prod_n,prod_type,brand_n,stock,cost_p,selling_p
from product,prodtype,brand
where product.prodid = prodtype.prodid and product.brandid = brand.brandid;

select pid,product.prodid,prod_type,prod_n,product.brandid,brand_n,product.vendorid,v_name from product,prodtype,brand,vendors 
where  product.brandid = brand.brandid and product.prodid = prodtype.prodid and product.vendorid = vendors.vendorid and pid = 2;

select pid,product.prodid,prod_type,prod_n,product.brandid,brand_n,product.vendorid,v_name,stock,cost_p,selling_p,des from product,prodtype,brand,vendors 
    where  product.brandid = brand.brandid and product.prodid = prodtype.prodid and product.vendorid = vendors.vendorid and pid = 2;
    
    
    select date_format(date,"%d/%m/%y") date,prod_n,price,status from sales,product where product.pid = sales.pid and  date_format(date,"%m") = "08";
    
    #this is for data filtering
    
    select date_format(date,'%m') months,sum(sales.price) as total from sales where date_format(date,'%Y') ='2021' group by date_format(date,'%m');
    
 select date_format(date,'%m') months,sum(sales.price) as total from sales where date_format(date,'%Y') ='2021' and date_format(date,'%m') ='07'  group by date_format(date,'%m');
 
 select month(date) as month,sum(price) from  sales  where year(date) = "2021" group by MONTH(date);
 select WEEK(date) as week,sum(price) from  sales  where year(date) = "2021" and MONTH(date) ='7' group by WEEK(date);
 

 select prod_type,count(prod_n) from  sales,product,prodtype  where MONTH(issuetime) = MONTH(CURDATE()) and product.pid = sales.pid and prodtype.prodid = product.prodid group by prod_n;
 select brand_n,count(prod_n) from  sales,product,brand  where MONTH(issuetime) = MONTH(CURDATE()) and product.pid = sales.pid and brand.brandid = product.brandid group by brand_n;

