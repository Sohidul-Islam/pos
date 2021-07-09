select prodtype.prodid,count(prod_n),prod_type,stock  from prodtype left join product
on prodtype.prodid=product.prodid 
left join brand
on product.brandid = brand.brandid
left join vendors
on product.vendorid = vendors.vendorid

group by prodid
order by prodid
;


select * from prodtype,brand,product where product.prodid = prodtype.prodid and product.brandid = brand.brandid and prodtype.prodid = 10;

select prodtype.prodid,count(prod_n) as variant,prod_type,sum(stock) as   from prodtype left join product
    on prodtype.prodid=product.prodid 
    left join brand
    on product.brandid = brand.brandid
    left join vendors
    on product.vendorid = vendors.vendorid
    group by prodid
    order by prodid
    ;
    
select brand.brandid,brand.brand_n,sum(stock) as products,sum(stock*selling_p) as worth
    from brand left join product
    on product.brandid = brand.brandid  
    left join vendors
   on product.vendorid = vendors.vendorid 
    group by brandid;
    
    
    select prodtype.prodid,prod_type,prod_n,brand_n from prodtype left join product
    on prodtype.prodid=product.prodid 
    left join brand
    on product.brandid = brand.brandid

    ;