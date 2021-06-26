#payment table

create table payment(
tid varchar(100), #transaction id
t_type varchar(200),
des varchar(200),
account varchar(35),
customerid int, #foreing key
date datetime,
price int,
primary key(tid),
foreign key(customerid) references customers(id)
);
alter table payment
add column price int default 0;

create table due(
dueid int auto_increment, #due id
customerid int,
paydate datetime,
amount int,
primary key(dueid),
foreign key(customerid) references customers(id)
);

insert into due(customerid,paydate,amount)
value(3,'2021-07-05',5000);

#Customers table

create table customers(
id int auto_increment,
name varchar(35),
address varchar(200),
phone varchar(20),
primary key(id)
);

#Sales table

create table sales(
salesid int auto_increment,
customerid int,
pid int,
brandid int,
qty int,
status varchar(20)
,
FOREIGN KEY (brandid) REFERENCES brand(brandid),
FOREIGN KEY (customerid) REFERENCES customers(id),
FOREIGN KEY (pid) REFERENCES product(pid),
primary key(salesid)
);

#add a column 'status'
alter table sales
modify column status varchar(20) default 'Due';

#product table
create table product(
pid int auto_increment,
product_n varchar(150),
product_type varchar(150),
brandid int,
stock int,
cost_p int,
vendorid int,
FOREIGN KEY (brandid) REFERENCES brand(brandid),
FOREIGN KEY (vendorid) REFERENCES vendors(vendorid),
primary key (pid)
);

#brand table

create table brand(
brandid int auto_increment,
brand_n varchar(150),
qty int, #quantity
primary key (brandid)
);

#vendor table

create table vendors(
vendorid int auto_increment,
v_name varchar(150),
phone varchar(20),
primary key (vendorid)
);


#insert into payment table

insert into payment(tid,t_type,des,account,customerid,date,price)
values(187,'income',"product total price","cash register",2,CURRENT_TIMESTAMP,2900),
(754,'expense',"Dinner","Hotel Al Fahim",1,CURRENT_TIMESTAMP,300);

#insert into customers table

insert into customers(name,address,phone)
values('Sohidul Islam',"Feni",'01854107699'),
('Rahim Ullah',"Dhaka",'01754507697'),
('Nusrat Jahan',"Barisal",'01259147579');

alter table sales
add column date datetime default CURRENT_TIMESTAMP;

#insert into sales table
insert into sales(customerid,pid,brandid,qty)
values(2,1,1,3),
(1,3,3,1),
(3,1,1,2),
(3,2,2,4);

#insert into product table
insert into product(product_n,product_type,brandid,stock,cost_p,vendorid)
values('A4-Tech Mouse M60','Mouse',1,9,2000,1),
('vivobook','Laptop',2,7,1000,3),
('Asus notebook','Laptop',3,18,3000,2);


insert into product(product_n,product_type,brandid,stock,cost_p,vendorid)
values('HP 22fw','Monitor',5,9,11500,1);

#insert into brand table

insert into brand(brand_n,qty,worth)
values('Audionic',21,16000),
('DELL',3,11500),
('ASUS',16,8600);

insert into brand(brand_n,qty)
values('HP',8);

#insert into vendors table

insert into vendors(v_name,phone)
values('Aness Ahmed','01854107699'),
('Faisal Hayat','01854107096'),
('Haider Abbass','01894107689');


select vendors.vendorid,v_name,phone,count(product_n) as products,sum(stock) as total,count(product_n)*cost_p
from vendors,product
where product.vendorid = vendors.vendorid
group by vendorid;

#inventory report
select product.pid, product_n, product.product_type,brand.brand_n,product.stock,product.cost_p,(product.stock*product.cost_p) as total,vendors.v_name
from product,brand,vendors
where  brand.brandid = product.brandid and vendors.vendorid = product.vendorid;

select *
from product,brand,vendors
where  product.brandid = brand.brandid and vendors.vendorid = product.vendorid;

#check sales
select *
from sales,customers,product
where sales.pid = product.pid and sales.customerid=customers.id ;

select customers.name, product.product_n, product.product_type, product.brandid,sales.qty,(sales.qty*product.cost_p) as total,vendors.v_name,sales.status
from sales,customers,product,brand,vendors
where sales.customerid=customers.id and product.pid=sales.pid and brand.brandid = sales.brandid and vendors.vendorid = product.vendorid
order by sales.qty desc;


select pid, product_n, product_type,brand_n,product.stock as qty,cost_p,(product.stock*product.cost_p) as total,vendors.v_name
from product,brand,vendors
where  brand.brandid = product.brandid and vendors.vendorid = product.vendorid;

#Sales report

select customers.name, product.product_n, product.product_type,brand.brand_n,sales.qty,(sales.qty*product.cost_p) as total
from sales,customers,product,brand
where sales.customerid=customers.id and product.pid=sales.pid and brand.brandid = sales.brandid;

#top selling

select customers.name, product.product_n, product.product_type, product.brandid,sales.qty,(sales.qty*product.cost_p) as total,vendors.v_name,sales.status
from sales,customers,product,brand,vendors
where sales.customerid=customers.id and product.pid=sales.pid and brand.brandid = sales.brandid and vendors.vendorid = product.vendorid
order by sales.qty desc;

#total sales
select count(salesid) as total_sale
from sales,customers,product,brand
where sales.customerid=customers.id and product.pid=sales.pid and brand.brandid = sales.brandid;

#top selling with customers payment report
select customers.name, product.product_n, product.product_type, brand.brand_n,sales.qty,(sales.qty*product.cost_p) as total,vendors.v_name,sales.status
from sales,customers,product,brand,vendors
where sales.customerid=customers.id and product.pid=sales.pid and brand.brandid = sales.brandid and vendors.vendorid = product.vendorid
order by sales.qty desc;

#Customers Due
select customers.name,due.paydate,due.amount
from customers,due
where due.customerid = customers.id;

#payment report
select * 
from customers,payment
where customerid = payment.customerid;

#brand stock
select brand.brand_n,brand.qty,sum(brand.qty*product.cost_p)
from brand,product
where brand.brandid = product.brandid
group by brand.brand_n;

#update payment
UPDATE payment,sales
SET sales.status='Payment'
WHERE payment.customerid = sales.customerid ;

#update payment
UPDATE product,sales,customers,brand
SET product.stock=product.stock-sales.qty,
	brand.qty = product.stock-sales.qty
WHERE customers.id = sales.customerid ;

UPDATE product
SET product_type = 'Mouse & Pointing Devices'
WHERE product_type = "Mouse";



SET SQL_SAFE_UPDATES = 0;

select brand.brandid,brand_n,count(product_n) as stock,stock as total,count(product_n)*cost_p as worth
from product,brand
where product.brandid = brand.brandid
group by product.brandid;

select * from product,vendors;
select * from vendors;
select * from customers;
select * from payment;
select * from brand;
select * from sales;



drop table product;
drop table sales;
drop table payment;
drop table sales;
describe sales;
describe payment;