const product = require("../models/productModel");
const nodemailer = require("nodemailer");
const Products = require("../models/productModel");

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
      console.log("Due: ", due);
      for (let i = 0; i < due.length; i++) {
        due[i].paytime = handleDate(due[i].paytime);

        // console.log(due[i].paytime);
      }
      // chart 1
      for (let i = 0; i < forchart.length; i++) {
        forchart[i].issuetime = handleDate2(forchart[i].date);
        let d1 = new Date(curDate);
        let d2 = new Date(forchart[i].date);

        if (diff_weeks(d1, d2) > 3 && diff_weeks(d1, d2) <= 4) {
          salesChart[0] = salesChart[0] + forchart[i].total; //1st week of the graph
        } else if (diff_weeks(d1, d2) > 2 && diff_weeks(d1, d2) <= 3) {
          salesChart[1] = salesChart[1] + forchart[i].total; //2nd week of the graph
        } else if (diff_weeks(d1, d2) > 1 && diff_weeks(d1, d2) <= 2) {
          salesChart[2] = salesChart[2] + forchart[i].total; //3rd week of the graph
        } else if (diff_weeks(d1, d2) <= 1) {
          salesChart[3] = salesChart[3] + forchart[i].total; //4th week of the graph
        }
      }

      for (let i = 0; i < forchart2.length; i++) {
        forchart2[i].issuetime = handleDate2(forchart2[i].issuetime);
        let d1 = new Date(curDate);
        let d2 = new Date(forchart2[i].issuetime);

        if (diff_weeks(d1, d2) > 3 && diff_weeks(d1, d2) <= 4) {
          profitChart[0] = profitChart[0] + forchart2[i].profit; //1st week of profit
        } else if (diff_weeks(d1, d2) > 2 && diff_weeks(d1, d2) <= 3) {
          profitChart[1] = profitChart[1] + forchart2[i].profit; //2nd week of profit
        } else if (diff_weeks(d1, d2) > 1 && diff_weeks(d1, d2) <= 2) {
          profitChart[2] = profitChart[2] + forchart2[i].profit; //3rd week of profit
        } else if (diff_weeks(d1, d2) <= 1) {
          profitChart[3] = profitChart[3] + forchart2[i].profit; //4th week of profit
        }
      }

      for (let i = 0; i < topselling.length; i++) {
      
          topsellingcounter++;
      
      }
      for (let i = 0; i < totalsales.length; i++) {
        todaysales = todaysales + totalsales[i].total;
      }

      // console.log("chart 1; ", salesChart);
      // console.log("chart 2; ", profitChart);
      main();
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

exports.updatePayment = (req, res) => {
  product.updatepaymentbyid(req.params.dueid, (err, data) => {
    if (err) {
      res.status(500).send("Some error for updating payment");
    } else {
      res.redirect("/");
    }
  });
};
// console.log("Status: ", status_data);
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

function DayDifference(date2, date1) {
  var date1 = new Date(date1);
  var date2 = new Date(date2);
  var Difference_In_Time = date2.getTime() - date1.getTime();

  // To calculate the no. of days between two dates
  var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
  return Difference_In_Days;
}

