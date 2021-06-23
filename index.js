var express = require("express");
var mysql = require("mysql");
var path = require("path");
const productRouter = require("./router/productRouter");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/index", function (req, res) {
  res.render("index", { title: "specialization List" });
});

app.get("/product-vendors", function (req, res) {
  res.render("product-vendors", { title: "specialization List" });
});

app.get("/product-brands", function (req, res) {
  res.render("product-brands", { title: "specialization List" });
});

app.get("/accounts", function (req, res) {
  res.render("accounts", { title: "specialization List" });
});

app.post("/accounts", function (req, res) {
  res.render("accounts", { title: "specialization List" });
});

// app.get("/products", productRouter);

app.listen(8000, function () {
  console.log("Server Connected");
});
