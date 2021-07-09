const paymentinfo = require("../models/paymentreportModel");
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
exports.paymentinfo = (req, res) => {
  paymentinfo.paymentDetails((err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || "Some error occured in inventoryReport function",
      });
    } else {
      var sum1 = 0;
      var sum2 = 0;
      var sum3 = 0;
      var sum4 = 0;
      var curdate = new Date();
      curdate = new Date(curdate);
      for (let i = 0; i < data.length; i++) {
        data[i].date = new Date(data[i].date);
        console.log(
          diff_weeks(data[i].date, curdate),
          " && ",
          data[i].price,
          " Date ",
          data[i].date
        );
        if (
          diff_weeks(data[i].date, curdate) <= 1 &&
          data[i].t_type == "Income"
        ) {
          sum1 = sum1 + data[i].price;
          console.log(sum1);
        } else if (data[i].t_type == "Expense") {
          sum2 = sum2 + data[i].price;
        }

        data[i].date = handleDate(data[i].date);
        if (data[i].t_type != "Expense") sum3 = sum3 + data[i].price;
      }
      console.log("Income: ", sum1);
      console.log("expense: ", sum2);
      console.log("Total: ", sum3);
      sum4 = sum3 - sum2;
      console.log("Available : ", sum4);
      res.render("./pages/payment-reports", {
        data,
        sum1,
        sum2,
        sum3,
        sum4,
      });
    }
    // console.log("Updated data : ", data);
  });
};

// var d2 = handleDate("2011-02-20 17:16:00");
// console.log("Date: ", d2);

function diff_weeks(dt2, dt1) {
  var diff = (dt2.getTime() - dt1.getTime()) / 1000;
  diff /= 60 * 60 * 24 * 7;
  return Math.abs(Math.round(diff));
}