function main() {
  let curDate = new Date();
  curDate = handleDate2(curDate);
  product.getbyStatus((err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occured in allproducts function",
      });
    } else {
      
      (async () => {
        let transporter = nodemailer.createTransport({
          service: "gmail",
          port: 587,
          secure: false, // true for 465, false for other ports
          auth: {
            user: "pointofsale.system2021@gmail.com", // generated ethereal user
            pass: "shufol01866922658", // generated ethereal password
          },
        });
    
          day10 = data[0];
      day2 = data[1];
      // console.log("Day 2 ",day2);
      // console.log("Day 10",day10);
      for(let i = 0,j=0 ; i<day10.length,j<day2.length ; i++,j++){
        console.log("Pay Time",day10[i].paytime);
        if (DayDifference(handleDate2(day10[i].paytime), curDate) <=10 && DayDifference(handleDate2(day10[i].paytime), curDate) >2) {
        let info = await transporter.sendMail({
          from: "pointofsale.system2021@gmail.com", // sender address
          to: `${day10[i].email}`, // list of receivers
          subject: "POS DUE WARNING ⚠️", // Subject line

          html: `<h4 style="font-size: 20px">Hey <span style="color: #007f5f;">${
            day10[i].name
          }</span></h4>
    <h4 style="font-size: 16px; color:#ee6c4d ">You Have Some Due Please Pay The Dues Within ${handleDate(
      day10[i].paytime
    )}</h4>
    <h4 style="font-size: 16px; color:#d62828 "> (${DayDifference(handleDate2(day10[i].paytime), curDate)
    } Days Are Remaining)</h4>
    <ul>
      <li><strong>Product:</strong> ${day10[i].prod_n}</li>
      <li><strong>Due:</strong> &#2547;${day10[i].due}</li>
      <li><strong>Promise Date:</strong> ${handleDate(day10[i].paytime)}</li>
    </ul>`, // html body
        });

        if (info.messageId) {
          product.updateStatusbyid(day10[i].dueid, (err, data) => {
            if (err) {
              res.status(500).send({
                message:
                  err.message ||
                  "Some error occured in allproducts function",
              });
            } else {
              console.log("Status Updated");
            }
          });
        }
 
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      }
      else  if (DayDifference(handleDate2(day2[j].paytime), curDate)<=2) {
        let info = await transporter.sendMail({
          from: "pointofsale.system2021@gmail.com", // sender address
          to: `${day2[j].email}`, // list of receivers
          subject: "POS DUE WARNING ⚠️", // Subject line

          html: `<h4 style="font-size: 20px">Hey <span style="color: #007f5f;">${
            day2[j].name
          }</span></h4>
    <h4 style="font-size: 16px; color:#ee6c4d ">You Have Some Due Please Pay The Dues Within ${handleDate(
      day2[j].paytime
    )}</h4>
    <h4 style="font-size: 16px; color:#d62828 "> (${DayDifference(handleDate2(day2[j].paytime), curDate)
    } Days Are Remaining)</h4>
    <ul>
      <li><strong>Product:</strong> ${day2[j].prod_n}</li>
      <li><strong>Due:</strong> &#2547;${day2[j].due}</li>
      <li><strong>Promise Date:</strong> ${handleDate(day2[j].paytime)}</li>
    </ul>`, // html body
        });

        if (info.messageId) {
          product.updateStatusbyid2(day2[j].dueid, (err, data) => {
            if (err) {
              res.status(500).send({
                message:
                  err.message ||
                  "Some error occured in allproducts function",
              });
            } else {
              console.log("Status Updated");
            }
          });
        }
        // console.log(info);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      }
    }
         
        
      })().catch((err) => {
        console.error(err);
      });
    }
  });

  // send mail with defined transport object

  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

exports.main2 = (req, res) => {

  let curDate = new Date();
  curDate = handleDate2(curDate);

  product.getbyDuid(req.params.dueid, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Customer with id ${req.params.dueid}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Customer with pid " + req.params.dueid,
        });
      }
    } else {
      data = data[0];
      // console.log("Due: ", data.dueid);
      (async () => {
        let transporter = nodemailer.createTransport({
          service: "gmail",
          port: 587,
          secure: false, // true for 465, false for other ports
          auth: {
            user: "pointofsale.system2021@gmail.com", // generated ethereal user
            pass: "shufol01866922658", // generated ethereal password
          },
        });

        // console.log("IN main 2 : ", data);

        let info = await transporter.sendMail({
          from: "pointofsale.system2021@gmail.com", // sender address
          to: `${data.email}`, // list of receivers
          subject: "POS DUE WARNING ⚠️", // Subject line

          html: `<h4 style="font-size: 20px">Hey <span style="color: #007f5f;">${
            data.name
          }</span></h4>
        <h4 style="font-size: 16px; color:#ee6c4d ">You Have Some Due Please Pay The Dues Within ${handleDate(
          data.paytime
        )}</h4>
        <h4 style="font-size: 16px; color:#d62828 "> (${DayDifference(handleDate2(data.paytime), curDate)
        } Days Are Remaining)</h4>
        <ul>
          <li><strong>Product:</strong> ${data.prod_n}</li>
          <li><strong>Due:</strong> &#2547;${data.due}</li>
          <li><strong>Promise Date:</strong>${handleDate(data.paytime)}</li>
        </ul>`, // html body
        });

        // console.log("info: ", info);
        // console.log(info);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      })().catch((err) => {
        console.error(err);
      });

      res.redirect("back");
    }
  });
};
