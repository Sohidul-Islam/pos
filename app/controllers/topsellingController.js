const topSeller = require("../models/topsellingModel");
exports.FindAlltopSelling = (req, res) => {
  if(req.session.loggedin!=true){
    res.redirect("/");
  }
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
        // console.log("original top sellign",data);
      for (let i = 0; i < data.length; i++) {
        data[i].issuetime = handleDate2(data[i].issuetime);
        let d1 = new Date(curDate);
        let d2 = new Date(data[i].issuetime);
        // console.log(`${curDate} and ${data[i].issuetime}`,diff_weeks(d1, d2));
        if (diff_weeks(d1, d2) <= 1) {
          console.log(`Data ==> ${i} ${data[i]}`);
          tmp[j] = data[i];
          j++;
        }
      }
      for(let i = 0 ; i<tmp.length ; i++){
        for(let j = i+1; j<tmp.length; j++){
          if(tmp[i].pid===tmp[j].pid){
            tmp[i].qty = tmp[i].qty+tmp[j].qty;
            tmp.splice(j, 1);
          }
        }
      }
      console.log("Temporary top sellign",tmp);
      res.render("./pages/topselling", {
        result: tmp,
        role: req.session.username
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
