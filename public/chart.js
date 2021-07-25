
var myChart1 = document.getElementById("myChart1").getContext("2d");
var myChart2 = document.getElementById("myChart2").getContext("2d");

Chart.defaults.global.defaultFontFamily = "comfortaa";
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = "#777";


var result = document.getElementById('mydiv').innerText;
result = result.split(",")
result = result.map(i=>Number(i));

var result2 = document.getElementById('mydiv2').innerText;
result2 = result2.split(",")
result2 = result2.map(i=>Number(i));

var head = "Sales:(৳)";
var head2 = "Profit:(৳)";
var txt1 = "Sales Report of the month";
var txt2 = "Profit Report of the month";
var lbl = ["1st week", "2nd week", "3rd week", "4th weeek"];
var cf = (ID, head,txt, result, label) => {
var newChart = new Chart(ID, {
type: "bar", // bar, horizontalBar, pie, line, doughnut, radar, polarArea
data: {
 labels: label,
 datasets: [
   {
     label: head,
     data: result,
     //backgroundColor:'green',
     backgroundColor: [
       "rgba(40, 75, 99, 0.9)",
       "rgba(152, 193, 217, 0.9)",
       "rgba(40, 75, 99, 0.9)",
       "rgba(152, 193, 217, 0.9)",
       "rgba(40, 75, 99, 0.9)",
       "rgba(152, 193, 217, 0.9)",
       "rgba(40, 75, 99, 0.9)",
     ],
     borderWidth: 1,
     borderColor: "#777",
     hoverBorderWidth: 3,
     hoverBorderColor: "#000",
   },
 ],
},
options: {
 title: {
   display: true,
   text: txt,
   fontSize: 20,
 },
 animations: {
 tension: {
   delay:10000,
   duration: 1000,
   easing: 'linear',
   from: 1,
   to: 0,
   loop: true
 }
},
 legend: {
   display: true,
   position: "right",
   labels: {
     fontColor: "#000",
   },
 },
 layout: {
   padding: {
     left: 50,
     right: 0,
     bottom: 0,
     top: 0,
   },
 },
 tooltips: {
   enabled: true,
 },
},
});
};

var massPopChart3 = cf(myChart1, head,txt1, result, lbl);
var massPopChart1 = cf(myChart2, head2,txt2, result2, lbl);

