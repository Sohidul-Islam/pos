const sql = require("./db");

const brands = function (brand) {
  this.brand_n = brand.brand_n;
};
//here we create constructor as brands

brands.allbrands = (result) => {
  sql.query(
    `select brand.brandid,brand_n,count(product_n) as stock,stock as total,count(product_n)*cost_p as worth
    from product,brand
    where product.brandid = brand.brandid
    group by product.brandid;`,
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
