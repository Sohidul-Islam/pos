const sql = require("./db");

const vendors = function (brand) {
  this.brand_n = brand.brand_n;
};

vendors.allvendors = (result) => {
  sql.query(
    `select vendors.vendorid,v_name,phone,sum(stock) as products,sum(stock*selling_p) as worth
    from vendors left join product
    on product.vendorid = vendors.vendorid
    group by v_name;`,
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

module.exports = vendors;
