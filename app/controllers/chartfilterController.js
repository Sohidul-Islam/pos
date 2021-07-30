const chart = require("../models/chartfilterModel");

exports.chartFilter = (req, res) => {
        chart.piechart((err, data) => {
                if (err)
                        res.status(500).send({
                                message: err.message || "Some error occurred while creating the Customer.",
                        });
                else {
                        // console.log("chart data : ",data);
                        var chart1 = data[0];
                        var chart2 = data[1];
                        // console.log("chart 2",chart2);
                        // console.log("chart 1",chart1);

                        var chartdata =[];
                        var chartdata2 =[];
                        var chartlabel =[];
                        var chartlabel2 =[];
                        for(let i=0 ; i<chart1.length ; i++){
                                chartlabel[i]= chart1[i].prod_type;
                                chartdata[i]= chart1[i].sales;
                        }
                        for(let i=0 ; i<chart2.length ; i++){
                                chartlabel2[i]= chart2[i].brand_n;
                                chartdata2[i]= chart2[i].sales;
                        }
                        // console.log("chart data: ",chartdata);
                        // console.log("chart lable: ",chartlabel);
                        res.render('./pages/chartfilter',{
                                chartdata,
                                chartlabel,
                                chartdata2,
                                chartlabel2
                        });
       
                     }
        });
       
}

exports.chartFilterYearMonth = (req, res) => {

        if (!req.body) {
                res.status(400).send({
                        message: "Content can not be empty!",
                });
        }

        chart.chartYearMonth(req.body.month, (err, data) => {
                if (err)
                        res.status(500).send({
                                message: err.message || "Some error occurred while creating the Customer.",
                        });
                else {
                        // console.log("Month ",data);
                        return res.status(201).json({
                                data,
                        });
                }
        });

}
exports.chartFilterYear = (req, res) => {

        if (!req.body) {
                res.status(400).send({
                        message: "Content can not be empty!",
                });
        }

        chart.chartYear(req.body.year, (err, data) => {
                if (err)
                        res.status(500).send({
                                message: err.message || "Some error occurred while creating the Customer.",
                        });
                else {
                        // console.log("Year month",data);
       
                        return res.status(201).json({
                                data,
                        });
                }
        });

}
