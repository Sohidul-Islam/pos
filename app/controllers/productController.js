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
      let count = data[1][0];
      let top = data[0];
      let due = data[2];
      let topselling = data[3].length;
      console.log("Topselling length", topselling);
      for (let i = 0; i < due.length; i++) {
        due[i].paytime = handleDate(due[i].paytime);
      }
      console.log("Count: ", count);
      console.log("due: ", due);
      res.render("./pages/home", {
        top: top,
        count: count,
        due: due,
        topselling: topselling,
      });
    }
  });
};
