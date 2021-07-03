// var Chart = require("chart.js");
const product = require("../models/productModel");
// var result = [];

exports.chartJs = (req, res) => {
  product.getAll((err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occured in allproducts function",
      });
    } else {
      var lbl = [
        "'1st week'",
        "'2nd week'",
        "'3rd week'",
        "'4th week'",
        "'5th week'",
      ];
      var tmp = data[0];
      var solve = [];
      for (let i = 0; i < tmp.length; i++) {
        console.log("chartJS: ", tmp[i].total);
        solve[i] = tmp[i].total;
      }
      console.log("Result: ", solve);
      console.log("Labele: ", lbl);
      data = chart(lbl, solve);
    }
    res.send(data);
  });
};

chart = (lbl, result) => {
  let _resLine = "<h1>Ereignisse: " + result + "</h1>" + lbl;
  console.log("show chart:");
  console.log(_resLine);

  _html =
    "<script src='https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart.min.js'></script>" +
    "<canvas id='bar-chart' width='800' height='450'></canvas>" +
    "<script>" +
    "var logChart = new Chart(document.getElementById('bar-chart'), {" +
    "type: 'bar'," +
    "data: {" +
    "labels: [" +
    lbl +
    "]" +
    "," +
    "datasets: [" +
    "{" +
    "label: 'Aufrufe'," +
    "backgroundColor: ['rgba(40, 75, 99, 0.9)', 'rgba(152, 193, 217, 0.9)','rgba(40, 75, 99, 0.9)','rgba(152, 193, 217, 0.9)','rgba(40, 75, 99, 0.9)','rgba(152, 193, 217, 0.9)']," +
    "data: [" +
    result +
    "]" +
    "}" +
    "]" +
    "}," +
    "options: {" +
    "legend: { display: false }," +
    "title: {" +
    "display: true," +
    "text: 'Sales Report of the week'" +
    "}" +
    "}" +
    "});" +
    "</script>";
  return _html;
};
