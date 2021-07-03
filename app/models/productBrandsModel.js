const sql = require("./db");

const brands = function (brand) {
  this.brand_n = brand.brand_n;
};
//here we create constructor as brands

brands.allbrands = (result) => {
  sql.query(
    `select brand.brandid,brand.brand_n,sum(stock) as products,sum(stock*selling_p) as worth,v_name
    from product,vendors,brand
    where product.brandid = brand.brandid and product.vendorid = vendors.vendorid 
    group by v_name`,
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
