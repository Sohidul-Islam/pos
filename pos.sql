create table prodtype(
prodid int auto_increment,
prod_type varchar(100),
primary key(prodid)
);

create table brand(
brandid int auto_increment,
brand_n varchar(100),
primary key(brandid)
);


create table product(
pid int auto_increment,
prod_n varchar(100),
prodid int,
brandid int,
stock int,
cost_p int,
selling_p int,
vendorid int,
primary key(pid),
foreign key(prodid) references prodtype(prodid),
foreign key(brandid) references brand(brandid),
foreign key(vendorid) references vendors(vendorid)
);

create table vendors(
vendorid int auto_increment,
v_name varchar(100),
phone varchar(100),
primary key(vendorid)
);

create table customers(
customerid int auto_increment,
name varchar(100),
address varchar(100),
phone varchar(100),
primary key(customerid)
);

create table sales(
salesid int auto_increment,
customerid int,
pid int,
qty int,
status varchar(20) default 'due',
price int,
date datetime,
primary key(salesid),
foreign key(pid) references product(pid),
foreign key(customerid) references customers(customerid)
);

create table sales(
salesid int auto_increment,
customerid int,
pid int,
qty int,
status varchar(20) default 'due',
price int,
date datetime,
primary key(salesid),
foreign key(pid) references product(pid),
foreign key(customerid) references customers(customerid)
);

create table payment(

);
