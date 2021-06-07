var http = require("http");
var URL = require("url");
var fs = require("fs");

var server = http.createServer((req, res) => {
  if (req.url == "/") {
    //asynchronus method.
    fs.readFile(`${__dirname}/index.html`, function (error, data) {
      res.writeHead(200, {
        "Content-Type": "text/html",
      });
      res.write(data);
      res.end(data);
    });
  } else if (req.url == "/about") {
    fs.readFile("about.html", function (error, data) {
      res.writeHead(200, {
        "Content-Type": "text/html",
      });
      res.write(data);
      res.end(data);
    });
  }
});

server.listen(5050);
console.log("server running");
