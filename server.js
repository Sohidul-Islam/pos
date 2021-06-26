const app = require("./app");
//call the app.js module

const server = app.listen(3000, () => {
  console.log("server is connected");
});

//here we create a server which port number is 3000
