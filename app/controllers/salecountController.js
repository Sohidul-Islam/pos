const salesCount = require("../models/salescountModel");
exports.allsalesCount = (req, res) => {
  if(req.session.loggedin!=true){
    res.redirect("/");
  }
  salesCount.salesCount((err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occured in allproducts function",
      });
    } else {
      var curDate = new Date();
      curDate = handleDate(curDate);

      var tmp = [],
        j = 0;
      for (let i = 0; i < data.length; i++) {
        console.log("current date", curDate);

        data[i].issuetime = handleDate(data[i].issuetime);
        dt1 = new Date(curDate);
        dt2 = new Date(data[i].issuetime);
        // console.log("Issuetime", data[i].issuetime);
        // console.log("Difference week", diff_weeks(dt1, dt2));
        if (diff_weeks(dt1, dt2) <= 1) {
          tmp[j] = data[i];
          j++;
          console.log("in if Difference week", diff_weeks(dt1, dt2));
        }
      }

      console.log("Temp : ", tmp);
      res.render("./pages/salescount", {
        result: tmp,
        role: req.session.username
      });
    }
    console.log(data);
  });
};
function diff_weeks(dt2, dt1) {
  var diff = (dt2.getTime() - dt1.getTime()) / 1000;
  diff /= 60 * 60 * 24 * 7;
  return Math.abs(Math.round(diff));
}
const handleDate = (dataD) => {
  let data = new Date(dataD);
  let month = data.getMonth() + 1;
  let day = data.getDate();
  let year = data.getFullYear();
  const postDate = year + "-" + month + "-" + day;
  return postDate;
};
