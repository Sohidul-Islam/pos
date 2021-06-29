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
alter table product
add column des varchar(200) default null;
create table vendors(
vendorid int auto_increment,
v_name varchar(100),
phone varchar(100),
primary key(vendorid)
);
alter table product
add column des varchar(200) default null;

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
tid int auto_increment,
des varchar(200),
account varchar(200),
customerid int,
date datetime,
price int ,
primary key(tid),
foreign key(customerid) references customers(customerid)
);

create table due(
dueid int auto_increment,
customerid int,
paytime datetime,
primary key(dueid),
foreign key(customerid) references customers(customerid)
);

create table users(
userid int auto_increment,
name varchar(50),
address varchar(200),
phone varchar(50),
email varchar(200),
pass varchar(100),
primary key(userid)
);


insert into prodtype(prod_type)
values('Speakers'),
('Mouse'),
('Mousepad'),
('Display Monitors'),
('Keyboard'),
('Cable Chargers'),
('Power supplies');


insert into brand(brand_n)
values('HP'),
('DELL'),
('Samsung'),
('ASUS'),
('Audionic'),
('Nokia'),
('MSI'),
('GIGA BYTE');


insert into vendors(v_name,phone)
values('Haidar Abbas',"01854107684"),
('Joynal Abedin',"01874147694"),
('Karim Uddin',"01874157672");
