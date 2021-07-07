const product = require("../models/productModel");
const handleDate = (dataD) => {
  let data = new Date(dataD);
  let month = data.getMonth() + 1;
  let day = data.getDate();
  let year = data.getFullYear();
  if (day <= 9) day = "0" + day;
  if (month == 1) month = "Jan";
  else if (month == 2) month = "Feb";
  else if (month == 3) month = "Mar";
  else if (month == 4) month = "Apr";
  else if (month == 5) month = "May";
  else if (month == 6) month = "Jun";
  else if (month == 7) month = "Jul";
  else if (month == 8) month = "Aug";
  else if (month == 9) month = "Sept";
  else if (month == 10) month = "Oct";
  else if (month == 11) month = "Nov";
  else if (month == 12) month = "Dec";
  const postDate = day + "-" + month + "-" + year;
  return postDate;
};
exports.allproducts = (req, res) => {
  product.getAll((err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occured in allproducts function",
      });
    } else {
      let top = data[0];
      let count = data[1];
      let due = data[2];
      let topselling = data[3];
      let topsellingcounter = 0;
      let stock = data[4].length;
      let totalsales = data[5];

      let forchart = data[6];
      let forchart2 = data[7];
      let salesChart = [0, 0, 0, 0];
      let profitChart = [0, 0, 0, 0];
      let todaysales = 0;
      let curDate = new Date();
      let sellingCount = 0;
      curDate = handleDate2(curDate);

      for (let i = 0; i < count.length; i++) {
        let d1 = new Date(curDate);
        let d2 = new Date(count[i].issuetime);
        if (diff_weeks(d1, d2) <= 1) {
          sellingCount++;
        }
      }

      for (let i = 0; i < forchart.length; i++) {
        forchart[i].issuetime = handleDate2(forchart[i].issuetime);
        let d1 = new Date(curDate);
        let d2 = new Date(forchart[i].issuetime);
        if (diff_weeks(d1, d2) > 3 && diff_weeks(d1, d2) <= 4) {
          salesChart[0] = salesChart[0] + forchart[i].total;
        } else if (diff_weeks(d1, d2) > 2 && diff_weeks(d1, d2) <= 3) {
          salesChart[1] = salesChart[1] + forchart[i].total;
        } else if (diff_weeks(d1, d2) > 1 && diff_weeks(d1, d2) <= 2) {
          salesChart[2] = salesChart[2] + forchart[i].total;
        } else if (diff_weeks(d1, d2) <= 1) {
          salesChart[3] = salesChart[3] + forchart[i].total;
        }
      }

      for (let i = 0; i < forchart2.length; i++) {
        forchart2[i].issuetime = handleDate2(forchart2[i].issuetime);
        let d1 = new Date(curDate);
        let d2 = new Date(forchart2[i].issuetime);
        if (diff_weeks(d1, d2) > 3 && diff_weeks(d1, d2) <= 4) {
          profitChart[0] = profitChart[0] + forchart2[i].profit;
        } else if (diff_weeks(d1, d2) > 2 && diff_weeks(d1, d2) <= 3) {
          profitChart[1] = profitChart[1] + forchart2[i].profit;
        } else if (diff_weeks(d1, d2) > 1 && diff_weeks(d1, d2) <= 2) {
          profitChart[2] = profitChart[2] + forchart2[i].profit;
        } else if (diff_weeks(d1, d2) <= 1) {
          profitChart[3] = profitChart[3] + forchart2[i].profit;
        }
      }
      // console.log("Selling count : ", sellingCount);
      // console.log("chart: ", forchart);
      // console.log("chart2: ", forchart2);
      // console.log("Profit Chart: ", profitChart);
      // console.log("salesChart : ", salesChart);
      for (let i = 0; i < topselling.length; i++) {
        topselling[i].issuetime = handleDate2(topselling[i].issuetime);
        let d1 = new Date(curDate);
        let d2 = new Date(topselling[i].issuetime);
        if (diff_weeks(d1, d2) <= 1) {
          topsellingcounter++;
        }
        // console.log("Top Selling Counter: ", topsellingcounter);
      }
      for (let i = 0; i < totalsales.length; i++) {
        todaysales = todaysales + totalsales[i].total;
      }

      // console.log("Topselling length", topsellingcounter);
      for (let i = 0; i < due.length; i++) {
        due[i].paytime = handleDate(due[i].paytime);
      }
      // console.log("Count: ", count);
      // console.log("due: ", due);
      res.render("./pages/home", {
        top: top,
        count: sellingCount,
        due: due,
        topselling: topsellingcounter,
        stock: stock,
        todaysales: todaysales,
        salesChart: salesChart,
        profitChart: profitChart,
      });
    }
  });
};

const handleDate2 = (dataD) => {
  let data = new Date(dataD);
  let month = data.getMonth() + 1;
  let day = data.getDate();
  let year = data.getFullYear();
  const postDate = year + "-" + month + "-" + day;
  return postDate;
};
function diff_weeks(dt2, dt1) {
  var diff = (dt2.getTime() - dt1.getTime()) / 1000;
  diff /= 60 * 60 * 24 * 7;
  return Math.abs(Math.round(diff));
}
