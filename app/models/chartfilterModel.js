const sql = require("./db");

const chart = function (payment) {
    this.issuetime = payment.issuetime;
    this.price = payment.price;
  };


  chart.chartYear = (year,result) => {
    sql.query(
      ` select month(issuetime) as month,sum(price) as total from  sales  where year(issuetime) = "${year}" group by MONTH(issuetime);`,
    
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
  
        console.log("Year chart : ", res);
        result(null, res);
      }
    );
  };


  chart.chartYearMonth = (month,result) => {
    //   issuetime = issuetime.split("-")
    var year = month.split("-");
    var month = year[1];
    year = year[0];
    console.log(year);
      console.log(month);
      
    sql.query(
      `  select WEEK(issuetime) as week,sum(price) as total from  sales  where year(issuetime) =  "${year}" and MONTH(issuetime) = "${month}" group by WEEK(issuetime);`,
    
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
  
        console.log("Year Month chart : ", res);
        result(null, res);
      }
    );
  };

  chart.piechart = (result) => {  
    sql.query(
      `   select prod_type,count(prod_n) as sales from  sales,product,prodtype  where MONTH(issuetime) = MONTH(CURDATE()) and product.pid = sales.pid and prodtype.prodid = product.prodid group by prod_type;
      select brand_n,count(prod_n) as sales from  sales,product,brand  where MONTH(issuetime) = MONTH(CURDATE()) and product.pid = sales.pid and brand.brandid = product.brandid group by brand_n;`,
    
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
        
  
        console.log("Pie: ", res);
        result(null, res);
      }
    );
  };

  module.exports = chart;