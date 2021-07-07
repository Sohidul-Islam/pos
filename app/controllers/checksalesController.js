const checksales = require("../models/checksalesModel");
exports.allsales = (req, res) => {
  checksales.checkallsales((err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occured in allproducts function",
      });
    } else {
      for (let i = 0; i < data.length; i++) {
        if (data[i].stock <= 0) data[i].stock = "out of stock";
        else if (data[i].status == "Due") data[i].profit = "Pending";
        console.log("Stock ", data[i].stock);
        console.log("Stock ", data[i].profit);
        data[i].issuetime = handleDate(data[i].issuetime);
        data[i].date = handleDate(data[i].date);
      }
      res.render("./pages/sales", {
        result: data,
      });
    }
  });
};

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
