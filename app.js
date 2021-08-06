const express = require("express");
//call express js modules web framwork for nodejs

const ejs = require("ejs");
var session = require('express-session');
var MySQLStore = require("express-mysql-session");
//call ejs module which handle html/css/javascript
const path = require("path");
var flash = require('connect-flash');
//path module work from which folder we should start to view our site.
const exp = require("constants");

const sql = require("./app/models/db");

// creat app
var sessionStore = new MySQLStore({ clearExpired: true, checkExpirationInterval: 3000000 }, sql);

const app = express();
app.use(
    session({
        secret: "cookie_secret",
        resave: false,
        saveUninitialized: true,
        store: sessionStore,
        cookie: {
            expires: 3000000,
        },
    })
);

app.use(flash());
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

const home = require("./app/router/productRouter");
app.use("/home", home);

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

const shortitems = require("./app/router/shortitemsRouter");
app.use("/shortitems", shortitems);

const todaysales = require("./app/router/todaysalesRouter");
app.use("/todaysales", todaysales);

const productlist = require("./app/router/productlistRouter");
app.use("/products", productlist);

const productType = require("./app/router/productType");
app.use("/product-types", productType);

const chart = require("./app/router/chartfilterRouter");
app.use("/chartfilter", chart);

const login = require("./app/router/loginRouter");
app.use("/", login);


app.use("/logout",(req,res)=>{
    req.session.destroy();
    res.redirect("/");
});



// main().catch(console.error);

module.exports = app;
