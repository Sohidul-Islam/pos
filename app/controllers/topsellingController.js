const topSeller = require("../models/topsellingModel");
exports.FindAlltopSelling = (req, res) => {
  topSeller.topselling((err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occured in allproducts function",
      });
    } else {
      let curDate = new Date();
      curDate = handleDate2(curDate);
      let tmp = [],
        j = 0;
      for (let i = 0; i < data.length; i++) {
        data[i].issuetime = handleDate2(data[i].issuetime);
        let d1 = new Date(curDate);
        let d2 = new Date(data[i].issuetime);
        if (diff_weeks(d1, d2) <= 1) {
          tmp[j] = data[i];
          j++;
        }
      }
      res.render("./pages/topselling", {
        result: tmp,
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
