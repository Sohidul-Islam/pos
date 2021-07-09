const sql = require("./db");

const brands = function (brand) {
  this.brand_n = brand.brand_n;
};
//here we create constructor as brands

brands.allbrands = (result) => {
  sql.query(
    `select brand.brandid,brand.brand_n,sum(stock) as products,sum(stock*selling_p) as worth
    from brand left join product
    on product.brandid = brand.brandid  
    left join vendors
   on product.vendorid = vendors.vendorid 
    group by brandid;`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      console.log("product: ", res);
      result(null, res);
    }
  );
};

module.exports = brands;
