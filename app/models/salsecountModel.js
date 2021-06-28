const sql = require("./db");

const salescount = function (brand) {
  this.brand_n = brand.brand_n;
};

salescount.allsalescount = (result) => {
  sql.query(
    `select vendors.vendorid,v_name,phone,count(product_n) as products,sum(stock) as total,count(product_n)*cost_p as worth
    from vendors,product
    where product.vendorid = vendors.vendorid
    group by vendorid;`,
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

module.exports = salescount;
