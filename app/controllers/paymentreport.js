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
      for (let i = 0; i < data.length; i++) {
        data[i].date = handleDate(data[i].date);
      }
      res.render("./pages/payment-reports", {
        data,
      });
    }
    console.log("Updated data : ", data);
  });
};

var d2 = handleDate("2011-02-20 17:16:00");
console.log("Date: ", d2);
