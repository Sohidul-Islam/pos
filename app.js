const express = require("express");
//call express js modules web framwork for nodejs

const ejs = require("ejs");
//call ejs module which handle html/css/javascript
const path = require("path");
//path module work from which folder we should start to view our site.
const exp = require("constants");

// creat app

const app = express();
// store express module in app constant variable
app.use(express.json());
//we use express.json() for use json array.
app.use(express.urlencoded({ extended: false }));

// view engine setup
app.set("views", path.join(__dirname, "views"));
//here we set from where we show our HTML pages
app.set("view engine", "ejs");
// setup public folder

app.use(express.static("./public"));
//here store our css/javascript and other static files.

const router = require("./app/router/productRouter");
app.use("/", router);

const inventory = require("./app/router/inventoryreport");
app.use("/inventoryreport", inventory);

const inventoryDelete = require("./app/router/inventoryreport");
app.use("/inventoryreport/delete/:id", inventoryDelete);

const paymentReport = require("./app/router/paymentreport");
app.use("/payment-reports", paymentReport);

const checkSales = require("./app/router/checksales");
app.use("/sales", checkSales);

const productBrands = require("./app/router/productBrands");
app.use("/product-brands", productBrands);

const productVendors = require("./app/router/productVendors");
app.use("/product-vendors", productVendors);

const salescounter = require("./app/router/salescount");
app.use("/salescount", salescounter);

const addsales = require("./app/router/addsalesRouter");
app.use("/addsales", addsales);

const addvendors = require("./app/router/addvendorsRouter");
app.use("/addvendors", addvendors);

const addbrands = require("./app/router/addbrandRouter");
app.use("/addbrand", addbrands);

const addproduct = require("./app/router/addproductRouter");
app.use("/addproduct", addproduct);

const addproducttype = require("./app/router/addproductTypeRouter");
app.use("/addproducttype", addproducttype);

const addexpense = require("./app/router/addexpenseRouter");
app.use("/addexpense", addexpense);

const topselling = require("./app/router/topsellingRouter");
app.use("/topselling", topselling);

// const addproducttype = require("./app/router/addproductTypeRouter");
// app.use("/addproducttype", addproducttype);

module.exports = app;
